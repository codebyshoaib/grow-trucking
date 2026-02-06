from django.db import models
from django.core.validators import EmailValidator


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
