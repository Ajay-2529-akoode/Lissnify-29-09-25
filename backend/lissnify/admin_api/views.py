from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated,AllowAny
from django.utils.timezone import now, timedelta
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.db.models import Count, Q
from rest_framework import generics, permissions, status
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.utils.crypto import get_random_string
from django.conf import settings
import os
from api.models import Category
from .serializers import CategorySerializer 
from api.models import Seeker, Listener,Connections, User, UserActivity
from chat_api.models import ChatRoom
from chat_api.models import Message
from .serializers import SeekerSerializer, UserSerializer, UserRegisterSerializer,AdminLoginSerializer,ConnectionSerializer,ListenerSerializer, UserActivitySerializer, UserActivitySummarySerializer
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from .serializers import UserSerializer, UserRegisterSerializer
import random
from api.models import Blog
from django.utils.text import slugify
from .serializers import BlogSerializer
from api.models import Testimonial
from .serializers import TestimonialSerializer



        
class AdminLogin(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = AdminLoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data

            # Generate JWT tokens
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            # Update user online status and last seen
            from django.utils import timezone
            user.token = access_token
            user.is_online = True
            user.last_seen = timezone.now()
            user.save(update_fields=['token', 'is_online', 'last_seen'])

            return Response({
                "message": "Admin login successful",
                "refresh": str(refresh),
                "access": access_token,
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)


class AdminLogoutView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def post(self, request):
        try:
            # Get the refresh token from the request body
            refresh_token = request.data.get("refresh")
            if not refresh_token:
                return Response({"error": "Refresh token not provided."}, status=status.HTTP_400_BAD_REQUEST)

            # Create a RefreshToken instance from the token string
            token = RefreshToken(refresh_token)
            
            # Update user online status to offline before blacklisting token
            user = request.user
            from django.utils import timezone
            user.is_online = False
            user.last_seen = timezone.now()
            user.save(update_fields=['is_online', 'last_seen'])
            
            # Blacklist the token
            token.blacklist()

            return Response({"message": "Admin logged out successfully."}, status=status.HTTP_200_OK)
        
        except TokenError as e:
            # This exception is raised if the token is invalid or expired
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            # Catch any other unexpected errors
            return Response({"error": f"An unexpected error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# ✅ Dashboard summary counts (Admin Only)
class DashboardStatsView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        # --- Core User Stats ---
        total_users = User.objects.count()
        total_seekers = Seeker.objects.count()
        total_listeners = Listener.objects.count()

        # --- Activity Stats ---
        active_users = User.objects.filter(is_active=True).count()

        # --- Connection Stats ---
        active_connections = Connections.objects.filter(accepted=True).count()
        pending_connections = Connections.objects.filter(pending=True).count()

        # --- Chat Stats ---
        total_chat_rooms = ChatRoom.objects.count()
        one_to_one_chats = ChatRoom.objects.filter(type='one_to_one').count()
        community_chats = ChatRoom.objects.filter(type='community').count()

        # --- Daily User Growth (Last 7 Days) ---
        today = now().date()
        daily_growth_data = []
        chart_data = []
        for i in range(7):
            day = today - timedelta(days=i)
            # This query counts users whose join date matches the specific day
            count = User.objects.filter(date_joined__date=day).count()
            daily_growth_data.append({"date": day.strftime("%A"), "count": count})
            chart_data.append({"date": day.strftime("%Y-%m-%d"), "active_count": (
                Message.objects.filter(timestamp__date=day)
                .values("author")
                .distinct()
                .count()
            )})
        
        
            
        # --- Final Response ---
        # Structure the data clearly for the frontend
        return Response({
            "stat_cards": {
                "total_users": total_users,
                "active_users": active_users,
                "active_connections": active_connections,
                "total_chat_rooms": total_chat_rooms,
            },
            "user_breakdown": {
                "seekers": total_seekers,
                "listeners": total_listeners,
            },
            "connection_breakdown": {
                "pending": pending_connections,
            },
            "chat_breakdown": {
                "one_to_one": one_to_one_chats,
                "community": community_chats,
            },
            "daily_user_growth": list(reversed(daily_growth_data)),
            "active_user_pie": chart_data
        })


# ✅ Chart: User growth (last 7 days) (Admin Only)
class UserGrowthChartView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        today = now().date()
        growth_data = []

        for i in range(7):
            day = today - timedelta(days=i)
            count = User.objects.filter(date_joined__date=day).count()
            growth_data.append({"date": day.strftime("%Y-%m-%d"), "count": count})

        return Response({"user_growth": list(reversed(growth_data))})


# ✅ Chart: Active users by messages sent (last 7 days) (Admin Only)
class ActiveUsersChartView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        today = now().date()
        chart_data = []

        for i in range(7):
            day = today - timedelta(days=i)
            active_count = (
                Message.objects.filter(timestamp__date=day)
                .values("author")
                .distinct()
                .count()
            )
            chart_data.append({"date": day.strftime("%Y-%m-%d"), "active_users": active_count})

        return Response({"active_users_chart": list(reversed(chart_data))})


# ✅ List all users
class UserListView(generics.ListAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer


# ✅ Retrieve single user by ID
class UserDetailView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer


# ✅ Create a new user (with OTP email)
class CreateUserView(APIView):
    # permission_classes = [permissions.IsAdminUser]

    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            try:
                otp = random.randint(100000, 999999)
                receiver_email = serializer.validated_data.get("email")

                send_mail(
                    subject='Your OTP Code',
                    message=f'Your OTP is: {otp}',
                    from_email=None,  # Uses EMAIL_HOST_USER from settings.py
                    recipient_list=[receiver_email],
                    fail_silently=False,
                )
            except Exception as e:
                return Response(
                    {"error": f"Failed to send verification email: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            serializer.save(otp=str(otp), otp_created_at=now())
            return Response(
                {"message": "OTP sent to your email. Please verify your account."},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ✅ Update user details
class UpdateUserView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def put(self, request, u_id):
        try:
            user = User.objects.get(u_id=u_id)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ✅ (Optional) Delete user
class DeleteUserView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def delete(self, request, u_id):
        try:
            user = User.objects.get(u_id=u_id)
            user.delete()
            return Response({"message": "User deleted successfully"}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
class GetConnectionsList(APIView):
    permission_classes = [permissions.IsAdminUser]
 
    def get(self, request):
        try:
            # 1. Fetch all connections.
            # Use `prefetch_related` to optimize the query by fetching all related
            # seeker and listener user data in a minimal number of queries.
            connections = Connections.objects.prefetch_related('seeker__user', 'listener__user').all()
 
            # 2. Serialize the connections.
            # The ConnectionSerializer will handle nesting the seeker and listener details.
            serializer = ConnectionSerializer(connections, many=True)
 
            # 3. Return the single list of connection objects.
            return Response(serializer.data)
 
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CategoryListCreateView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data.copy()
        icon_file = request.FILES.get('icon')

        # handle file upload to MEDIA_ROOT (public)
        if icon_file:
            filename_base, ext = os.path.splitext(icon_file.name)
            safe_name = f"category_{get_random_string(8)}{ext.lower()}"
            path = os.path.join('public/categories', safe_name)
            saved_path = default_storage.save(path, ContentFile(icon_file.read()))
            data['icon'] = saved_path  # store relative path

        serializer = CategorySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ✅ Retrieve + Update + Delete
class CategoryDetailView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get_object(self, id):
        try:
            return Category.objects.get(id=id)
        except Category.DoesNotExist:
            return None

    def get(self, request, id):
        category = self.get_object(id)
        if not category:
            return Response({"error": "Category not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        category = self.get_object(id)
        if not category:
            return Response({"error": "Category not found"}, status=status.HTTP_404_NOT_FOUND)

        data = request.data.copy()
        icon_file = request.FILES.get('icon')
        if icon_file:
            filename_base, ext = os.path.splitext(icon_file.name)
            safe_name = f"category_{get_random_string(8)}{ext.lower()}"
            path = os.path.join('public/categories', safe_name)
            saved_path = default_storage.save(path, ContentFile(icon_file.read()))
            data['icon'] = saved_path

        serializer = CategorySerializer(category, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, id):
        category = self.get_object(id)
        if not category:
            return Response({"error": "Category not found"}, status=status.HTTP_404_NOT_FOUND)

        data = request.data.copy()
        icon_file = request.FILES.get('icon')
        if icon_file:
            filename_base, ext = os.path.splitext(icon_file.name)
            safe_name = f"category_{get_random_string(8)}{ext.lower()}"
            path = os.path.join('public/categories', safe_name)
            saved_path = default_storage.save(path, ContentFile(icon_file.read()))
            data['icon'] = saved_path

        serializer = CategorySerializer(category, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        category = self.get_object(id)  
        if not category:
            return Response({"error": "Category not found"}, status=status.HTTP_404_NOT_FOUND)
        category.delete()
        return Response({"message": "Category deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    
class ToggleUserActive(APIView):
    def post(self, request):
        u_id = request.data.get("u_id")
        is_active = request.data.get("is_active")

        if not u_id:
            return Response({"error": "u_id is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(u_id=u_id)
            user.is_active = is_active
            user.save()
            return Response(
                {"message": f"User {u_id} active status updated", "is_active": user.is_active},
                status=status.HTTP_200_OK
            )
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)    


class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        refresh_token = request.data.get("refresh")
        if not refresh_token:
            return Response({"message": "Logged out (no refresh provided)."}, status=status.HTTP_200_OK)

        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Logged out successfully."}, status=status.HTTP_200_OK)
        except TokenError:
            return Response({"message": "Logged out (invalid refresh)."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class ListenerDetailView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get_object(self, pk):
        try:
            return Listener.objects.get(pk=pk)
        except Listener.DoesNotExist:
            return None

    def get(self, request, pk):
        listener = self.get_object(pk)
        if not listener:
            return Response({"error": "Listener not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ListenerSerializer(listener)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        listener = self.get_object(pk)
        if not listener:
            return Response({"error": "Listener not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = ListenerSerializer(listener, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()   # user stays same, only other fields update
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        listener = self.get_object(pk)
        if not listener:
            return Response({"error": "Listener not found"}, status=status.HTTP_404_NOT_FOUND)

        listener.delete()
        return Response({"message": "Listener deleted successfully"}, status=status.HTTP_204_NO_CONTENT)    


class BlogListCreateView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        blogs = Blog.objects.all().order_by('-date')
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data.copy()

        # Handle image upload
        image_file = request.FILES.get('image')
        if image_file:
            filename_base, ext = os.path.splitext(image_file.name)
            safe_name = f"blog_{get_random_string(8)}{ext.lower()}"
            path = os.path.join('public/blogs', safe_name)
            saved_path = default_storage.save(path, ContentFile(image_file.read()))
            data['image'] = saved_path

        # Generate slug
        if 'title' in data and data['title']:
            data['slug'] = slugify(data['title']) + "-" + get_random_string(5)

        serializer = BlogSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # ✅ correctly set user
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlogDetailView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get_object(self, id):
        try:
            return Blog.objects.get(id=id)
        except Blog.DoesNotExist:
            return None

    def get(self, request, id):
        blog = self.get_object(id)
        if not blog:
            return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = BlogSerializer(blog)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        blog = self.get_object(id)
        if not blog:
            return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)

        # Admin users can edit any blog
        if not request.user.is_staff:
            return Response({"error": "Permission denied"}, status=status.HTTP_403_FORBIDDEN)

        data = request.data.copy()

        # Handle image update
        image_file = request.FILES.get('image')
        if image_file:
            filename_base, ext = os.path.splitext(image_file.name)
            safe_name = f"blogs_{get_random_string(8)}{ext.lower()}"
            path = os.path.join('public/blogs', safe_name)
            saved_path = default_storage.save(path, ContentFile(image_file.read()))
            data['image'] = saved_path
        # Data processed
        serializer = BlogSerializer(blog, data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # ✅ ensure user is saved
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, id):
        blog = self.get_object(id)
        if not blog:
            return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)

        # Admin users can edit any blog
        if not request.user.is_staff:
            return Response({"error": "Permission denied"}, status=status.HTTP_403_FORBIDDEN)

        data = request.data.copy()

        image_file = request.FILES.get('image')
        if image_file:
            filename_base, ext = os.path.splitext(image_file.name)
            safe_name = f"blog_{get_random_string(8)}{ext.lower()}"
            path = os.path.join('blogs', safe_name)
            saved_path = default_storage.save(path, ContentFile(image_file.read()))
            data['image'] = saved_path

        serializer = BlogSerializer(blog, data=data, partial=True)
        if serializer.is_valid():
            serializer.save(user=request.user)  # ✅ ensure user is saved
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        blog = self.get_object(id)
        if not blog:
            return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)

        # Admin users can edit any blog
        if not request.user.is_staff:
            return Response({"error": "Permission denied"}, status=status.HTTP_403_FORBIDDEN)

        blog.delete()
        return Response({"message": "Blog deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    
      #   testmonial   
    
class TestimonialViewSet(APIView):
    permission_classes = [permissions.IsAdminUser]
    def get(self, request):
        Testimonials = Testimonial.objects.all().order_by('-created_at')
        serializer = TestimonialSerializer(Testimonials, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            testimonial = Testimonial.objects.get(pk=pk)
            testimonial.delete()
            return Response({"message": "Testimonial deleted successfully"}, status=status.HTTP_200_OK)
        except Testimonial.DoesNotExist:
            return Response({"error": "Testimonial not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            testimonial = Testimonial.objects.get(pk=pk)
        except Testimonial.DoesNotExist:
            return Response({"error": "Testimonial not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = TestimonialSerializer(testimonial, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()               
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserActivityAPIView(APIView):
    """API view for user activity data"""
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        """Get user activity data with filtering and pagination"""
        try:
            # Get query parameters
            search = request.query_params.get('search', '')
            user_type = request.query_params.get('user_type', 'all')
            status_filter = request.query_params.get('status', 'all')
            sort_by = request.query_params.get('sort_by', 'last_seen')
            sort_order = request.query_params.get('sort_order', 'desc')
            page = int(request.query_params.get('page', 1))
            page_size = int(request.query_params.get('page_size', 10))
            
            # Start with all users
            users = User.objects.all()
            
            # Apply filters
            if search:
                users = users.filter(
                    Q(full_name__icontains=search) | 
                    Q(email__icontains=search)
                )
            
            if user_type != 'all':
                users = users.filter(user_type=user_type)
            
            if status_filter != 'all':
                if status_filter == 'online':
                    users = users.filter(is_online=True)
                elif status_filter == 'away':
                    from django.utils import timezone
                    five_minutes_ago = timezone.now() - timedelta(minutes=5)
                    users = users.filter(
                        is_online=False,
                        last_seen__gte=five_minutes_ago
                    )
                elif status_filter == 'offline':
                    from django.utils import timezone
                    five_minutes_ago = timezone.now() - timedelta(minutes=5)
                    users = users.filter(
                        is_online=False,
                        last_seen__lt=five_minutes_ago
                    )
            
            # Apply sorting
            if sort_by == 'name':
                sort_field = 'full_name'
            elif sort_by == 'last_active':
                sort_field = 'last_seen'
            elif sort_by == 'activity_score':
                sort_field = 'activity_score'
            else:
                sort_field = 'last_seen'
            
            if sort_order == 'asc':
                users = users.order_by(sort_field)
            else:
                users = users.order_by(f'-{sort_field}')
            
            # Calculate pagination
            total_users = users.count()
            start_index = (page - 1) * page_size
            end_index = start_index + page_size
            users_page = users[start_index:end_index]
            
            # Serialize data
            serializer = UserActivitySummarySerializer(users_page, many=True)
            
            # Calculate summary statistics
            total_active_users = User.objects.filter(is_online=True).count()
            total_seekers = User.objects.filter(user_type='seeker').count()
            total_listeners = User.objects.filter(user_type='listener').count()
            
            # Calculate average session duration
            users_with_session = User.objects.exclude(session_duration__isnull=True)
            if users_with_session.exists():
                avg_session_seconds = sum(
                    user.session_duration.total_seconds() 
                    for user in users_with_session
                ) / users_with_session.count()
                avg_hours = int(avg_session_seconds // 3600)
                avg_minutes = int((avg_session_seconds % 3600) // 60)
                avg_session_duration = f"{avg_hours}h {avg_minutes}m" if avg_hours > 0 else f"{avg_minutes}m"
            else:
                avg_session_duration = "0m"
            
            # Find peak visit time (mock data for now)
            peak_visit_time = "7–9 PM"
            
            return Response({
                'users': serializer.data,
                'pagination': {
                    'current_page': page,
                    'page_size': page_size,
                    'total_users': total_users,
                    'total_pages': (total_users + page_size - 1) // page_size,
                    'has_next': end_index < total_users,
                    'has_previous': page > 1
                },
                'summary': {
                    'total_active_users': total_active_users,
                    'total_seekers': total_seekers,
                    'total_listeners': total_listeners,
                    'avg_session_duration': avg_session_duration,
                    'peak_visit_time': peak_visit_time
                }
            }, status=status.HTTP_200_OK)
            
        except Exception as e:
            return Response({
                'error': f'Failed to fetch user activity data: {str(e)}'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserActivityDetailAPIView(APIView):
    """API view for detailed user activity logs"""
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request, user_id):
        """Get detailed activity logs for a specific user"""
        try:
            user = User.objects.get(u_id=user_id)
            activities = UserActivity.objects.filter(user=user).order_by('-created_at')
            
            # Get query parameters
            activity_type = request.query_params.get('activity_type', '')
            page = int(request.query_params.get('page', 1))
            page_size = int(request.query_params.get('page_size', 20))
            
            # Apply filters
            if activity_type:
                activities = activities.filter(activity_type__icontains=activity_type)
            
            # Calculate pagination
            total_activities = activities.count()
            start_index = (page - 1) * page_size
            end_index = start_index + page_size
            activities_page = activities[start_index:end_index]
            
            # Serialize data
            serializer = UserActivitySerializer(activities_page, many=True)
            
            return Response({
                'user': {
                    'u_id': user.u_id,
                    'full_name': user.full_name,
                    'email': user.email,
                    'user_type': user.user_type,
                    'is_online': user.is_online,
                    'last_seen': user.last_seen
                },
                'activities': serializer.data,
                'pagination': {
                    'current_page': page,
                    'page_size': page_size,
                    'total_activities': total_activities,
                    'total_pages': (total_activities + page_size - 1) // page_size,
                    'has_next': end_index < total_activities,
                    'has_previous': page > 1
                }
            }, status=status.HTTP_200_OK)
            
        except User.DoesNotExist:
            return Response({
                'error': 'User not found'
            }, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({
                'error': f'Failed to fetch user activity details: {str(e)}'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  