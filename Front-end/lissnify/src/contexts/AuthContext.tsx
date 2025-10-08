"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// User interface
export interface User {
  full_name: string;
  email: string;
  user_type: string;
  // Add other user fields as needed
}

// Authentication context interface
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: User, accessToken?: string) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Add beforeunload event listener to handle browser close/refresh
  useEffect(() => {
    const handleBeforeUnload = async () => {
      const token = localStorage.getItem('elysian_token');
      const refreshToken = localStorage.getItem('elysian_refresh');
      
      if (token && refreshToken) {
        // Use sendBeacon for reliable delivery even when page is closing
        const data = JSON.stringify({ refresh: refreshToken });
        navigator.sendBeacon(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/logout/`,
          data
        );
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Add heartbeat mechanism to keep active users online
  useEffect(() => {
    if (!user) return;

    const sendHeartbeat = async () => {
      const token = localStorage.getItem('elysian_token');
      if (token) {
        try {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/user-activity/heartbeat/`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          console.error('Heartbeat failed:', error);
        }
      }
    };

    // Send heartbeat every 2 minutes
    const heartbeatInterval = setInterval(sendHeartbeat, 120000);
    
    return () => {
      clearInterval(heartbeatInterval);
    };
  }, [user]);

  // Check authentication status from localStorage
  const checkAuthStatus = () => {
    try {
      const storedUser = localStorage.getItem('elysian_user');
      const storedToken = localStorage.getItem('elysian_token');
      
      if (storedUser && storedToken) {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      }
    } catch (error) {
      // Clear invalid data
      localStorage.removeItem('elysian_user');
      localStorage.removeItem('elysian_token');
    } finally {
      setIsLoading(false);
    }
  };

  // Login function
  const login = (userData: User, accessToken?: string, refreshToken?: string) => {
    setUser(userData);
    // Store user data and token in localStorage
    localStorage.setItem('elysian_user', JSON.stringify(userData));
    if (accessToken) {
      localStorage.setItem('elysian_token', accessToken);
    }
    if (refreshToken) {
      localStorage.setItem('elysian_refresh', refreshToken);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      const token = localStorage.getItem('elysian_token');
      const refreshToken = localStorage.getItem('elysian_refresh');
      
      console.log('Logout called with token:', !!token, 'refresh:', !!refreshToken);
      
      // Call backend logout API if we have tokens
      if (token && refreshToken) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/logout/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ refresh: refreshToken }),
        });
        
        console.log('Logout API response:', response.status, response.ok);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Logout successful:', data);
        } else {
          console.error('Logout API failed:', response.status, await response.text());
        }
      } else {
        console.log('No tokens found, skipping API call');
      }
    } catch (error) {
      console.error('Logout API call failed:', error);
      // Continue with local logout even if API call fails
    } finally {
      // Always clear local data
      setUser(null);
      localStorage.clear();
      localStorage.removeItem('elysian_user');
      localStorage.removeItem('elysian_token');
      localStorage.removeItem('elysian_refresh');
      console.log('Local storage cleared');
    }
  };

  // Update user data
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('elysian_user', JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
