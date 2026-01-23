from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse

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
