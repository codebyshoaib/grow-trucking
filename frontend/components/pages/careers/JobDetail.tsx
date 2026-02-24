import React from 'react'
import { Button } from '@/components/ui/button'
import { PhoneCall, Share2 } from 'lucide-react'
import Link from 'next/link'
import type { JobOpening } from '@/types/job.types'

interface JobDetailProps {
    job: JobOpening
}

export default function JobDetail({ job }: JobDetailProps) {
    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
                {/* Header Section */}
                <div className="mb-8 sm:mb-12">
                    {job.jobId && (
                        <p className="text-sm text-gray-500 mb-2">Job ID: {job.jobId}</p>
                    )}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
                        {job.title}
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        {job.location}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            icon={<PhoneCall className="w-5 h-5" />}
                            iconPosition="left"
                            asChild
                        >
                            <Link href={'/contact'}>Apply Now</Link>
                        </Button>
                    </div>
                </div>

                {/* Job Description Section */}
                <div className="max-w-4xl space-y-8">
                    {job.introduction && (
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {job.introduction}
                            </p>
                        </div>
                    )}

                    {job.description && (
                        <div>
                            <p className="text-base text-gray-700 leading-relaxed">
                                {job.description}
                            </p>
                        </div>
                    )}

                    {/* Duties and Responsibilities */}
                    {job.duties && job.duties.length > 0 && (
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                                DUTIES AND RESPONSIBILITIES
                            </h2>
                            <ul className="space-y-3">
                                {job.duties.map((duty, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-primary mr-3 mt-1">•</span>
                                        <span className="text-base text-gray-700 leading-relaxed">
                                            {duty}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Qualifications */}
                    {job.qualifications && (
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                                QUALIFICATIONS
                            </h2>

                            {job.qualifications.required && job.qualifications.required.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Required:</h3>
                                    <ul className="space-y-2">
                                        {job.qualifications.required.map((qual, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-primary mr-3 mt-1">•</span>
                                                <span className="text-base text-gray-700 leading-relaxed">
                                                    {qual}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {job.qualifications.preferred && job.qualifications.preferred.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Preferred:</h3>
                                    <ul className="space-y-2">
                                        {job.qualifications.preferred.map((qual, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-primary mr-3 mt-1">•</span>
                                                <span className="text-base text-gray-700 leading-relaxed">
                                                    {qual}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* What We Offer */}
                    {job.whatWeOffer && job.whatWeOffer.length > 0 && (
                        <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">
                                WHAT WE OFFER
                            </h2>
                            <ul className="space-y-3">
                                {job.whatWeOffer.map((offer, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-primary mr-3 mt-1">•</span>
                                        <span className="text-base text-gray-700 leading-relaxed">
                                            {offer}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Encouragement Text */}
                    {job.encouragementText && (
                        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
                            <p className="text-base text-gray-700 leading-relaxed">
                                {job.encouragementText}
                            </p>
                        </div>
                    )}

                    {/* Apply Now Button */}
                    <div className="pt-6">
                        <Button
                            size="lg"
                            icon={<PhoneCall className="w-5 h-5" />}
                            iconPosition="left"
                            className="w-full sm:w-auto"
                            asChild
                        >
                            <Link href={'/contact'}>Apply Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
