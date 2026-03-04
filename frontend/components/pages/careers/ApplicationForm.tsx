'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { careerApplicationService } from '@/services/career.service'
import type { CareerApplicationFormData } from '@/types/career.types'

/**
 * ApplicationForm Component
 * Application form for job positions
 */
export default function ApplicationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        cityState: '',
        linkedIn: '',
        yearsOfExperience: '',
        positionType: '',
        coverNote: ''
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
        // Clear submit status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })
        setErrors({})

        try {
            const applicationData: CareerApplicationFormData = {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                cityState: formData.cityState || undefined,
                linkedIn: formData.linkedIn || undefined,
                yearsOfExperience: formData.yearsOfExperience || undefined,
                positionType: formData.positionType as 'remote' | 'onsite',
                coverNote: formData.coverNote || undefined,
            }

            const result = await careerApplicationService.submitCareerApplication(applicationData)

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Your application has been submitted successfully!'
                })
                // Reset form after successful submission
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    cityState: '',
                    linkedIn: '',
                    yearsOfExperience: '',
                    positionType: '',
                    coverNote: ''
                })

                setTimeout(() => {
                    setSubmitStatus({ type: null, message: '' })
                }, 5000)
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Failed to submit application. Please try again.'
                })

                if (result.errors) {
                    const errors: Record<string, string> = {}
                    Object.keys(result.errors).forEach(key => {
                        const fieldMap: Record<string, string> = {
                            'full_name': 'fullName',
                            'email': 'email',
                            'phone': 'phone',
                            'city_state': 'cityState',
                            'linkedin_url': 'linkedIn',
                            'years_of_experience': 'yearsOfExperience',
                            'position_type': 'positionType',
                            'cover_note': 'coverNote',
                        }
                        const frontendField = fieldMap[key] || key
                        errors[frontendField] = result.errors![key][0] || 'Invalid value'
                    })
                    setErrors(errors)
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

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                            Apply Now
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            Ready to join the Grow Trucking team? Fill out the application form below and email it along with your resume to{' '}
                            <a href="mailto:careers@growtrucking.com" className="text-primary hover:underline font-semibold">
                                careers@growtrucking.com
                            </a>
                            . Our hiring team reviews all applications within 3–5 business days.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 sm:p-8 md:p-10 space-y-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-6">
                                Application Form — Truck Dispatching Sales Executive
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={cn(
                                        "w-full bg-white border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                        errors.fullName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                                    )}
                                    placeholder="John Doe"
                                    required
                                />
                                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={cn(
                                        "w-full bg-white border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                        errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                                    )}
                                    placeholder="your.email@example.com"
                                    required
                                />
                                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={cn(
                                        "w-full bg-white border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                                        errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                                    )}
                                    placeholder="123-456-7890"
                                    required
                                />
                                {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label htmlFor="cityState" className="block text-sm font-semibold text-gray-700 mb-2">
                                    City & State
                                </label>
                                <input
                                    type="text"
                                    id="cityState"
                                    name="cityState"
                                    value={formData.cityState}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="New York, NY"
                                />
                            </div>

                            <div>
                                <label htmlFor="linkedIn" className="block text-sm font-semibold text-gray-700 mb-2">
                                    LinkedIn / Portfolio
                                </label>
                                <input
                                    type="url"
                                    id="linkedIn"
                                    name="linkedIn"
                                    value={formData.linkedIn}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="https://linkedin.com/in/yourprofile"
                                />
                                {errors.linkedIn && <p className="text-xs text-red-600 mt-1">{errors.linkedIn}</p>}
                            </div>

                            <div>
                                <label htmlFor="yearsOfExperience" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Years of Experience
                                </label>
                                <select
                                    id="yearsOfExperience"
                                    name="yearsOfExperience"
                                    value={formData.yearsOfExperience}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                >
                                    <option value="">Select</option>
                                    <option value="0-1">0-1 years</option>
                                    <option value="1-2">1-2 years</option>
                                    <option value="2-5">2-5 years</option>
                                    <option value="5+">5+ years</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Position Type <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="positionType"
                                        value="remote"
                                        checked={formData.positionType === 'remote'}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-primary border-gray-300 focus:ring-primary/20"
                                    />
                                    <span className="text-gray-700">Remote — Truck Dispatching Sales Executive</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="positionType"
                                        value="onsite"
                                        checked={formData.positionType === 'onsite'}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-primary border-gray-300 focus:ring-primary/20"
                                    />
                                    <span className="text-gray-700">On-Site — Truck Dispatching Sales Executive</span>
                                </label>
                            </div>
                            {errors.positionType && <p className="text-xs text-red-600 mt-1">{errors.positionType}</p>}
                        </div>

                        <div>
                            <label htmlFor="coverNote" className="block text-sm font-semibold text-gray-700 mb-2">
                                Brief Cover Note (Why do you want to join Grow Trucking?)
                            </label>
                            <textarea
                                id="coverNote"
                                name="coverNote"
                                value={formData.coverNote}
                                onChange={handleChange}
                                rows={5}
                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                placeholder="Tell us why you're interested in joining Grow Trucking..."
                            />
                        </div>

                        {/* Status Messages */}
                        {submitStatus.type && (
                            <div className={cn(
                                "p-4 rounded-lg flex items-start gap-3",
                                submitStatus.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                            )}>
                                {submitStatus.type === 'success' ? (
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                )}
                                <p className={cn("text-sm leading-relaxed", submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800')}>
                                    {submitStatus.message}
                                </p>
                            </div>
                        )}

                        <div className="pt-4 border-t border-gray-300">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Submit Application
                                    </>
                                )}
                            </Button>
                            <p className="text-xs text-center text-gray-500 mt-3">
                                Our hiring team reviews all applications within 3–5 business days.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
