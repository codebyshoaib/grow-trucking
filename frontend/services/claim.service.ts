/**
 * Application Layer: Claim Service
 * Handles business logic for claim-related operations
 */

import { apiClient, ApiError } from '@/lib/api/client';
import { API_CONFIG } from '@/constants/api.config';
import type { ClaimFormData, ClaimSubmissionRequest, ClaimSubmissionResult } from '@/types/contact.types';

/**
 * Service class for claim operations
 * Implements use cases for claim form submission
 */
export class ClaimService {
   /**
   * Transform frontend form data to API request format
   * Application layer: Data transformation
   */
  private transformFormDataToRequest(
    formData: ClaimFormData
  ): ClaimSubmissionRequest {
    return {
      full_name: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone?.trim() || null,
      company_name: formData.companyName.trim(),
      preferred_route: formData.preferredRoute.trim(),
      age_of_mc_authority: formData.ageOfMCAuthority,
    };
  }

  /**
   * Validate form data before submission
   * Application layer: Business rule validation
   */
  private validateFormData(formData: ClaimFormData): void {
    if (!formData.fullName?.trim()) {
      throw new Error('Full name is required');
    }

    if (!formData.email?.trim()) {
      throw new Error('Email is required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      throw new Error('Please enter a valid email address');
    }

    if (!formData.companyName?.trim()) {
      throw new Error('Company name is required');
    }

    if (!formData.preferredRoute?.trim()) {
      throw new Error('Preferred route is required');
    }

    if (formData.ageOfMCAuthority <= 0) {
      throw new Error('Age of MC authority is required');
    }
  }

  /**
   * Submit claim form
   * Use Case: Create claim submission
   */
  async submitClaimForm(
    formData: ClaimFormData
  ): Promise<ClaimSubmissionResult> {
    try {
      // Validate form data
      this.validateFormData(formData);

      // Transform to API format
      const requestData = this.transformFormDataToRequest(formData);

      // Call API (infrastructure layer)
      const response = await apiClient.post<ClaimSubmissionResult['data']>(
        API_CONFIG.ENDPOINTS.CLAIM,
        requestData
      );

      return {
        success: true,
        message: response.message || 'Your claim request has been submitted successfully!',
        data: response.data,
      };
    } catch (error) {
      // Handle API errors
      if (error instanceof ApiError) {
        return {
          success: false,
          message: error.message || 'Validation failed',
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
export const claimService = new ClaimService();
