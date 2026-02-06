"""
Domain Services Layer
Contains business logic and use cases for contact management.
"""
from typing import Dict, Any, Optional
from django.core.exceptions import ValidationError
from rest_framework import serializers
from .models import Contact
from .serializers import ContactCreateSerializer, ContactResponseSerializer
from .email_service import ContactEmailService


class ContactSubmissionService:
    """
    Domain Service: Handles contact form submission business logic
    Implements the use case for creating contact submissions.
    """

    @staticmethod
    def create_contact_submission(data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Use Case: Create a new contact submission
        
        Args:
            data: Dictionary containing contact form data
            
        Returns:
            Dictionary containing the created contact data and status
            
        Raises:
            serializers.ValidationError: If validation fails
        """
        # Validate input data using serializer (application layer)
        serializer = ContactCreateSerializer(data=data)
        
        if not serializer.is_valid():
            raise serializers.ValidationError(serializer.errors)
        
        # Create contact entity (domain layer)
        validated_data = serializer.validated_data
        contact = Contact.objects.create(**validated_data)
        
        # Return response using response serializer
        response_serializer = ContactResponseSerializer(contact)
        contact_data = response_serializer.data
        
        # Send email notification to admin (infrastructure layer)
        # This is done asynchronously to not block the response
        try:
            ContactEmailService.send_contact_notification(contact_data)
        except Exception as e:
            # Log error but don't fail the submission
            import logging
            logger = logging.getLogger(__name__)
            logger.error(f"Failed to send email notification: {str(e)}", exc_info=True)
        
        return {
            'success': True,
            'message': 'Contact submission received successfully.',
            'data': contact_data
        }

    @staticmethod
    def validate_contact_data(data: Dict[str, Any]) -> bool:
        """
        Domain Service Method: Validate contact data before submission
        
        Args:
            data: Dictionary containing contact form data
            
        Returns:
            True if valid, raises ValidationError otherwise
        """
        serializer = ContactCreateSerializer(data=data)
        return serializer.is_valid(raise_exception=True)


class ContactQueryService:
    """
    Domain Service: Handles contact query operations
    (For future use: listing, filtering, etc.)
    """
    
    @staticmethod
    def get_contact_by_id(contact_id: int) -> Optional[Contact]:
        """Get contact by ID"""
        try:
            return Contact.objects.get(id=contact_id)
        except Contact.DoesNotExist:
            return None
