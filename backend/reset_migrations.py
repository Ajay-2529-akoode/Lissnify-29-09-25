#!/usr/bin/env python
"""
Simple script to reset migrations and fix the database issues
"""

import os
import sys
import subprocess

def run_command(command, description):
    """Run a command and print the result"""
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        return True
    except subprocess.CalledProcessError as e:
        return False

def main():
    """Main function to reset migrations"""
    
    # Change to the correct directory
    os.chdir(os.path.join(os.path.dirname(__file__), 'lissnify'))
    
    # Step 1: Show current migration status
    run_command("python manage.py showmigrations api", "Checking current migration status")
    
    # Step 2: Reset migrations to a safe point
    # Resetting to migration 0001
    run_command("python manage.py migrate api 0001 --fake", "Resetting to initial migration")
    
    # Step 3: Create new migrations
    run_command("python manage.py makemigrations api", "Creating new migrations")
    
    # Step 4: Apply migrations
    run_command("python manage.py migrate", "Applying all migrations")
    
    # Step 5: Show final status
    run_command("python manage.py showmigrations api", "Final migration status")
    
    # Migration reset completed

if __name__ == "__main__":
    main()
