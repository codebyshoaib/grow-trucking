/**
 * Application Layer: Career Application Service
 * Handles business logic for career application operations
 */

import { apiClient, ApiError } from '@/lib/api/client';
import { API_CONFIG } from '@/constants/api.config';
import type {
  CareerApplicationFormData,
  CareerApplicationSubmissionRequest,
  CareerApplicationSubmissionResult,
} from '@/types/career.types';

/**
 * Service class for career application operations
 * Implements use cases for career application form submission
 */
export class CareerApplicationService {
  /**
   * Transform frontend form data to API request format
   * Application layer: Data transformation
   */
  private transformFormDataToRequest(
    formData: CareerApplicationFormData
  ): CareerApplicationSubmissionRequest {
    return {
      full_name: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      city_state: formData.cityState?.trim() || null,
      linkedin_url: formData.linkedIn?.trim() || null,
      years_of_experience: formData.yearsOfExperience?.trim() || null,
      position_type: formData.positionType,
      job_title: 'Truck Dispatching Sales Executive',
      cover_note: formData.coverNote?.trim() || null,
    };
  }

  /**
   * Validate form data before submission
   * Application layer: Business rule validation
   */
  private validateFormData(formData: CareerApplicationFormData): void {
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

    if (!formData.phone?.trim()) {
      throw new Error('Phone number is required');
    }

    if (!formData.positionType) {
      throw new Error('Position type is required');
    }

    if (formData.positionType !== 'remote' && formData.positionType !== 'onsite') {
      throw new Error('Position type must be either "remote" or "onsite"');
    }

    if (formData.linkedIn && formData.linkedIn.trim()) {
      const urlRegex = /^https?:\/\/.+/;
      if (!urlRegex.test(formData.linkedIn.trim())) {
        throw new Error('LinkedIn URL must start with http:// or https://');
      }
    }
  }

  /**
   * Submit career application form
   * Use Case: Create career application submission
   */
  async submitCareerApplication(
    formData: CareerApplicationFormData
  ): Promise<CareerApplicationSubmissionResult> {
    try {
      // Validate form data
      this.validateFormData(formData);

      // Transform to API format
      const requestData = this.transformFormDataToRequest(formData);

      // Call API (infrastructure layer)
      const response = await apiClient.post<CareerApplicationSubmissionResult['data']>(
        API_CONFIG.ENDPOINTS.CAREER_APPLICATION,
        requestData
      );

      return {
        success: true,
        message: response.message || 'Your application has been submitted successfully! Our hiring team will review it within 3-5 business days.',
        data: response.data,
      };
    } catch (error) {
      // Handle API errors
      if (error instanceof ApiError) {
        return {
          success: false,
          message: error.message || 'Application submission failed',
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
export const careerApplicationService = new CareerApplicationService();
