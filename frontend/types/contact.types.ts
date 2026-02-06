/**
 * Domain Types: Contact
 * Type definitions for contact-related entities and DTOs
 */

/**
 * Contact form submission data (DTO)
 */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Contact submission request payload
 */
export interface ContactSubmissionRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  message: string;
}

/**
 * Contact response from API
 */
export interface ContactResponse {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  phone?: string | null;
  message: string;
  created_at: string;
}

/**
 * API response wrapper
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

/**
 * Contact submission result
 */
export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  data?: ContactResponse;
  errors?: Record<string, string[]>;
}
