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
        authority_age: companyData.authorityAge || null, // Optional field
        number_of_trucks: companyData.numberOfTrucks,
        truck_type: companyData.truckType,
        operation_area: companyData.operationArea || '', // Optional field
        first_name: companyData.firstName?.trim() || '', // Optional field
        last_name: companyData.lastName?.trim() || '', // Optional field
        contact_number: companyData.contactNumber?.trim() || '', // Optional field
        communication_method: companyData.communicationMethod,
        email: companyData.email.trim().toLowerCase(),
      } as CompanySignupSubmissionRequest;
    } else {
      const ownerData = formData as OwnerOperatorSignupFormData;
      return {
        signup_type: 'owner-operator',
        owner_name: ownerData.ownerName.trim(),
        owner_email: ownerData.ownerEmail.trim().toLowerCase(),
        owner_contact_number: ownerData.ownerContactNumber.trim(),
        motor_carrier_no: ownerData.motorCarrierNo.trim(),
        authority_age: ownerData.authorityAge || null, // Optional field
        number_of_trucks: ownerData.numberOfTrucks,
        truck_type: ownerData.truckType,
        operation_area: ownerData.operationArea || '', // Optional field
        first_name: ownerData.firstName?.trim() || '', // Optional field
        last_name: ownerData.lastName?.trim() || '', // Optional field
        contact_number: ownerData.contactNumber?.trim() || '', // Optional field
        communication_method: ownerData.communicationMethod,
        email: ownerData.email.trim().toLowerCase(),
      } as OwnerOperatorSignupSubmissionRequest;
    }
  }

  /**
   * Validate form data before submission
   * Application layer: Business rule validation
   * Simplified validation for simplified form
   */
  private validateFormData(formData: SignupFormData): void {
    // Common validations
    if (!formData.agreeToTerms) {
      throw new Error('You must agree to the terms and conditions');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Type-specific validations (simplified form)
    if (formData.signupType === 'company') {
      const companyData = formData as CompanySignupFormData;
      
      if (!companyData.companyName?.trim()) {
        throw new Error('Company name is required');
      }

      if (!companyData.companyEmail?.trim()) {
        throw new Error('Company email is required');
      }

      if (!emailRegex.test(companyData.companyEmail.trim())) {
        throw new Error('Please enter a valid company email address');
      }

      if (!companyData.companyContactNumber?.trim()) {
        throw new Error('Company contact number is required');
      }

      if (!companyData.motorCarrierNo?.trim()) {
        throw new Error('MC Authority / USDOT is required');
      }

      if (!companyData.numberOfTrucks) {
        throw new Error('Number of trucks is required');
      }

      if (!companyData.truckType) {
        throw new Error('Truck type is required');
      }

      if (!companyData.communicationMethod) {
        throw new Error('Communication method is required');
      }

      if (!companyData.email?.trim()) {
        throw new Error('Email is required');
      }

      if (!emailRegex.test(companyData.email.trim())) {
        throw new Error('Please enter a valid email address');
      }
    } else {
      const ownerData = formData as OwnerOperatorSignupFormData;
      
      if (!ownerData.ownerName?.trim()) {
        throw new Error('Owner name is required');
      }

      if (!ownerData.ownerEmail?.trim()) {
        throw new Error('Owner email is required');
      }

      if (!emailRegex.test(ownerData.ownerEmail.trim())) {
        throw new Error('Please enter a valid owner email address');
      }

      if (!ownerData.ownerContactNumber?.trim()) {
        throw new Error('Owner contact number is required');
      }

      if (!ownerData.motorCarrierNo?.trim()) {
        throw new Error('MC Authority / USDOT is required');
      }

      if (!ownerData.numberOfTrucks) {
        throw new Error('Number of trucks is required');
      }

      if (!ownerData.truckType) {
        throw new Error('Truck type is required');
      }

      if (!ownerData.communicationMethod) {
        throw new Error('Communication method is required');
      }

      if (!ownerData.email?.trim()) {
        throw new Error('Email is required');
      }

      if (!emailRegex.test(ownerData.email.trim())) {
        throw new Error('Please enter a valid email address');
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
