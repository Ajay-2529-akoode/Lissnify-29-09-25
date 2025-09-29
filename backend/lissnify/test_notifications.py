#!/usr/bin/env python
"""
Test script to verify notification system is working
"""
import os
import sys
import django

# Add the project directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Lissnify.settings')
django.setup()

from api.models import User, Notification, NotificationSettings
from chat_api.models import ChatRoom, Message

def test_notification_system():
    # Check if we have users
    users = User.objects.all()
    
    # Check if we have notifications
    notifications = Notification.objects.all()
    
    # Check if we have notification settings
    settings = NotificationSettings.objects.all()
    
    # Check if we have chat rooms
    rooms = ChatRoom.objects.all()
    
    # Check if we have messages
    messages = Message.objects.all()
    
    # Create a test notification if we have users
    if users.exists():
        user = users.first()
        # Create notification settings if they don't exist
        settings, created = NotificationSettings.objects.get_or_create(user=user)
        
        # Create a test notification
        test_notification = Notification.objects.create(
            recipient=user,
            notification_type='message',
            title='Test Notification',
            message='This is a test notification to verify the system is working',
            chat_room_id=1,
            message_id=1
        )
        # Clean up test notification
        test_notification.delete()

if __name__ == "__main__":
    test_notification_system()
