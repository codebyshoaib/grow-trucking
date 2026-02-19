/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

/**
 * Normalize API base URL to ensure HTTP protocol for local development
 */
const normalizeApiBaseUrl = (url: string | undefined): string => {
  if (!url) {
    return 'http://localhost:8000';
  }

  // Remove trailing slash
  const cleanUrl = url.trim().replace(/\/+$/, '');

  // If localhost or 127.0.0.1, force HTTP protocol
  if (cleanUrl.includes('localhost') || cleanUrl.includes('127.0.0.1')) {
    return cleanUrl.replace(/^https?:\/\//, 'http://');
  }

  // For other URLs, preserve the protocol but default to HTTP if missing
  if (!cleanUrl.match(/^https?:\/\//)) {
    return `http://${cleanUrl}`;
  }

  return cleanUrl;
};

export const API_CONFIG = {
  BASE_URL: normalizeApiBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL),
  ENDPOINTS: {
    CONTACT: '/api/v1/dispatch/contact/',
    CLAIM: '/api/v1/dispatch/claim/',
    SIGNUP: '/api/v1/dispatch/signup/',
    TEST: '/api/v1/dispatch/',
  },
  TIMEOUT: 30000, // 30 seconds
} as const;

export const getApiUrl = (endpoint: string): string => {
  const baseUrl = API_CONFIG.BASE_URL;
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${baseUrl}${cleanEndpoint}`;
};
