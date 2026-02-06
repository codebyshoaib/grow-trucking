/**
 * Application Layer: Contact Service
 * Handles business logic for contact-related operations
 */

import { apiClient, ApiError } from '@/lib/api/client';
import { API_CONFIG } from '@/constants/api.config';
import type {
  ContactFormData,
  ContactSubmissionRequest,
  ContactSubmissionResult,
} from '@/types/contact.types';

/**
 * Service class for contact operations
 * Implements use cases for contact form submission
 */
export class ContactService {
  /**
   * Transform frontend form data to API request format
   * Application layer: Data transformation
   */
  private transformFormDataToRequest(
    formData: ContactFormData
  ): ContactSubmissionRequest {
    return {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone?.trim() || null,
      message: formData.message.trim(),
    };
  }

  /**
   * Validate form data before submission
   * Application layer: Business rule validation
   */
  private validateFormData(formData: ContactFormData): void {
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

    if (!formData.message?.trim()) {
      throw new Error('Message is required');
    }

    if (formData.message.trim().length < 10) {
      throw new Error('Message must be at least 10 characters long');
    }
  }

  /**
   * Submit contact form
   * Use Case: Create contact submission
   */
  async submitContactForm(
    formData: ContactFormData
  ): Promise<ContactSubmissionResult> {
    try {
      // Validate form data
      this.validateFormData(formData);

      // Transform to API format
      const requestData = this.transformFormDataToRequest(formData);

      // Call API (infrastructure layer)
      const response = await apiClient.post<ContactSubmissionResult['data']>(
        API_CONFIG.ENDPOINTS.CONTACT,
        requestData
      );

      return {
        success: true,
        message: response.message || 'Your message has been sent successfully!',
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
export const contactService = new ContactService();
