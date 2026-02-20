/**
 * Domain Types: Signup
 * Type definitions for user signup-related entities and DTOs
 */

/**
 * Signup type discriminator
 */
export type SignupType = 'company' | 'owner-operator';

/**
 * Company Signup form submission data (DTO)
 */
export interface CompanySignupFormData {
  signupType: 'company';
  // Company Details
  companyName: string;
  companyEmail: string;
  companyContactNumber: string;
  motorCarrierNo: string;
  authorityAge: number;
  numberOfTrucks: string;
  truckType: string;
  operationArea: string;
  // Contact Person Details
  firstName: string;
  lastName: string;
  contactNumber: string;
  communicationMethod: string;
  email: string;
  // Common fields
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

/**
 * Owner Operator Signup form submission data (DTO)
 */
export interface OwnerOperatorSignupFormData {
  signupType: 'owner-operator';
  // Owner Details
  ownerName: string;
  ownerEmail: string;
  ownerContactNumber: string;
  motorCarrierNo: string;
  authorityAge: number;
  numberOfTrucks: string;
  truckType: string;
  operationArea: string;
  // Contact Person Details
  firstName: string;
  lastName: string;
  contactNumber: string;
  communicationMethod: string;
  email: string;
  // Common fields
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

/**
 * Union type for signup form data
 */
export type SignupFormData = CompanySignupFormData | OwnerOperatorSignupFormData;

/**
 * Company Signup submission request payload
 */
export interface CompanySignupSubmissionRequest {
  signup_type: 'company';
  // Company Details
  company_name: string;
  company_email: string;
  company_contact_number: string;
  motor_carrier_no: string;
  authority_age: number;
  number_of_trucks: string;
  truck_type: string;
  operation_area: string;
  // Contact Person Details
  first_name: string;
  last_name: string;
  contact_number: string;
  communication_method: string;
  email: string;
  password: string;
}

/**
 * Owner Operator Signup submission request payload
 */
export interface OwnerOperatorSignupSubmissionRequest {
  signup_type: 'owner-operator';
  // Owner Details
  owner_name: string;
  owner_email: string;
  owner_contact_number: string;
  motor_carrier_no: string;
  authority_age: number;
  number_of_trucks: string;
  truck_type: string;
  operation_area: string;
  // Contact Person Details
  first_name: string;
  last_name: string;
  contact_number: string;
  communication_method: string;
  email: string;
  password: string;
}

/**
 * Union type for signup submission request
 */
export type SignupSubmissionRequest = CompanySignupSubmissionRequest | OwnerOperatorSignupSubmissionRequest;

/**
 * Signup response from API
 */
export interface SignupResponse {
  id: string; // UUID
  signup_type: 'company' | 'owner-operator';
  owner_name: string;
  owner_email: string;
  phone: string | null;
  motor_carrier_no?: string | null;
  authority_age?: number | null;
  number_of_trucks: string;
  truck_type: string;
  operation_area: string;
  first_name: string;
  last_name: string;
  contact_number: string;
  communication_method: string;
  email: string;
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
