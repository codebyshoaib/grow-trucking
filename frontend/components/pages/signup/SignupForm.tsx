'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Loader2, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { signupService } from '@/services/signup.service'
import type { SignupFormData } from '@/types/signup.types'

interface FormErrors {
    [key: string]: string
}

/**
 * SignupForm Component
 * Domain layer - represents the user registration domain concept
 * Handles user signup form submission
 */
export default function SignupForm() {
    const [formData, setFormData] = useState<SignupFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        agreeToTerms: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })
    const [fieldErrors, setFieldErrors] = useState<FormErrors>({})
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })
        setFieldErrors({})

        try {
            const result = await signupService.submitSignupForm(formData)

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Your account has been created successfully!'
                })
                // Reset form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                    companyName: '',
                    agreeToTerms: false
                })

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus({ type: null, message: '' })
                }, 5000)
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Failed to create account. Please try again.'
                })

                // Map API errors to form fields
                if (result.errors) {
                    const errors: FormErrors = {}
                    Object.keys(result.errors).forEach(key => {
                        const fieldMap: Record<string, string> = {
                            'first_name': 'firstName',
                            'last_name': 'lastName',
                            'email': 'email',
                            'phone': 'phone',
                            'password': 'password',
                            'company_name': 'companyName'
                        }
                        const frontendField = fieldMap[key] || key
                        errors[frontendField] = result.errors![key][0] || 'Invalid value'
                    })
                    setFieldErrors(errors)
                }
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'An unexpected error occurred. Please try again later.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    return (
        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-200 h-full flex flex-col">
            {/* Header Section */}
            <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                    Create Your Account
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                    Join Grow Trucking today and start managing your dispatch operations efficiently.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                {/* Name Fields */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="flex-1">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.firstName
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-gray-200'
                                }`}
                            placeholder="John"
                            required
                        />
                        {fieldErrors.firstName && (
                            <p className="text-xs text-red-600 mt-1">{fieldErrors.firstName}</p>
                        )}
                    </div>

                    <div className="flex-1">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.lastName
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-gray-200'
                                }`}
                            placeholder="Doe"
                            required
                        />
                        {fieldErrors.lastName && (
                            <p className="text-xs text-red-600 mt-1">{fieldErrors.lastName}</p>
                        )}
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.email
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200'
                            }`}
                        placeholder="your.email@example.com"
                        required
                    />
                    {fieldErrors.email && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>
                    )}
                </div>

                {/* Phone Field */}
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Phone <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.phone
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200'
                            }`}
                        placeholder="123-456-7890"
                    />
                    {fieldErrors.phone && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.phone}</p>
                    )}
                </div>

                {/* Password Fields */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="flex-1">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full bg-gray-50 border rounded-lg px-4 py-3 pr-10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.password
                                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                    : 'border-gray-200'
                                    }`}
                                placeholder="Minimum 8 characters"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {fieldErrors.password && (
                            <p className="text-xs text-red-600 mt-1">{fieldErrors.password}</p>
                        )}
                    </div>

                    <div className="flex-1">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full bg-gray-50 border rounded-lg px-4 py-3 pr-10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.confirmPassword
                                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                    : 'border-gray-200'
                                    }`}
                                placeholder="Re-enter password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {fieldErrors.confirmPassword && (
                            <p className="text-xs text-red-600 mt-1">{fieldErrors.confirmPassword}</p>
                        )}
                    </div>
                </div>

                {/* Company Name Field */}
                <div>
                    <label
                        htmlFor="companyName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Company Name <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.companyName
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200'
                            }`}
                        placeholder="Your company name"
                    />
                    {fieldErrors.companyName && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.companyName}</p>
                    )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20"
                        required
                    />
                    <label
                        htmlFor="agreeToTerms"
                        className="text-sm text-gray-700 cursor-pointer"
                    >
                        I agree to the{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                            Terms and Conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                            Privacy Policy
                        </a>
                    </label>
                </div>
                {fieldErrors.agreeToTerms && (
                    <p className="text-xs text-red-600 -mt-4">{fieldErrors.agreeToTerms}</p>
                )}

                {/* Status Messages */}
                {submitStatus.type && (
                    <div
                        className={`p-4 rounded-lg flex items-start gap-3 ${submitStatus.type === 'success'
                            ? 'bg-green-50 border border-green-200'
                            : 'bg-red-50 border border-red-200'
                            }`}
                    >
                        {submitStatus.type === 'success' ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <p
                            className={`text-sm ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                                }`}
                        >
                            {submitStatus.message}
                        </p>
                    </div>
                )}

                {/* Submit Button */}
                <div className="pt-4 space-y-3">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Creating Account...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 mr-2" />
                                Create Account
                            </>
                        )}
                    </Button>

                    {/* Trust Elements */}
                    <p className="text-xs text-center text-gray-500">
                        Already have an account?{' '}
                        <a href="/contact" className="text-primary hover:underline">
                            Contact us
                        </a>
                    </p>
                </div>
            </form>
        </div>
    )
}
