'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { signupService } from '@/services/signup.service'
import type { SignupFormData, CompanySignupFormData, OwnerOperatorSignupFormData, SignupType } from '@/types/signup.types'
import { cn } from '@/lib/utils'
import { TRUCK_TYPES, COMMUNICATION_METHODS } from '@/constants/signup.config'

interface FormErrors {
    [key: string]: string
}

/**
 * SignupForm Component
 * Simplified form with only essential fields for both Company and Owner Operator
 */
export default function SignupForm() {
    const [signupType, setSignupType] = useState<SignupType>('company')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        motorCarrierNo: '',
        numberOfTrucks: '',
        truckType: '',
        communicationMethod: '',
        agreeToTerms: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })
    const [fieldErrors, setFieldErrors] = useState<FormErrors>({})

    /**
     * Transform simplified form data to backend format
     */
    const transformToBackendFormat = (): SignupFormData => {
        if (signupType === 'company') {
            return {
                signupType: 'company',
                companyName: formData.name,
                companyEmail: formData.email,
                companyContactNumber: formData.contactNumber,
                motorCarrierNo: formData.motorCarrierNo,
                authorityAge: 0, // Not collected in simplified form
                numberOfTrucks: formData.numberOfTrucks,
                truckType: formData.truckType,
                operationArea: '', // Not collected in simplified form
                firstName: '', // Not collected in simplified form
                lastName: '', // Not collected in simplified form
                contactNumber: '', // Not collected in simplified form
                communicationMethod: formData.communicationMethod,
                email: formData.email,
                agreeToTerms: formData.agreeToTerms
            } as CompanySignupFormData
        } else {
            return {
                signupType: 'owner-operator',
                ownerName: formData.name,
                ownerEmail: formData.email,
                ownerContactNumber: formData.contactNumber,
                motorCarrierNo: formData.motorCarrierNo,
                authorityAge: 0, // Not collected in simplified form
                numberOfTrucks: formData.numberOfTrucks,
                truckType: formData.truckType,
                operationArea: '', // Not collected in simplified form
                firstName: '', // Not collected in simplified form
                lastName: '', // Not collected in simplified form
                contactNumber: '', // Not collected in simplified form
                communicationMethod: formData.communicationMethod,
                email: formData.email,
                agreeToTerms: formData.agreeToTerms
            } as OwnerOperatorSignupFormData
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })
        setFieldErrors({})

        try {
            const backendFormData = transformToBackendFormat()
            const result = await signupService.submitSignupForm(backendFormData)

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Your account has been created successfully!'
                })
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    contactNumber: '',
                    motorCarrierNo: '',
                    numberOfTrucks: '',
                    truckType: '',
                    communicationMethod: '',
                    agreeToTerms: false
                })

                setTimeout(() => {
                    setSubmitStatus({ type: null, message: '' })
                }, 5000)
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Failed to create account. Please try again.'
                })

                if (result.errors) {
                    const errors: FormErrors = {}
                    Object.keys(result.errors).forEach(key => {
                        const fieldMap: Record<string, string> = {
                            'email': 'email',
                            'contact_number': 'contactNumber',
                            'company_name': 'name',
                            'owner_name': 'name',
                            'company_email': 'email',
                            'owner_email': 'email',
                            'company_contact_number': 'contactNumber',
                            'owner_contact_number': 'contactNumber',
                            'motor_carrier_no': 'motorCarrierNo',
                            'number_of_trucks': 'numberOfTrucks',
                            'truck_type': 'truckType',
                            'communication_method': 'communicationMethod'
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked

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

    const handleTypeChange = (type: SignupType) => {
        setSignupType(type)
        setFieldErrors({})
        setSubmitStatus({ type: null, message: '' })
        // Reset form when switching types
        setFormData({
            name: '',
            email: '',
            contactNumber: '',
            motorCarrierNo: '',
            numberOfTrucks: '',
            truckType: '',
            communicationMethod: '',
            agreeToTerms: false
        })
    }

    return (
        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 xl:p-10 shadow-sm border border-gray-200 h-full flex flex-col">
            {/* Signup Type Tabs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
                <Button
                    type="button"
                    variant={signupType === 'company' ? 'default' : 'outline'}
                    className={cn(
                        "rounded-full w-full sm:w-auto min-h-[44px] text-sm md:text-base px-6 py-3"
                    )}
                    onClick={() => handleTypeChange('company')}
                >
                    Signup as Company
                </Button>
                <Button
                    type="button"
                    variant={signupType === 'owner-operator' ? 'default' : 'outline'}
                    className={cn(
                        "rounded-full w-full sm:w-auto min-h-[44px] text-sm md:text-base px-6 py-3"
                    )}
                    onClick={() => handleTypeChange('owner-operator')}
                >
                    Signup as Owner Operator
                </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 flex-1 flex flex-col">
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder={signupType === 'company' ? 'Company Name' : 'Owner Name'}
                            required
                        />
                        {fieldErrors.name && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Email"
                            required
                        />
                        {fieldErrors.email && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.email}</p>}
                    </div>

                    {/* Contact Number */}
                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.contactNumber ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Phone Number"
                            required
                        />
                        {fieldErrors.contactNumber && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.contactNumber}</p>}
                    </div>

                    {/* MC Authority / USDOT */}
                    <div>
                        <label htmlFor="motorCarrierNo" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            MC Authority / USDOT <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="motorCarrierNo"
                            name="motorCarrierNo"
                            value={formData.motorCarrierNo}
                            onChange={handleChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.motorCarrierNo ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="MC Number"
                            required
                        />
                        {fieldErrors.motorCarrierNo && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.motorCarrierNo}</p>}
                    </div>

                    {/* Number of Trucks */}
                    <div>
                        <label htmlFor="numberOfTrucks" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Number of Trucks
                        </label>
                        <input
                            type="number"
                            id="numberOfTrucks"
                            name="numberOfTrucks"
                            value={formData.numberOfTrucks}
                            onChange={handleChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.numberOfTrucks ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Enter number of trucks"
                            required
                            min="1"
                        />
                        {fieldErrors.numberOfTrucks && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.numberOfTrucks}</p>}
                    </div>

                    {/* Truck Type */}
                    <div>
                        <label htmlFor="truckType" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Truck Type
                        </label>
                        <select
                            id="truckType"
                            name="truckType"
                            value={formData.truckType}
                            onChange={handleChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none",
                                fieldErrors.truckType ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            required
                        >
                            <option value="">Select Truck Type</option>
                            {TRUCK_TYPES.map(truckType => (
                                <option key={truckType} value={truckType}>
                                    {truckType}
                                </option>
                            ))}
                        </select>
                        {fieldErrors.truckType && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.truckType}</p>}
                    </div>

                    {/* Communication Method */}
                    <div className="md:col-span-2">
                        <label htmlFor="communicationMethod" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Communication Method
                        </label>
                        <select
                            id="communicationMethod"
                            name="communicationMethod"
                            value={formData.communicationMethod}
                            onChange={handleChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none",
                                fieldErrors.communicationMethod ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            required
                        >
                            <option value="">Choose Method</option>
                            {COMMUNICATION_METHODS.map(method => (
                                <option key={method} value={method}>
                                    {method}
                                </option>
                            ))}
                        </select>
                        {fieldErrors.communicationMethod && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.communicationMethod}</p>}
                    </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3 md:gap-2">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 md:w-4 md:h-4 text-primary border-gray-300 rounded focus:ring-primary/20 cursor-pointer touch-manipulation flex-shrink-0"
                        required
                    />
                    <label htmlFor="agreeToTerms" className="text-sm md:text-sm text-gray-700 cursor-pointer leading-relaxed">
                        I agree to the{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                            Terms and Conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                            Privacy Policy
                        </a>
                    </label>
                </div>
                {fieldErrors.agreeToTerms && <p className="text-xs md:text-xs text-red-600 -mt-2 md:-mt-4">{fieldErrors.agreeToTerms}</p>}

                {/* Status Messages */}
                {submitStatus.type && (
                    <div className={cn(
                        "p-3 md:p-4 rounded-lg flex items-start gap-3",
                        submitStatus.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                    )}>
                        {submitStatus.type === 'success' ? (
                            <CheckCircle2 className="w-5 h-5 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                            <AlertCircle className="w-5 h-5 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <p className={cn("text-sm md:text-sm leading-relaxed", submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800')}>
                            {submitStatus.message}
                        </p>
                    </div>
                )}

                {/* Submit Button */}
                <div className="pt-2 md:pt-4 space-y-2 md:space-y-3">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 md:py-5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 uppercase min-h-[48px] md:min-h-[52px] text-sm md:text-base touch-manipulation"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 md:w-4 md:h-4 mr-2 animate-spin" />
                                Creating Account...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 md:w-4 md:h-4 mr-2" />
                                Submit
                            </>
                        )}
                    </Button>

                    <p className="text-xs md:text-xs text-center text-gray-500 px-2">
                        Already have an account?{' '}
                        <a href="/contact" className="text-primary hover:underline font-medium">
                            Contact us
                        </a>
                    </p>
                </div>
            </form>
        </div>
    )
}
