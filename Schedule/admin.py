from django.contrib import admin
from rangefilter.filters import DateRangeFilter
from .models import Teacher, Group, Cabinet, TimeTable


@admin.register(TimeTable)
class TimeTableAdmin(admin.ModelAdmin):
    list_display = ['id', 'number', 'teacher', 'date', 'group', 'cabinet', 'reduction']
    list_editable = ['number', 'teacher', 'date', 'group', 'cabinet', 'reduction']
    ordering = ['date', 'teacher', 'number']
    search_fields = ['teacher__last_name', 'date', 'group']
    list_filter = (('date', DateRangeFilter), )
    save_as = True


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'middle_name')
    search_fields = ('first_name', 'last_name', 'middle_name')


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    search_fields = ['group_name__startswith']
    ordering = ['group_name']


@admin.register(Cabinet)
class CabinetAdmin(admin.ModelAdmin):
    search_fields = ['cabinet_name__startswith']
    ordering = ['cabinet_name']


admin.site.site_header = 'ЕЭТК'
admin.site.index_title = 'Админка сайта'
