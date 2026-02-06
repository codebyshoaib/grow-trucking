from rest_framework import serializers
from .models import Contact


class ContactCreateSerializer(serializers.ModelSerializer):
    """
    Application Layer: Serializer for creating contact submissions
    Handles validation and data transformation for incoming requests.
    """
    first_name = serializers.CharField(
        max_length=100,
        trim_whitespace=True,
        help_text="First name of the contact"
    )
    last_name = serializers.CharField(
        max_length=100,
        trim_whitespace=True,
        help_text="Last name of the contact"
    )
    email = serializers.EmailField(
        max_length=255,
        help_text="Email address of the contact"
    )
    phone = serializers.CharField(
        max_length=20,
        required=False,
        allow_blank=True,
        allow_null=True,
        help_text="Phone number (optional)"
    )
    message = serializers.CharField(
        min_length=10,
        max_length=5000,
        help_text="Message content (minimum 10 characters)"
    )

    class Meta:
        model = Contact
        fields = ['first_name', 'last_name', 'email', 'phone', 'message']
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'email': {'required': True},
            'message': {'required': True},
        }

    def validate_message(self, value):
        """Custom validation for message field"""
        if len(value.strip()) < 10:
            raise serializers.ValidationError(
                "Message must be at least 10 characters long."
            )
        return value.strip()

    def validate_first_name(self, value):
        """Custom validation for first name"""
        if not value or not value.strip():
            raise serializers.ValidationError("First name is required.")
        return value.strip()

    def validate_last_name(self, value):
        """Custom validation for last name"""
        if not value or not value.strip():
            raise serializers.ValidationError("Last name is required.")
        return value.strip()


class ContactResponseSerializer(serializers.ModelSerializer):
    """
    Application Layer: Serializer for contact response
    Used for returning contact data in API responses.
    """
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = Contact
        fields = ['id', 'first_name', 'last_name', 'full_name', 'email', 
                  'phone', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']

    def get_full_name(self, obj):
        """Get full name from model property"""
        return obj.full_name
