from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.add_user_comments),
    path('<str:video_id>/', views.get_all_comments),
    path('<int:pk>/update/', views.update_user_comment),
]
