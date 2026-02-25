'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { signupService } from '@/services/signup.service'
import type { SignupFormData, CompanySignupFormData, OwnerOperatorSignupFormData, SignupType } from '@/types/signup.types'
import { cn } from '@/lib/utils'
import { TRUCK_TYPES, OPERATION_AREAS, COMMUNICATION_METHODS, getNumberOfTrucksOptions } from '@/constants/signup.config'

interface FormErrors {
    [key: string]: string
}

/**
 * SignupForm Component
 * Domain layer - represents the user registration domain concept
 * Handles both Company and Owner Operator signup form submission
 */
export default function SignupForm() {
    const [signupType, setSignupType] = useState<SignupType>('company')
    const [companyFormData, setCompanyFormData] = useState<CompanySignupFormData>({
        signupType: 'company',
        companyName: '',
        companyEmail: '',
        companyContactNumber: '',
        motorCarrierNo: '',
        authorityAge: 0,
        numberOfTrucks: '',
        truckType: '',
        operationArea: '',
        firstName: '',
        lastName: '',
        contactNumber: '',
        communicationMethod: '',
        email: '',
        agreeToTerms: false
    })
    const [ownerFormData, setOwnerFormData] = useState<OwnerOperatorSignupFormData>({
        signupType: 'owner-operator',
        ownerName: '',
        ownerEmail: '',
        ownerContactNumber: '',
        motorCarrierNo: '',
        authorityAge: 0,
        numberOfTrucks: '',
        truckType: '',
        operationArea: '',
        firstName: '',
        lastName: '',
        contactNumber: '',
        communicationMethod: '',
        email: '',
        agreeToTerms: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })
    const [fieldErrors, setFieldErrors] = useState<FormErrors>({})

    const getFormData = (): SignupFormData => {
        return signupType === 'company' ? companyFormData : ownerFormData
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })
        setFieldErrors({})

        try {
            const formData = getFormData()
            const result = await signupService.submitSignupForm(formData)

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Your account has been created successfully!'
                })
                // Reset form after successful submission
                if (signupType === 'company') {
                    setCompanyFormData({
                        signupType: 'company',
                        companyName: '',
                        companyEmail: '',
                        companyContactNumber: '',
                        motorCarrierNo: '',
                        authorityAge: 0,
                        numberOfTrucks: '',
                        truckType: '',
                        operationArea: '',
                        firstName: '',
                        lastName: '',
                        contactNumber: '',
                        communicationMethod: '',
                        email: '',
                        agreeToTerms: false
                    })
                } else {
                    setOwnerFormData({
                        signupType: 'owner-operator',
                        ownerName: '',
                        ownerEmail: '',
                        ownerContactNumber: '',
                        motorCarrierNo: '',
                        authorityAge: 0,
                        numberOfTrucks: '',
                        truckType: '',
                        operationArea: '',
                        firstName: '',
                        lastName: '',
                        contactNumber: '',
                        communicationMethod: '',
                        email: '',
                        agreeToTerms: false
                    })
                }

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
                            'first_name': 'firstName',
                            'last_name': 'lastName',
                            'email': 'email',
                            'phone': 'phone',
                            'company_name': 'companyName',
                            'company_email': 'companyEmail',
                            'company_contact_number': 'companyContactNumber',
                            'motor_carrier_no': 'motorCarrierNo',
                            'authority_age': 'authorityAge',
                            'number_of_trucks': 'numberOfTrucks',
                            'truck_type': 'truckType',
                            'operation_area': 'operationArea',
                            'contact_number': 'contactNumber',
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

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked

        setCompanyFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (name === 'authorityAge' ? parseInt(value) || 0 : value)
        }))

        if (fieldErrors[name]) {
            setFieldErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const handleOwnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked

        setOwnerFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (name === 'authorityAge' ? parseInt(value) || 0 : value)
        }))

        if (fieldErrors[name]) {
            setFieldErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const renderCompanyForm = () => (
        <div className="space-y-4 md:space-y-6">
            {/* Company Details Section */}
            <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">Company Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={companyFormData.companyName}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.companyName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Company Name"
                            required
                        />
                        {fieldErrors.companyName && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.companyName}</p>}
                    </div>

                    <div>
                        <label htmlFor="companyEmail" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="companyEmail"
                            name="companyEmail"
                            value={companyFormData.companyEmail}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.companyEmail ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Email"
                            required
                        />
                        {fieldErrors.companyEmail && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.companyEmail}</p>}
                    </div>

                    <div>
                        <label htmlFor="companyContactNumber" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="companyContactNumber"
                            name="companyContactNumber"
                            value={companyFormData.companyContactNumber}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.companyContactNumber ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Phone Number"
                            required
                        />
                        {fieldErrors.companyContactNumber && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.companyContactNumber}</p>}
                    </div>

                    <div>
                        <label htmlFor="motorCarrierNo" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Motor Carrier No
                        </label>
                        <input
                            type="text"
                            id="motorCarrierNo"
                            name="motorCarrierNo"
                            value={companyFormData.motorCarrierNo}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.motorCarrierNo ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="MC Number"
                            required
                        />
                        {fieldErrors.motorCarrierNo && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.motorCarrierNo}</p>}
                    </div>

                    <div>
                        <label htmlFor="authorityAge" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Authority Age
                        </label>
                        <input
                            type="number"
                            id="authorityAge"
                            name="authorityAge"
                            value={companyFormData.authorityAge || ''}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.authorityAge ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Enter Age Of MC Authority"
                            required
                            min="0"
                        />
                        {fieldErrors.authorityAge && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.authorityAge}</p>}
                    </div>

                    <div>
                        <label htmlFor="numberOfTrucks" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Number of Trucks
                        </label>
                        <select
                            id="numberOfTrucks"
                            name="numberOfTrucks"
                            value={companyFormData.numberOfTrucks}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none",
                                fieldErrors.numberOfTrucks ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            required
                        >
                            <option value="">Select</option>
                            {getNumberOfTrucksOptions().map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {fieldErrors.numberOfTrucks && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.numberOfTrucks}</p>}
                    </div>

                    <div>
                        <label htmlFor="truckType" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Truck Type
                        </label>
                        <select
                            id="truckType"
                            name="truckType"
                            value={companyFormData.truckType}
                            onChange={handleCompanyChange}
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

                    <div>
                        <label htmlFor="operationArea" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Operation Area
                        </label>
                        <select
                            id="operationArea"
                            name="operationArea"
                            value={companyFormData.operationArea}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none",
                                fieldErrors.operationArea ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            required
                        >
                            <option value="">Select Operation Area</option>
                            {OPERATION_AREAS.map(area => (
                                <option key={area} value={area}>
                                    {area}
                                </option>
                            ))}
                        </select>
                        {fieldErrors.operationArea && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.operationArea}</p>}
                    </div>
                </div>
            </div>

            {/* Contact Person Details Section */}
            <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">Contact Person Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={companyFormData.firstName}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="First Name"
                            required
                        />
                        {fieldErrors.firstName && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.firstName}</p>}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={companyFormData.lastName}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Last Name"
                            required
                        />
                        {fieldErrors.lastName && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.lastName}</p>}
                    </div>

                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            value={companyFormData.contactNumber}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.contactNumber ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Contact Number"
                            required
                        />
                        {fieldErrors.contactNumber && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.contactNumber}</p>}
                    </div>

                    <div>
                        <label htmlFor="communicationMethod" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Communication Method
                        </label>
                        <select
                            id="communicationMethod"
                            name="communicationMethod"
                            value={companyFormData.communicationMethod}
                            onChange={handleCompanyChange}
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

                    <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={companyFormData.email}
                            onChange={handleCompanyChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Email"
                            required
                        />
                        {fieldErrors.email && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.email}</p>}
                    </div>
                </div>
            </div>
        </div>
    )

    const renderOwnerOperatorForm = () => (
        <div className="space-y-4 md:space-y-6">
            {/* Owner Details Section */}
            <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">Owner Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                        <label htmlFor="ownerName" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Owner Name
                        </label>
                        <input
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            value={ownerFormData.ownerName}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.ownerName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Owner Name"
                            required
                        />
                        {fieldErrors.ownerName && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.ownerName}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerEmail" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="ownerEmail"
                            name="ownerEmail"
                            value={ownerFormData.ownerEmail}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.ownerEmail ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Email"
                            required
                        />
                        {fieldErrors.ownerEmail && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.ownerEmail}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerContactNumber" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="ownerContactNumber"
                            name="ownerContactNumber"
                            value={ownerFormData.ownerContactNumber}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.ownerContactNumber ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Phone Number"
                            required
                        />
                        {fieldErrors.ownerContactNumber && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.ownerContactNumber}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerMotorCarrierNo" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Motor Carrier No
                        </label>
                        <input
                            type="text"
                            id="ownerMotorCarrierNo"
                            name="motorCarrierNo"
                            value={ownerFormData.motorCarrierNo}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.motorCarrierNo ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="MC Number"
                            required
                        />
                        {fieldErrors.motorCarrierNo && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.motorCarrierNo}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerAuthorityAge" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Authority Age
                        </label>
                        <input
                            type="number"
                            id="ownerAuthorityAge"
                            name="authorityAge"
                            value={ownerFormData.authorityAge || ''}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.authorityAge ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Enter Age Of MC Authority"
                            required
                            min="0"
                        />
                        {fieldErrors.authorityAge && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.authorityAge}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerNumberOfTrucks" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Number of Trucks
                        </label>
                        <select
                            id="ownerNumberOfTrucks"
                            name="numberOfTrucks"
                            value={ownerFormData.numberOfTrucks}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none",
                                fieldErrors.numberOfTrucks ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            required
                        >
                            <option value="">Select</option>
                            {getNumberOfTrucksOptions().map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {fieldErrors.numberOfTrucks && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.numberOfTrucks}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerTruckType" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Truck Type
                        </label>
                        <select
                            id="ownerTruckType"
                            name="truckType"
                            value={ownerFormData.truckType}
                            onChange={handleOwnerChange}
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

                    <div>
                        <label htmlFor="ownerOperationArea" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Operation Area
                        </label>
                        <select
                            id="ownerOperationArea"
                            name="operationArea"
                            value={ownerFormData.operationArea}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none",
                                fieldErrors.operationArea ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            required
                        >
                            <option value="">Select Operation Area</option>
                            {OPERATION_AREAS.map(area => (
                                <option key={area} value={area}>
                                    {area}
                                </option>
                            ))}
                        </select>
                        {fieldErrors.operationArea && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.operationArea}</p>}
                    </div>
                </div>
            </div>

            {/* Contact Person Details Section */}
            <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">Contact Person Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                        <label htmlFor="ownerFirstName" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="ownerFirstName"
                            name="firstName"
                            value={ownerFormData.firstName}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="First Name"
                            required
                        />
                        {fieldErrors.firstName && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.firstName}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerLastName" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="ownerLastName"
                            name="lastName"
                            value={ownerFormData.lastName}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Last Name"
                            required
                        />
                        {fieldErrors.lastName && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.lastName}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerContactNumber" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="ownerContactNumber"
                            name="contactNumber"
                            value={ownerFormData.contactNumber}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.contactNumber ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Contact Number"
                            required
                        />
                        {fieldErrors.contactNumber && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.contactNumber}</p>}
                    </div>

                    <div>
                        <label htmlFor="ownerCommunicationMethod" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Communication Method
                        </label>
                        <select
                            id="ownerCommunicationMethod"
                            name="communicationMethod"
                            value={ownerFormData.communicationMethod}
                            onChange={handleOwnerChange}
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

                    <div className="md:col-span-2">
                        <label htmlFor="ownerContactEmail" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="ownerContactEmail"
                            name="email"
                            value={ownerFormData.email}
                            onChange={handleOwnerChange}
                            className={cn(
                                "w-full bg-gray-50 border rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                fieldErrors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                            )}
                            placeholder="Email"
                            required
                        />
                        {fieldErrors.email && <p className="text-xs md:text-xs text-red-600 mt-1">{fieldErrors.email}</p>}
                    </div>
                </div>
            </div>
        </div>
    )

    const currentFormData = getFormData()
    const agreeToTerms = signupType === 'company' ? companyFormData.agreeToTerms : ownerFormData.agreeToTerms

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
                    onClick={() => {
                        setSignupType('company')
                        setFieldErrors({})
                        setSubmitStatus({ type: null, message: '' })
                    }}

                >
                    Signup as Company
                </Button>
                <Button
                    type="button"
                    variant={signupType === 'owner-operator' ? 'default' : 'outline'}
                    className={cn(
                        "rounded-full w-full sm:w-auto min-h-[44px] text-sm md:text-base px-6 py-3"
                    )}
                    onClick={() => {
                        setSignupType('owner-operator')
                        setFieldErrors({})
                        setSubmitStatus({ type: null, message: '' })
                    }}
                >
                    Signup as Owner Operator
                </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 flex-1 flex flex-col">
                {/* Render appropriate form based on type */}
                {signupType === 'company' ? renderCompanyForm() : renderOwnerOperatorForm()}

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3 md:gap-2">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={agreeToTerms}
                        onChange={signupType === 'company' ? handleCompanyChange : handleOwnerChange}
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
