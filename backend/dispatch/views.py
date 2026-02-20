"""
Presentation Layer: API Views
Handles HTTP requests and responses for the contact and signup APIs.
"""
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
from django.http import JsonResponse
import logging
from .services import ContactSubmissionService, SignupSubmissionService, ClaimSubmissionService
from .serializers import ContactResponseSerializer

logger = logging.getLogger(__name__)


@api_view(['GET'])
def test_api(request):
    """
    Test API endpoint to verify Django-Next.js connection
    """
    return Response({
        'message': 'API is working!',
        'status': 'success',
        'data': {
            'timestamp': '2024-01-01T00:00:00Z',
            'version': '1.0.0',
            'endpoint': '/api/v1/dispatch/'
        }
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
def submit_contact(request):
    """
    API Endpoint: Submit contact form
    POST /api/v1/dispatch/contact/
    
    Accepts contact form data and creates a new contact submission.
    """
    try:
        # Extract data from request
        data = request.data
        
        # Use domain service to handle business logic
        result = ContactSubmissionService.create_contact_submission(data)
        
        logger.info(f"Contact submission created: {result['data'].get('email')}")
        
        return Response(
            {
                'success': True,
                'message': result['message'],
                'data': result['data']
            },
            status=status.HTTP_201_CREATED
        )
        
    except serializers.ValidationError as e:
        # Handle validation errors
        logger.warning(f"Contact submission validation error: {e.detail}")
        return Response(
            {
                'success': False,
                'message': 'Validation failed',
                'errors': e.detail
            },
            status=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        # Handle database and other unexpected errors
        error_message = str(e)
        error_type = type(e).__name__
        
        logger.error(f"Contact submission error [{error_type}]: {error_message}", exc_info=True)
        
        return Response(
            {
                'success': False,
                'message': 'An error occurred while processing your request. Please try again later.',
                'error_type': error_type
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
def submit_signup(request):
    """
    API Endpoint: Submit signup form
    POST /api/v1/dispatch/signup/
    
    Accepts signup form data and creates a new user account and signup registration.
    Supports both company and owner-operator signup types.
    """
    try:
        # Extract data from request
        data = request.data
        
        # Use domain service to handle business logic
        result = SignupSubmissionService.create_signup_submission(data)
        
        logger.info(f"Signup submission created: {result['data'].get('email')} (Type: {result['data'].get('signup_type')})")
        
        return Response(
            {
                'success': True,
                'message': result['message'],
                'data': result['data']
            },
            status=status.HTTP_201_CREATED
        )
        
    except serializers.ValidationError as e:
        # Handle validation errors
        logger.warning(f"Signup submission validation error: {e.detail}")
        return Response(
            {
                'success': False,
                'message': 'Validation failed',
                'errors': e.detail
            },
            status=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        # Handle database and other unexpected errors
        error_message = str(e)
        error_type = type(e).__name__
        
        logger.error(f"Signup submission error [{error_type}]: {error_message}", exc_info=True)
        
        return Response(
            {
                'success': False,
                'message': 'An error occurred while processing your request. Please try again later.',
                'error_type': error_type
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
def submit_claim(request):
    """
    API Endpoint: Submit claim form
    POST /api/v1/dispatch/claim/
    
    Accepts claim form data and creates a new claim submission.
    """
    try:
        # Extract data from request
        data = request.data
        
        # Use domain service to handle business logic
        result = ClaimSubmissionService.create_claim_submission(data)
        
        logger.info(f"Claim submission created: {result['data'].get('email')}")
        
        return Response(
            {
                'success': True,
                'message': result['message'],
                'data': result['data']
            },
            status=status.HTTP_201_CREATED
        )
        
    except serializers.ValidationError as e:
        # Handle validation errors
        logger.warning(f"Claim submission validation error: {e.detail}")
        return Response(
            {
                'success': False,
                'message': 'Validation failed',
                'errors': e.detail
            },
            status=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        # Handle database and other unexpected errors
        error_message = str(e)
        error_type = type(e).__name__
        
        logger.error(f"Claim submission error [{error_type}]: {error_message}", exc_info=True)
        
        return Response(
            {
                'success': False,
                'message': 'An error occurred while processing your request. Please try again later.',
                'error_type': error_type
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
