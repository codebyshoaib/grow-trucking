/**
 * Career Application Types
 * Types for career application form and API requests/responses
 */

export interface CareerApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  cityState?: string;
  linkedIn?: string;
  yearsOfExperience?: string;
  positionType: 'remote' | 'onsite';
  coverNote?: string;
}

export interface CareerApplicationSubmissionRequest {
  full_name: string;
  email: string;
  phone: string;
  city_state?: string | null;
  linkedin_url?: string | null;
  years_of_experience?: string | null;
  position_type: 'remote' | 'onsite';
  job_title?: string;
  cover_note?: string | null;
}

export interface CareerApplicationResponse {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  city_state?: string | null;
  linkedin_url?: string | null;
  years_of_experience?: string | null;
  position_type: string;
  position_type_display: string;
  job_title: string;
  cover_note?: string | null;
  status: string;
  status_display: string;
  created_at: string;
  updated_at: string;
}

export interface CareerApplicationSubmissionResult {
  success: boolean;
  message: string;
  data?: CareerApplicationResponse;
  errors?: Record<string, string[]>;
}
