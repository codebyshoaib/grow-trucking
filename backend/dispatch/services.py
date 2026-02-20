"""
Domain Services Layer
Contains business logic and use cases for contact management and signup.
"""
from typing import Dict, Any, Optional
from django.core.exceptions import ValidationError
from rest_framework import serializers
from .models import Contact, Signup, Claim
from .serializers import (
    ContactCreateSerializer,
    ContactResponseSerializer,
    SignupCreateSerializer,
    SignupResponseSerializer,
    ClaimCreateSerializer,
    ClaimResponseSerializer
)
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


class SignupSubmissionService:
    """
    Domain Service: Handles signup form submission business logic
    Implements the use case for creating user signup registrations.
    """

    @staticmethod
    def create_signup_submission(data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Use Case: Create a new signup submission
        
        Args:
            data: Dictionary containing signup form data
            
        Returns:
            Dictionary containing the created signup data and status
            
        Raises:
            serializers.ValidationError: If validation fails
        """
        # Validate input data using serializer (application layer)
        serializer = SignupCreateSerializer(data=data)
        
        if not serializer.is_valid():
            raise serializers.ValidationError(serializer.errors)
        
        validated_data = serializer.validated_data
        
        # Check if signup with this email already exists
        email = validated_data.get('email', '').strip().lower()
        if Signup.objects.filter(email=email).exists():
            raise serializers.ValidationError({
                'email': ['A signup with this email already exists.']
            })
        
        # Check if company/owner email already exists (if provided)
        signup_type = validated_data.get('signup_type')
        if signup_type == 'company':
            company_email = validated_data.get('company_email', '').strip().lower()
            if company_email and Signup.objects.filter(company_email=company_email).exists():
                raise serializers.ValidationError({
                    'company_email': ['A signup with this company email already exists.']
                })
        elif signup_type == 'owner-operator':
            owner_email = validated_data.get('owner_email', '').strip().lower()
            if owner_email and Signup.objects.filter(owner_email=owner_email).exists():
                raise serializers.ValidationError({
                    'owner_email': ['A signup with this owner email already exists.']
                })
        
        # Extract password before creating signup (stored but not used for User creation)
        password = validated_data.pop('password')
        
        # Prepare signup data
        signup_data = {
            'signup_type': validated_data.get('signup_type'),
            'first_name': validated_data.get('first_name'),
            'last_name': validated_data.get('last_name'),
            'contact_number': validated_data.get('contact_number'),
            'communication_method': validated_data.get('communication_method'),
            'email': email,
            'motor_carrier_no': validated_data.get('motor_carrier_no', '').strip() or None,
            'authority_age': validated_data.get('authority_age'),
            'number_of_trucks': validated_data.get('number_of_trucks'),
            'truck_type': validated_data.get('truck_type'),
            'operation_area': validated_data.get('operation_area'),
        }
        
        # Add type-specific fields
        if signup_type == 'company':
            signup_data.update({
                'company_name': validated_data.get('company_name', '').strip() or None,
                'company_email': validated_data.get('company_email', '').strip().lower() or None,
                'company_contact_number': validated_data.get('company_contact_number', '').strip() or None,
            })
        elif signup_type == 'owner-operator':
            signup_data.update({
                'owner_name': validated_data.get('owner_name', '').strip() or None,
                'owner_email': validated_data.get('owner_email', '').strip().lower() or None,
                'owner_contact_number': validated_data.get('owner_contact_number', '').strip() or None,
            })
        
        # Create signup entity (domain layer)
        signup = Signup.objects.create(**signup_data)
        
        # Note: User account creation can be handled separately if needed for authentication
        # For now, we just store the signup information
        
        # Return response using response serializer
        response_serializer = SignupResponseSerializer(signup)
        signup_data = response_serializer.data
        
        return {
            'success': True,
            'message': 'Your account has been created successfully!',
            'data': signup_data
        }

    @staticmethod
    def validate_signup_data(data: Dict[str, Any]) -> bool:
        """
        Domain Service Method: Validate signup data before submission
        
        Args:
            data: Dictionary containing signup form data
            
        Returns:
            True if valid, raises ValidationError otherwise
        """
        serializer = SignupCreateSerializer(data=data)
        return serializer.is_valid(raise_exception=True)


class SignupQueryService:
    """
    Domain Service: Handles signup query operations
    (For future use: listing, filtering, etc.)
    """
    
    @staticmethod
    def get_signup_by_id(signup_id: str) -> Optional[Signup]:
        """Get signup by ID (UUID)"""
        try:
            return Signup.objects.get(id=signup_id)
        except Signup.DoesNotExist:
            return None
    
    @staticmethod
    def get_signup_by_email(email: str) -> Optional[Signup]:
        """Get signup by email"""
        try:
            return Signup.objects.get(email=email)
        except Signup.DoesNotExist:
            return None


class ClaimSubmissionService:
    """
    Domain Service: Handles claim form submission business logic
    Implements the use case for creating claim submissions.
    """

    @staticmethod
    def create_claim_submission(data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Use Case: Create a new claim submission
        
        Args:
            data: Dictionary containing claim form data
            
        Returns:
            Dictionary containing the created claim data and status
            
        Raises:
            serializers.ValidationError: If validation fails
        """
        # Validate input data using serializer (application layer)
        serializer = ClaimCreateSerializer(data=data)
        
        if not serializer.is_valid():
            raise serializers.ValidationError(serializer.errors)
        
        # Create claim entity (domain layer)
        validated_data = serializer.validated_data
        claim = Claim.objects.create(**validated_data)
        
        # Return response using response serializer
        response_serializer = ClaimResponseSerializer(claim)
        claim_data = response_serializer.data
        
        return {
            'success': True,
            'message': 'Your claim request has been submitted successfully!',
            'data': claim_data
        }

    @staticmethod
    def validate_claim_data(data: Dict[str, Any]) -> bool:
        """
        Domain Service Method: Validate claim data before submission
        
        Args:
            data: Dictionary containing claim form data
            
        Returns:
            True if valid, raises ValidationError otherwise
        """
        serializer = ClaimCreateSerializer(data=data)
        return serializer.is_valid(raise_exception=True)


class ClaimQueryService:
    """
    Domain Service: Handles claim query operations
    (For future use: listing, filtering, etc.)
    """
    
    @staticmethod
    def get_claim_by_id(claim_id: str) -> Optional[Claim]:
        """Get claim by ID (UUID)"""
        try:
            return Claim.objects.get(id=claim_id)
        except Claim.DoesNotExist:
            return None
    
    @staticmethod
    def get_claim_by_email(email: str) -> Optional[Claim]:
        """Get claim by email"""
        try:
            return Claim.objects.get(email=email)
        except Claim.DoesNotExist:
            return None
