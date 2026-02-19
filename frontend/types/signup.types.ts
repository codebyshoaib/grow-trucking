/**
 * Domain Types: Signup
 * Type definitions for user signup-related entities and DTOs
 */

/**
 * Signup form submission data (DTO)
 */
export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
  companyName?: string;
  agreeToTerms: boolean;
}

/**
 * Signup submission request payload
 */
export interface SignupSubmissionRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  password: string;
  company_name?: string | null;
}

/**
 * Signup response from API
 */
export interface SignupResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  company_name?: string | null;
  created_at: string;
}

/**
 * Signup submission result
 */
export interface SignupSubmissionResult {
  success: boolean;
  message: string;
  data?: SignupResponse;
  errors?: Record<string, string[]>;
}
