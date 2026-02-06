'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { contactService } from '@/services/contact.service'
import type { ContactFormData } from '@/types/contact.types'

interface FormErrors {
    [key: string]: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })
    const [fieldErrors, setFieldErrors] = useState<FormErrors>({})

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })
        setFieldErrors({})

        try {
            // Use contact service (application layer)
            const result = await contactService.submitContactForm(formData)

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Your message has been sent successfully!'
                })
                // Reset form after successful submission
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus({ type: null, message: '' })
                }, 5000)
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Failed to send message. Please try again.'
                })

                // Map API errors to form fields
                if (result.errors) {
                    const errors: FormErrors = {}
                    Object.keys(result.errors).forEach(key => {
                        // Map backend field names to frontend field names
                        const fieldMap: Record<string, string> = {
                            'first_name': 'firstName',
                            'last_name': 'lastName',
                            'email': 'email',
                            'phone': 'phone',
                            'message': 'message'
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
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
                    Contact Form
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                    Fill out the form below to get in touch with us.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                {/* Name Field */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="flex-1">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            First Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                                    }`}
                                placeholder="John"
                                required
                            />
                        </div>
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
                        <div className="relative">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                                    }`}
                                placeholder="Doe"
                                required
                            />
                        </div>
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
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                                }`}
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
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
                    <div className="relative">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                                }`}
                            placeholder="123-456-7890"
                        />
                    </div>
                    {fieldErrors.phone && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.phone}</p>
                    )}
                </div>
                {/* Message Field */}
                <div className="flex-1 flex flex-col">
                    <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Message
                    </label>
                    <div className="relative flex-1">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none h-full ${fieldErrors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                                }`}
                            placeholder="Your message here..."
                            required
                        />
                    </div>
                    {fieldErrors.message ? (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.message}</p>
                    ) : (
                        <p className="text-xs text-gray-500 mt-2">
                            Tell us about your fleet, lanes, or goals... (minimum 10 characters)
                        </p>
                    )}
                </div>

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
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 mr-2" />
                                Send message
                            </>
                        )}
                    </Button>

                    {/* Trust Elements */}
                    <p className="text-xs text-center text-gray-500">
                        No spam. We'll only reply to your request.
                    </p>
                </div>
            </form>
        </div>
    )
}
