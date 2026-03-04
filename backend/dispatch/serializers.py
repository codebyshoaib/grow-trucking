from rest_framework import serializers
from .models import Contact, Signup, Claim, CareerApplication


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


class SignupCreateSerializer(serializers.Serializer):
    """
    Application Layer: Serializer for creating signup submissions
    Handles validation and data transformation for incoming signup requests.
    Supports both company and owner-operator signup types.
    """
    signup_type = serializers.ChoiceField(
        choices=['company', 'owner-operator'],
        help_text="Type of signup: 'company' or 'owner-operator'"
    )
    
    # Company fields (required if signup_type is 'company')
    company_name = serializers.CharField(
        max_length=255,
        required=False,
        allow_blank=True,
        help_text="Company name (required for company signup)"
    )
    company_email = serializers.EmailField(
        max_length=255,
        required=False,
        allow_blank=True,
        help_text="Company email (required for company signup)"
    )
    company_contact_number = serializers.CharField(
        max_length=20,
        required=False,
        allow_blank=True,
        help_text="Company contact number (required for company signup)"
    )
    
    # Owner fields (required if signup_type is 'owner-operator')
    owner_name = serializers.CharField(
        max_length=255,
        required=False,
        allow_blank=True,
        help_text="Owner name (required for owner-operator signup)"
    )
    owner_email = serializers.EmailField(
        max_length=255,
        required=False,
        allow_blank=True,
        help_text="Owner email (required for owner-operator signup)"
    )
    owner_contact_number = serializers.CharField(
        max_length=20,
        required=False,
        allow_blank=True,
        help_text="Owner contact number (required for owner-operator signup)"
    )
    
    # Common fields
    motor_carrier_no = serializers.CharField(
        max_length=50,
        required=False,
        allow_blank=True,
        help_text="Motor Carrier Number / USDOT"
    )
    authority_age = serializers.IntegerField(
        required=False,
        allow_null=True,
        min_value=0,
        help_text="Age of MC Authority (optional)"
    )
    number_of_trucks = serializers.CharField(
        max_length=50,
        help_text="Number of trucks"
    )
    truck_type = serializers.CharField(
        max_length=100,
        help_text="Type of truck"
    )
    operation_area = serializers.CharField(
        max_length=100,
        required=False,
        allow_blank=True,
        help_text="Operation area (optional)"
    )
    
    # Contact Person Details (now optional - simplified form)
    first_name = serializers.CharField(
        max_length=100,
        required=False,
        allow_blank=True,
        trim_whitespace=True,
        help_text="Contact person first name (optional)"
    )
    last_name = serializers.CharField(
        max_length=100,
        required=False,
        allow_blank=True,
        trim_whitespace=True,
        help_text="Contact person last name (optional)"
    )
    contact_number = serializers.CharField(
        max_length=20,
        required=False,
        allow_blank=True,
        help_text="Contact person phone number (optional)"
    )
    communication_method = serializers.CharField(
        max_length=50,
        help_text="Preferred communication method"
    )
    email = serializers.EmailField(
        max_length=255,
        help_text="Email address"
    )

    def validate(self, data):
        """Validate signup data based on signup type - simplified validation"""
        signup_type = data.get('signup_type')
        
        if signup_type == 'company':
            # Validate company-specific fields
            if not data.get('company_name') or not data.get('company_name').strip():
                raise serializers.ValidationError({
                    'company_name': 'Company name is required for company signup.'
                })
            if not data.get('company_email') or not data.get('company_email').strip():
                raise serializers.ValidationError({
                    'company_email': 'Company email is required for company signup.'
                })
            if not data.get('company_contact_number') or not data.get('company_contact_number').strip():
                raise serializers.ValidationError({
                    'company_contact_number': 'Company contact number is required for company signup.'
                })
        elif signup_type == 'owner-operator':
            # Validate owner-specific fields
            if not data.get('owner_name') or not data.get('owner_name').strip():
                raise serializers.ValidationError({
                    'owner_name': 'Owner name is required for owner-operator signup.'
                })
            if not data.get('owner_email') or not data.get('owner_email').strip():
                raise serializers.ValidationError({
                    'owner_email': 'Owner email is required for owner-operator signup.'
                })
            if not data.get('owner_contact_number') or not data.get('owner_contact_number').strip():
                raise serializers.ValidationError({
                    'owner_contact_number': 'Owner contact number is required for owner-operator signup.'
                })
        else:
            raise serializers.ValidationError({
                'signup_type': 'Invalid signup type. Must be "company" or "owner-operator".'
            })
        
        # Validate common required fields (simplified form)
        if not data.get('email') or not data.get('email').strip():
            raise serializers.ValidationError({
                'email': 'Email is required.'
            })
        if not data.get('motor_carrier_no') or not data.get('motor_carrier_no').strip():
            raise serializers.ValidationError({
                'motor_carrier_no': 'MC Authority / USDOT is required.'
            })
        if not data.get('communication_method') or not data.get('communication_method').strip():
            raise serializers.ValidationError({
                'communication_method': 'Communication method is required.'
            })
        if not data.get('number_of_trucks') or not data.get('number_of_trucks').strip():
            raise serializers.ValidationError({
                'number_of_trucks': 'Number of trucks is required.'
            })
        if not data.get('truck_type') or not data.get('truck_type').strip():
            raise serializers.ValidationError({
                'truck_type': 'Truck type is required.'
            })
        
        # Optional fields - set defaults if not provided
        if not data.get('first_name') or not data.get('first_name').strip():
            data['first_name'] = ''
        if not data.get('last_name') or not data.get('last_name').strip():
            data['last_name'] = ''
        if not data.get('contact_number') or not data.get('contact_number').strip():
            data['contact_number'] = ''
        if not data.get('operation_area') or not data.get('operation_area').strip():
            data['operation_area'] = ''
        if data.get('authority_age') is None:
            data['authority_age'] = None
        
        return data

    def validate_first_name(self, value):
        """Custom validation for first name (optional)"""
        if value:
            return value.strip()
        return value or ''

    def validate_last_name(self, value):
        """Custom validation for last name (optional)"""
        if value:
            return value.strip()
        return value or ''


