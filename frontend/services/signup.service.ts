/**
 * Application Layer: Signup Service
 * Handles business logic for user signup operations
 */

import { apiClient, ApiError } from '@/lib/api/client';
import { API_CONFIG } from '@/constants/api.config';
import type {
  SignupFormData,
  SignupSubmissionRequest,
  SignupSubmissionResult,
  CompanySignupFormData,
  OwnerOperatorSignupFormData,
  CompanySignupSubmissionRequest,
  OwnerOperatorSignupSubmissionRequest,
} from '@/types/signup.types';

/**
 * Service class for signup operations
 * Implements use cases for user registration
 */
export class SignupService {
  /**
   * Transform frontend form data to API request format
   * Application layer: Data transformation
   */
  private transformFormDataToRequest(
    formData: SignupFormData
  ): SignupSubmissionRequest {
    if (formData.signupType === 'company') {
      const companyData = formData as CompanySignupFormData;
      return {
        signup_type: 'company',
        company_name: companyData.companyName.trim(),
        company_email: companyData.companyEmail.trim().toLowerCase(),
        company_contact_number: companyData.companyContactNumber.trim(),
        motor_carrier_no: companyData.motorCarrierNo.trim(),
        authority_age: companyData.authorityAge,
        number_of_trucks: companyData.numberOfTrucks,
        truck_type: companyData.truckType,
        operation_area: companyData.operationArea,
        first_name: companyData.firstName.trim(),
        last_name: companyData.lastName.trim(),
        contact_number: companyData.contactNumber.trim(),
        communication_method: companyData.communicationMethod,
        email: companyData.email.trim().toLowerCase(),
        password: companyData.password,
      } as CompanySignupSubmissionRequest;
    } else {
      const ownerData = formData as OwnerOperatorSignupFormData;
      return {
        signup_type: 'owner-operator',
        owner_name: ownerData.ownerName.trim(),
        owner_email: ownerData.ownerEmail.trim().toLowerCase(),
        owner_contact_number: ownerData.ownerContactNumber.trim(),
        motor_carrier_no: ownerData.motorCarrierNo.trim(),
        authority_age: ownerData.authorityAge,
        number_of_trucks: ownerData.numberOfTrucks,
        truck_type: ownerData.truckType,
        operation_area: ownerData.operationArea,
        first_name: ownerData.firstName.trim(),
        last_name: ownerData.lastName.trim(),
        contact_number: ownerData.contactNumber.trim(),
        communication_method: ownerData.communicationMethod,
        email: ownerData.email.trim().toLowerCase(),
        password: ownerData.password,
      } as OwnerOperatorSignupSubmissionRequest;
    }
  }

  /**
   * Validate form data before submission
   * Application layer: Business rule validation
   */
  private validateFormData(formData: SignupFormData): void {
    // Common validations
    if (!formData.password) {
      throw new Error('Password is required');
    }

    if (formData.password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    if (formData.password !== formData.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    if (!formData.agreeToTerms) {
      throw new Error('You must agree to the terms and conditions');
    }

    // Type-specific validations
    if (formData.signupType === 'company') {
      const companyData = formData as CompanySignupFormData;
      
      if (!companyData.companyName?.trim()) {
        throw new Error('Company name is required');
      }

      if (!companyData.companyEmail?.trim()) {
        throw new Error('Company email is required');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(companyData.companyEmail.trim())) {
        throw new Error('Please enter a valid company email address');
      }

      if (!companyData.companyContactNumber?.trim()) {
        throw new Error('Company contact number is required');
      }

      if (!companyData.motorCarrierNo?.trim()) {
        throw new Error('Motor Carrier Number is required');
      }

      if (!companyData.authorityAge || companyData.authorityAge <= 0) {
        throw new Error('Authority age is required');
      }

      if (!companyData.numberOfTrucks) {
        throw new Error('Number of trucks is required');
      }

      if (!companyData.truckType) {
        throw new Error('Truck type is required');
      }

      if (!companyData.operationArea) {
        throw new Error('Operation area is required');
      }

      if (!companyData.firstName?.trim()) {
        throw new Error('Contact person first name is required');
      }

      if (!companyData.lastName?.trim()) {
        throw new Error('Contact person last name is required');
      }

      if (!companyData.contactNumber?.trim()) {
        throw new Error('Contact person number is required');
      }

      if (!companyData.communicationMethod) {
        throw new Error('Communication method is required');
      }

      if (!companyData.email?.trim()) {
        throw new Error('Contact person email is required');
      }

      if (!emailRegex.test(companyData.email.trim())) {
        throw new Error('Please enter a valid contact person email address');
      }
    } else {
      const ownerData = formData as OwnerOperatorSignupFormData;
      
      if (!ownerData.ownerName?.trim()) {
        throw new Error('Owner name is required');
      }

      if (!ownerData.ownerEmail?.trim()) {
        throw new Error('Owner email is required');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(ownerData.ownerEmail.trim())) {
        throw new Error('Please enter a valid owner email address');
      }

      if (!ownerData.ownerContactNumber?.trim()) {
        throw new Error('Owner contact number is required');
      }

      if (!ownerData.motorCarrierNo?.trim()) {
        throw new Error('Motor Carrier Number is required');
      }

      if (!ownerData.authorityAge || ownerData.authorityAge <= 0) {
        throw new Error('Authority age is required');
      }

      if (!ownerData.numberOfTrucks) {
        throw new Error('Number of trucks is required');
      }

      if (!ownerData.truckType) {
        throw new Error('Truck type is required');
      }

      if (!ownerData.operationArea) {
        throw new Error('Operation area is required');
      }

      if (!ownerData.firstName?.trim()) {
        throw new Error('Contact person first name is required');
      }

      if (!ownerData.lastName?.trim()) {
        throw new Error('Contact person last name is required');
      }

      if (!ownerData.contactNumber?.trim()) {
        throw new Error('Contact person number is required');
      }

      if (!ownerData.communicationMethod) {
        throw new Error('Communication method is required');
      }

      if (!ownerData.email?.trim()) {
        throw new Error('Contact person email is required');
      }

      if (!emailRegex.test(ownerData.email.trim())) {
        throw new Error('Please enter a valid contact person email address');
      }
    }
  }

  /**
   * Submit signup form
   * Use Case: Create user account
   */
  async submitSignupForm(
    formData: SignupFormData
  ): Promise<SignupSubmissionResult> {
    try {
      // Validate form data
      this.validateFormData(formData);

      // Transform to API format
      const requestData = this.transformFormDataToRequest(formData);

      // Call API (infrastructure layer)
      const response = await apiClient.post<SignupSubmissionResult['data']>(
        API_CONFIG.ENDPOINTS.SIGNUP,
        requestData
      );

      return {
        success: true,
        message: response.message || 'Your account has been created successfully!',
        data: response.data,
      };
    } catch (error) {
      // Handle API errors
      if (error instanceof ApiError) {
        return {
          success: false,
          message: error.message || 'Registration failed',
          errors: error.errors,
        };
      }

      // Handle client-side validation errors
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message || 'An error occurred',
        };
      }

      // Handle unknown errors
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      };
    }
  }
}

// Singleton instance
export const signupService = new SignupService();
