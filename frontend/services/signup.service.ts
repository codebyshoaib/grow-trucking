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
    return {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone?.trim() || null,
      password: formData.password,
      company_name: formData.companyName?.trim() || null,
    };
  }

  /**
   * Validate form data before submission
   * Application layer: Business rule validation
   */
  private validateFormData(formData: SignupFormData): void {
    if (!formData.firstName?.trim()) {
      throw new Error('First name is required');
    }

    if (!formData.lastName?.trim()) {
      throw new Error('Last name is required');
    }

    if (!formData.email?.trim()) {
      throw new Error('Email is required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      throw new Error('Please enter a valid email address');
    }

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