class SignupResponseSerializer(serializers.ModelSerializer):
    """
    Application Layer: Serializer for signup response
    Used for returning signup data in API responses.
    """
    full_name = serializers.SerializerMethodField()
    primary_email = serializers.SerializerMethodField()
    primary_name = serializers.SerializerMethodField()
    primary_contact_number = serializers.SerializerMethodField()

    class Meta:
        model = Signup
        fields = [
            'id',
            'signup_type',
            'company_name',
            'owner_name',
            'company_email',
            'owner_email',
            'company_contact_number',
            'owner_contact_number',
            'motor_carrier_no',
            'authority_age',
            'number_of_trucks',
            'truck_type',
            'operation_area',
            'first_name',
            'last_name',
            'full_name',
            'contact_number',
            'communication_method',
            'email',
            'primary_email',
            'primary_name',
            'primary_contact_number',
            'created_at'
        ]
        read_only_fields = ['id', 'created_at']

    def get_full_name(self, obj):
        """Get full name from model property"""
        return obj.full_name

    def get_primary_email(self, obj):
        """Get primary email from model property"""
        return obj.primary_email

    def get_primary_name(self, obj):
        """Get primary name from model property"""
        return obj.primary_name

    def get_primary_contact_number(self, obj):
        """Get primary contact number from model property"""
        return obj.primary_contact_number


class ClaimCreateSerializer(serializers.ModelSerializer):
    """
    Application Layer: Serializer for creating claim submissions
    Handles validation and data transformation for incoming claim requests.
    """
    full_name = serializers.CharField(
        max_length=255,
        trim_whitespace=True,
        help_text="Full name of the claimant"
    )
    email = serializers.EmailField(
        max_length=255,
        help_text="Email address of the claimant"
    )
    phone = serializers.CharField(
        max_length=20,
        required=False,
        allow_blank=True,
        allow_null=True,
        help_text="Phone number (optional)"
    )
    company_name = serializers.CharField(
        max_length=255,
        required=False,
        allow_blank=True,
        allow_null=True,
        trim_whitespace=True,
        help_text="Company name (optional)"
    )
    preferred_route = serializers.CharField(
        max_length=255,
        required=False,
        allow_blank=True,
        allow_null=True,
        trim_whitespace=True,
        help_text="Preferred route (optional)"
    )
    age_of_mc_authority = serializers.IntegerField(
        min_value=0,
        help_text="Age of MC Authority in years"
    )

    class Meta:
        model = Claim
        fields = ['full_name', 'email', 'phone', 'company_name', 'preferred_route', 'age_of_mc_authority']
        extra_kwargs = {
            'full_name': {'required': True},
            'email': {'required': True},
            'age_of_mc_authority': {'required': True},
        }

    def validate_full_name(self, value):
        """Custom validation for full name"""
        if not value or not value.strip():
            raise serializers.ValidationError("Full name is required.")
        return value.strip()

    def validate_company_name(self, value):
        """Custom validation for company name"""
        if value:
            return value.strip()
        return value

    def validate_preferred_route(self, value):
        """Custom validation for preferred route"""
        if value:
            return value.strip()
        return value

    def validate_age_of_mc_authority(self, value):
        """Custom validation for age of MC authority"""
        if value is None or value < 0:
            raise serializers.ValidationError("Age of MC authority must be a positive number.")
        return value


