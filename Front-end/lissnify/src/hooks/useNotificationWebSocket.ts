import { useEffect, useRef, useState } from 'react';

export interface Notification {
  id: number;
  recipient: number;
  sender: number;
  notification_type: 'message' | 'connection_request' | 'connection_accepted' | 'connection_rejected' | 'system';
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
  chat_room_id?: number;
  message_id?: number;
  sender_username: string;
  recipient_username: string;
}

interface WebSocketMessage {
  type: 'notification' | 'unread_count';
  notification?: Notification;
  count?: number;
}

const WS_BASE_URL = process.env.NEXT_PUBLIC_WS_URL || 'wss://lissnify-v2.onrender.com';

export const useNotificationWebSocket = (onNotificationReceived?: () => void) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [newNotification, setNewNotification] = useState<Notification | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttempts = useRef(0);
  const maxReconnectAttempts = 5;

  const connect = () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      return;
    }

    try {
      const wsUrl = `${WS_BASE_URL}/ws/notifications/?token=${token}`;
      const newSocket = new WebSocket(wsUrl);

      newSocket.onopen = () => {
        setIsConnected(true);
        reconnectAttempts.current = 0;
        
        // Request initial unread count
        getUnreadCount();
      };

      newSocket.onmessage = (event) => {
        try {
          const data: WebSocketMessage = JSON.parse(event.data);
          
          if (data.type === 'notification' && data.notification) {
            setNewNotification(data.notification);
            // Call the callback to refresh stats
            if (onNotificationReceived) {
              onNotificationReceived();
            }
          } else if (data.type === 'unread_count' && data.count !== undefined) {
            setUnreadCount(data.count);
          }
        } catch (error) {
        }
      };

      newSocket.onclose = (event) => {
        setIsConnected(false);
        
        // Attempt to reconnect if not a manual close
        if (event.code !== 1000 && reconnectAttempts.current < maxReconnectAttempts) {
          const delay = Math.pow(2, reconnectAttempts.current) * 1000; // Exponential backoff
          reconnectTimeoutRef.current = setTimeout(() => {
            reconnectAttempts.current++;
            connect();
          }, delay);
        } else if (reconnectAttempts.current >= maxReconnectAttempts) {
        }
      };

      newSocket.onerror = (error) => {
        // Don't show error immediately on first attempt - let onclose handle retry logic
        if (reconnectAttempts.current === 0) {
        }
      };

      setSocket(newSocket);
    } catch (error) {
    }
  };

  const disconnect = () => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    
    if (socket) {
      socket.close(1000, 'Manual disconnect');
      setSocket(null);
    }
    setIsConnected(false);
  };

  const markAsRead = (notificationId: number) => {
    if (socket && isConnected) {
      socket.send(JSON.stringify({
        type: 'mark_read',
        notification_id: notificationId
      }));
    }
  };

  const getUnreadCount = () => {
    if (socket && isConnected) {
      socket.send(JSON.stringify({
        type: 'get_unread_count'
      }));
    }
  };

  // Connect on mount with a delay to allow authentication to complete
  useEffect(() => {
    // Delay to ensure authentication is ready
    const connectTimeout = setTimeout(() => {
      connect();
    }, 500);

    return () => {
      clearTimeout(connectTimeout);
      disconnect();
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, []);

  return {
    isConnected,
    unreadCount,
    newNotification,
    markAsRead,
    getUnreadCount,
    connect,
    disconnect,
  };
};