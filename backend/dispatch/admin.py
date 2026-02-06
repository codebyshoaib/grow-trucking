from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    """
    Admin interface for Contact model
    """
    list_display = ['full_name', 'email', 'phone', 'is_read', 'is_archived', 'created_at']
    list_filter = ['is_read', 'is_archived', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'phone', 'message']
    readonly_fields = ['created_at', 'updated_at']
    list_editable = ['is_read', 'is_archived']
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('first_name', 'last_name', 'email', 'phone')
        }),
        ('Message', {
            'fields': ('message',)
        }),
        ('Status', {
            'fields': ('is_read', 'is_archived')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def get_queryset(self, request):
        """Optimize queryset with select_related if needed"""
        return super().get_queryset(request)