class ClaimResponseSerializer(serializers.ModelSerializer):
    """
    Application Layer: Serializer for claim response
    Used for returning claim data in API responses.
    """
    class Meta:
        model = Claim
        fields = [
            'id',
            'full_name',
            'email',
            'phone',
            'company_name',
            'preferred_route',
            'age_of_mc_authority',
            'created_at'
        ]
        read_only_fields = ['id', 'created_at']


class CareerApplicationCreateSerializer(serializers.Serializer):
    """
    Application Layer: Serializer for creating career applications
    Handles validation and data transformation for incoming career application requests.
    """
    full_name = serializers.CharField(
        max_length=255,
        trim_whitespace=True,
        help_text="Full name of the applicant"
    )
    email = serializers.EmailField(
        max_length=255,
        help_text="Email address of the applicant"
    )
    phone = serializers.CharField(
        max_length=20,
        help_text="Phone number of the applicant"
    )
    city_state = serializers.CharField(
        max_length=255,
        required=False,
        allow_blank=True,
        allow_null=True,
        trim_whitespace=True,
        help_text="City and state of the applicant (optional)"
    )
    linkedin_url = serializers.URLField(
        max_length=500,
        required=False,
        allow_blank=True,
        allow_null=True,
        help_text="LinkedIn profile URL (optional)"
    )
    years_of_experience = serializers.CharField(
        max_length=50,
        required=False,
        allow_blank=True,
        allow_null=True,
        help_text="Years of experience (optional)"
    )
    position_type = serializers.ChoiceField(
        choices=['remote', 'onsite'],
        help_text="Type of position: 'remote' or 'onsite'"
    )
    job_title = serializers.CharField(
        max_length=255,
        required=False,
        allow_blank=True,
        default='Truck Dispatching Sales Executive',
        help_text="Job title being applied for (defaults to Truck Dispatching Sales Executive)"
    )
    cover_note = serializers.CharField(
        required=False,
        allow_blank=True,
        allow_null=True,
        help_text="Cover letter or brief note from applicant (optional)"
    )

    def validate_full_name(self, value):
        """Custom validation for full name"""
        if not value or not value.strip():
            raise serializers.ValidationError("Full name is required.")
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Full name must be at least 2 characters long.")
        return value.strip()

    def validate_phone(self, value):
        """Custom validation for phone number"""
        if not value or not value.strip():
            raise serializers.ValidationError("Phone number is required.")
        # Remove common phone formatting characters for validation
        cleaned_phone = value.replace('-', '').replace(' ', '').replace('(', '').replace(')', '').replace('.', '')
        if not cleaned_phone.isdigit() or len(cleaned_phone) < 10:
            raise serializers.ValidationError("Please enter a valid phone number.")
        return value.strip()

    def validate_email(self, value):
        """Custom validation for email"""
        if not value or not value.strip():
            raise serializers.ValidationError("Email is required.")
        return value.strip().lower()

    def validate_linkedin_url(self, value):
        """Custom validation for LinkedIn URL"""
        if value:
            value = value.strip()
            if not value.startswith(('http://', 'https://')):
                raise serializers.ValidationError("LinkedIn URL must start with http:// or https://")
            if 'linkedin.com' not in value.lower():
                raise serializers.ValidationError("Please enter a valid LinkedIn URL.")
        return value

    def validate_position_type(self, value):
        """Custom validation for position type"""
        if value not in ['remote', 'onsite']:
            raise serializers.ValidationError("Position type must be either 'remote' or 'onsite'.")
        return value

    def validate(self, data):
        """Cross-field validation"""
        # Ensure required fields are present
        required_fields = ['full_name', 'email', 'phone', 'position_type']
        for field in required_fields:
            if not data.get(field):
                raise serializers.ValidationError({field: f"{field.replace('_', ' ').title()} is required."})
        
        return data


class CareerApplicationResponseSerializer(serializers.ModelSerializer):
    """
    Application Layer: Serializer for career application responses
    Handles serialization of career application data for API responses.
    """
    position_type_display = serializers.CharField(source='position_type_display_name', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = CareerApplication
        fields = [
            'id',
            'full_name',
            'email',
            'phone',
            'city_state',
            'linkedin_url',
            'years_of_experience',
            'position_type',
            'position_type_display',
            'job_title',
            'cover_note',
            'status',
            'status_display',
            'created_at',
            'updated_at'
        ]
        read_only_fields = [
            'id',
            'status',
            'status_display',
            'created_at',
            'updated_at'
        ]
