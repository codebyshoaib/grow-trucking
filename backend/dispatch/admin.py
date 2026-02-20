from django.contrib import admin
from .models import Contact, Signup, Claim


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


@admin.register(Signup)
class SignupAdmin(admin.ModelAdmin):
    """
    Admin interface for Signup model
    """
    list_display = ['id', 'signup_type', 'primary_name', 'email', 'primary_email', 'is_approved', 'is_active', 'created_at']
    list_filter = ['signup_type', 'is_approved', 'is_active', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'company_name', 'owner_name', 'company_email', 'owner_email', 'motor_carrier_no']
    readonly_fields = ['created_at', 'updated_at']
    list_editable = ['is_approved', 'is_active']
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Signup Type', {
            'fields': ('signup_type',)
        }),
        ('Company Information', {
            'fields': ('company_name', 'company_email', 'company_contact_number'),
            'classes': ('collapse',)
        }),
        ('Owner Information', {
            'fields': ('owner_name', 'owner_email', 'owner_contact_number'),
            'classes': ('collapse',)
        }),
        ('Business Details', {
            'fields': ('motor_carrier_no', 'authority_age', 'number_of_trucks', 'truck_type', 'operation_area')
        }),
        ('Contact Person Details', {
            'fields': ('first_name', 'last_name', 'contact_number', 'communication_method', 'email')
        }),
        ('Status', {
            'fields': ('is_approved', 'is_active')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def get_queryset(self, request):
        """Optimize queryset"""
        return super().get_queryset(request)


@admin.register(Claim)
class ClaimAdmin(admin.ModelAdmin):
    """
    Admin interface for Claim model
    """
    list_display = ['id', 'full_name', 'email', 'company_name', 'preferred_route', 'age_of_mc_authority', 'is_read', 'is_archived', 'created_at']
    list_filter = ['is_read', 'is_archived', 'created_at']
    search_fields = ['full_name', 'email', 'company_name', 'preferred_route', 'phone']
    readonly_fields = ['created_at', 'updated_at']
    list_editable = ['is_read', 'is_archived']
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Claimant Information', {
            'fields': ('full_name', 'email', 'phone')
        }),
        ('Company Details', {
            'fields': ('company_name', 'preferred_route', 'age_of_mc_authority')
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
        """Optimize queryset"""
        return super().get_queryset(request)
