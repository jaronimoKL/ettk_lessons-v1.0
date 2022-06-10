from django.urls import path
from . import views
from django.views.decorators.cache import cache_page

urlpatterns = [
    path('', views.TeacherNameView.as_view(), name='teacher_name'),
    path('filter/', views.LessonFilterView.as_view(), name='lesson_filter')
]