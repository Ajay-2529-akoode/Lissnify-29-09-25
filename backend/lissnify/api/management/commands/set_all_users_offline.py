from django.core.management.base import BaseCommand
from django.utils import timezone
from api.models import User


class Command(BaseCommand):
    help = 'Set all users to offline status for testing'

    def handle(self, *args, **options):
        # Set all users to offline
        count = User.objects.update(is_online=False, last_seen=timezone.now())
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully set {count} users to offline status')
        )
