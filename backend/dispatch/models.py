from django.db import models
from django.core.validators import EmailValidator
from django.contrib.auth.models import User


class Contact(models.Model):
    """
    Domain Entity: Contact Submission
    Represents a contact form submission from a user.
    """
    first_name = models.CharField(max_length=100, db_index=True)
    last_name = models.CharField(max_length=100, db_index=True)
    email = models.EmailField(
        max_length=255,
        validators=[EmailValidator()],
        db_index=True
    )
    phone = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_read = models.BooleanField(default=False)
    is_archived = models.BooleanField(default=False)

    class Meta:
        db_table = 'contacts'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['-created_at']),
            models.Index(fields=['email']),
            models.Index(fields=['is_read', 'is_archived']),
        ]
        verbose_name = 'Contact Submission'
        verbose_name_plural = 'Contact Submissions'

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"

    @property
    def full_name(self):
        """Domain method: Get full name"""
        return f"{self.first_name} {self.last_name}".strip()

    def mark_as_read(self):
        """Domain method: Mark contact as read"""
        self.is_read = True
        self.save(update_fields=['is_read', 'updated_at'])

    def archive(self):
        """Domain method: Archive contact"""
        self.is_archived = True
        self.save(update_fields=['is_archived', 'updated_at'])


class Signup(models.Model):
    """
    Domain Entity: Signup Registration
    Represents a user signup submission (Company or Owner Operator).
    """
    SIGNUP_TYPE_CHOICES = [
        ('company', 'Company'),
        ('owner-operator', 'Owner Operator'),
    ]

    signup_type = models.CharField(
        max_length=20,
        choices=SIGNUP_TYPE_CHOICES,
        db_index=True
    )
    
    # Company/Owner fields (depending on signup_type)
    company_name = models.CharField(max_length=255, blank=True, null=True, db_index=True)
    owner_name = models.CharField(max_length=255, blank=True, null=True, db_index=True)
    company_email = models.EmailField(
        max_length=255,
        blank=True,
        null=True,
        validators=[EmailValidator()],
        db_index=True
    )
    owner_email = models.EmailField(
        max_length=255,
        blank=True,
        null=True,
        validators=[EmailValidator()],
        db_index=True
    )
    company_contact_number = models.CharField(max_length=20, blank=True, null=True)
    owner_contact_number = models.CharField(max_length=20, blank=True, null=True)
    
    # Common fields
    motor_carrier_no = models.CharField(max_length=50, blank=True, null=True, db_index=True)
    authority_age = models.IntegerField(blank=True, null=True)
    number_of_trucks = models.CharField(max_length=50)
    truck_type = models.CharField(max_length=100)
    operation_area = models.CharField(max_length=100)
    
    # Contact Person Details
    first_name = models.CharField(max_length=100, db_index=True)
    last_name = models.CharField(max_length=100, db_index=True)
    contact_number = models.CharField(max_length=20)
    communication_method = models.CharField(max_length=50)
    email = models.EmailField(
        max_length=255,
        validators=[EmailValidator()],
        db_index=True
    )
    
    # User account reference (created during signup)
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='signup',
        blank=True,
        null=True
    )
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_approved = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'signups'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['-created_at']),
            models.Index(fields=['signup_type']),
            models.Index(fields=['email']),
            models.Index(fields=['company_email']),
            models.Index(fields=['owner_email']),
            models.Index(fields=['is_approved', 'is_active']),
        ]
        verbose_name = 'Signup Registration'
        verbose_name_plural = 'Signup Registrations'

    def __str__(self):
        if self.signup_type == 'company' and self.company_name:
            return f"{self.company_name} - {self.email}"
        elif self.signup_type == 'owner-operator' and self.owner_name:
            return f"{self.owner_name} - {self.email}"
        return f"{self.first_name} {self.last_name} - {self.email}"

    @property
    def full_name(self):
        """Domain method: Get full name of contact person"""
        return f"{self.first_name} {self.last_name}".strip()

    @property
    def primary_email(self):
        """Domain method: Get primary email based on signup type"""
        if self.signup_type == 'company':
            return self.company_email or self.email
        else:
            return self.owner_email or self.email

    @property
    def primary_name(self):
        """Domain method: Get primary name based on signup type"""
        if self.signup_type == 'company':
            return self.company_name or ''
        else:
            return self.owner_name or ''

    @property
    def primary_contact_number(self):
        """Domain method: Get primary contact number based on signup type"""
        if self.signup_type == 'company':
            return self.company_contact_number or self.contact_number
        else:
            return self.owner_contact_number or self.contact_number

    def approve(self):
        """Domain method: Approve signup"""
        self.is_approved = True
        self.save(update_fields=['is_approved', 'updated_at'])

    def deactivate(self):
        """Domain method: Deactivate signup"""
        self.is_active = False
        self.save(update_fields=['is_active', 'updated_at'])
