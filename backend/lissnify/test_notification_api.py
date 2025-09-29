#!/usr/bin/env python
"""
Test script to test notification API endpoints
"""
import requests
import json

# Test the notification API
API_BASE = "http://localhost:8000/api"

def test_notification_api():
    # You'll need to replace this with a valid adminToken from your localStorage
    # Get it from: localStorage.getItem('adminToken') in browser console
    admin_token = input("Enter your adminToken from localStorage: ").strip()
    
    if not admin_token:
        return
    
    headers = {
        'Authorization': f'Bearer {admin_token}',
        'Content-Type': 'application/json'
    }
    
    # Test 1: Create a test notification
    try:
        response = requests.post(f"{API_BASE}/notifications/test/", headers=headers)
    except Exception as e:
        pass
    
    # Test 2: Get notifications
    try:
        response = requests.get(f"{API_BASE}/notifications/", headers=headers)
        data = response.json()
    except Exception as e:
        pass
    
    # Test 3: Get notification stats
    try:
        response = requests.get(f"{API_BASE}/notifications/stats/", headers=headers)
    except Exception as e:
        pass

if __name__ == "__main__":
    test_notification_api()
