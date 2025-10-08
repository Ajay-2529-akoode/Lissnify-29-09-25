from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
from api.models import User


class Command(BaseCommand):
    help = 'Update users to offline status if they have been inactive for more than 5 minutes'

    def handle(self, *args, **options):
        # Calculate the cutoff time (5 minutes ago)
        cutoff_time = timezone.now() - timedelta(minutes=5)
        
        # Find users who are marked as online but haven't been seen for more than 5 minutes
        inactive_users = User.objects.filter(
            is_online=True,
            last_seen__lt=cutoff_time
        )
        
        # Update their status to offline
        count = inactive_users.update(is_online=False)
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully updated {count} users to offline status')
        )
