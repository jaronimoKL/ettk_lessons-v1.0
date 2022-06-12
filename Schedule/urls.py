from django.urls import path, re_path
from . import views
from django.views.decorators.cache import cache_page

urlpatterns = [
    re_path(r'^$', views.TeacherNameView.as_view(), name='teacher_name'),
    # path('', views.GroupNameView.as_view(), name='group_name'),
    path(r'filter/', views.LessonFilterView.as_view(), name='lesson_filter')
]