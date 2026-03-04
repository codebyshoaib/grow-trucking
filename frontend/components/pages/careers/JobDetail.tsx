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
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            {job.workArrangement}
                        </span>
                        {job.compensation && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                {job.compensation}
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
                        {job.title} {job.workArrangement && `[ ${job.workArrangement} ]`}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-base text-gray-600 mb-6">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.employmentType}</span>
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

                    {/* Role Overview */}
                    {job.roleOverview && job.roleOverview.length > 0 && (
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                                Role Overview
                            </h2>
                            <ul className="space-y-3">
                                {job.roleOverview.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-primary mr-3 mt-1">•</span>
                                        <span className="text-base text-gray-700 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Duties and Responsibilities */}
                    {job.duties && job.duties.length > 0 && (
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                                Duties and Responsibilities
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

                    {/* What We're Looking For */}
                    {job.whatWeLookingFor && job.whatWeLookingFor.length > 0 && (
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                                What We're Looking For
                            </h2>
                            <ul className="space-y-3">
                                {job.whatWeLookingFor.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-primary mr-3 mt-1">•</span>
                                        <span className="text-base text-gray-700 leading-relaxed">
                                            {item}
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

                    {/* What You'll Earn & Get */}
                    {job.whatYouEarn && job.whatYouEarn.length > 0 && (
                        <div className="bg-primary/5 rounded-lg p-6 sm:p-8 border border-primary/20">
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">
                                What You'll Earn & Get
                            </h2>
                            <ul className="space-y-3">
                                {job.whatYouEarn.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-primary mr-3 mt-1">•</span>
                                        <span className="text-base text-gray-700 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* What We Offer */}
                    {job.whatWeOffer && job.whatWeOffer.length > 0 && (
                        <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">
                                What We Offer
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


                </div>
            </div>
        </main>
    )
}
