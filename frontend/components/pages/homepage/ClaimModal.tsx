'use client'

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { claimService } from '@/services/claim.service'
import type { ClaimFormData } from '@/types/contact.types'

interface ClaimModalProps {
    isOpen: boolean
    onClose: () => void
}

interface FormErrors {
    [key: string]: string
}

/**
 * ClaimModal Component
 * Domain layer - represents the claim booking domain concept
 * Handles claim form submission within a modal context
 */
export default function ClaimModal({ isOpen, onClose }: ClaimModalProps) {
    const [formData, setFormData] = useState<ClaimFormData>({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        preferredRoute: '',
        ageOfMCAuthority: 0
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
            const result = await claimService.submitClaimForm(formData)

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Your claim request has been submitted successfully!'
                })
                // Reset form after successful submission
                setFormData({ fullName: '', email: '', phone: '', companyName: '', preferredRoute: '', ageOfMCAuthority: 0 })

                // Auto-close modal after 2 seconds on success
                setTimeout(() => {
                    onClose()
                    setSubmitStatus({ type: null, message: '' })
                }, 2000)
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Failed to submit request. Please try again.'
                })

                // Map API errors to form fields
                if (result.errors) {
                    const errors: FormErrors = {}
                    Object.keys(result.errors).forEach(key => {
                        const fieldMap: Record<string, string> = {
                            'full_name': 'fullName',
                            'email': 'email',
                            'phone': 'phone',
                            'company_name': 'companyName',
                            'preferred_route': 'preferredRoute',
                            'age_of_mc_authority': 'ageOfMCAuthority'
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

    const handleClose = () => {
        // Reset form and status when closing
        setFormData({ fullName: '', email: '', phone: '', companyName: '', preferredRoute: '', ageOfMCAuthority: 0 })
        setSubmitStatus({ type: null, message: '' })
        setFieldErrors({})
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        Claim Free Loads
                    </DialogTitle>
                    <DialogDescription className="text-base">
                        Fill out the form below to claim your free loads. We'll get back to you as soon as possible.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
                    {/* Name Fields */}
                    <div className="flex gap-4 flex-col sm:flex-row">
                        <div className="flex-1">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.firstName
                                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                    : 'border-gray-200'
                                    }`}
                                placeholder="John Doe"
                                required
                            />
                            {fieldErrors.firstName && (
                                <p className="text-xs text-red-600 mt-1">{fieldErrors.fullName}</p>
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

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="companyName"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Company Name
                        </label>
                        < input
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
                            required
                        />
                        {fieldErrors.companyName && (
                            <p className="text-xs text-red-600 mt-1">{fieldErrors.companyName}</p>
                        )}
                    </div>

                    {/* Preferred Route Field */}
                    <div>
                        <label
                            htmlFor="preferredRoute"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Preferred Route
                        </label>
                        < input
                            type="text"
                            id="preferredRoute"
                            name="preferredRoute"
                            value={formData.preferredRoute}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.preferredRoute
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-gray-200'
                                }`}
                            placeholder="Your preferred route"
                            required
                        />
                        {fieldErrors.preferredRoute && (
                            <p className="text-xs text-red-600 mt-1">{fieldErrors.preferredRoute}</p>
                        )}
                    </div>
                    {/* Age of MC Authority Field */}
                    <div>
                        <label
                            htmlFor="ageOfMCAuthority"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Age of MC Authority (years)
                        </label>

                        <input
                            type="number"
                            id="ageOfMCAuthority"
                            name="ageOfMCAuthority"
                            value={formData.ageOfMCAuthority}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${fieldErrors.ageOfMCAuthority
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-gray-200'
                                }`}
                            placeholder="Your age of MC authority"
                            required
                        />
                        {fieldErrors.ageOfMCAuthority && (
                            <p className="text-xs text-red-600 mt-1">{fieldErrors.ageOfMCAuthority}</p>
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
                    <div className="pt-2 col-span-2">
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Submit Request
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
