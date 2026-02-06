/**
 * Infrastructure Layer: API Client
 * Handles HTTP communication with the backend API
 */

import { API_CONFIG, getApiUrl } from '@/constants/api.config';
import type { ApiResponse } from '@/types/contact.types';

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ApiClient {
  private baseUrl: string;
  private timeout: number;

  constructor(baseUrl: string = API_CONFIG.BASE_URL, timeout: number = API_CONFIG.TIMEOUT) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
    
    // Development warning: Check for HTTPS on localhost
    if (process.env.NODE_ENV === 'development' && baseUrl.includes('localhost') && baseUrl.startsWith('https://')) {
      console.warn(
        '⚠️ API Client Warning: HTTPS detected for localhost. Django dev server only supports HTTP. ' +
        'Using HTTP instead. If you see this, check NEXT_PUBLIC_API_BASE_URL environment variable.'
      );
    }
  }

  /**
   * Make a POST request to the API
   */
  async post<T = unknown>(
    endpoint: string,
    data: unknown,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const url = getApiUrl(endpoint);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        body: JSON.stringify(data),
        signal: controller.signal,
        ...options,
      });

      clearTimeout(timeoutId);

      const responseData: ApiResponse<T> = await response.json();

      if (!response.ok) {
        throw new ApiError(
          responseData.message || 'Request failed',
          response.status,
          responseData.errors
        );
      }

      return responseData;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof ApiError) {
        throw error;
      }

      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError('Request timeout. Please try again.', 408);
      }

      if (error instanceof TypeError) {
        throw new ApiError(
          'Network error. Please check your connection.',
          0
        );
      }

      throw new ApiError(
        'An unexpected error occurred. Please try again.',
        500
      );
    }
  }

  /**
   * Make a GET request to the API
   */
  async get<T = unknown>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const url = getApiUrl(endpoint);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        signal: controller.signal,
        ...options,
      });

      clearTimeout(timeoutId);

      const responseData: ApiResponse<T> = await response.json();

      if (!response.ok) {
        throw new ApiError(
          responseData.message || 'Request failed',
          response.status,
          responseData.errors
        );
      }

      return responseData;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof ApiError) {
        throw error;
      }

      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError('Request timeout. Please try again.', 408);
      }

      if (error instanceof TypeError) {
        throw new ApiError(
          'Network error. Please check your connection.',
          0
        );
      }

      throw new ApiError(
        'An unexpected error occurred. Please try again.',
        500
      );
    }
  }
}

// Singleton instance
export const apiClient = new ApiClient();
