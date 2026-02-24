import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface JobOpening {
    id: string
    title: string
    postedDate: string
    workArrangement: string
    location: string
    department: string
    employmentType: string
}

const jobOpenings: JobOpening[] = [
    {
        id: '1',
        title: 'Global B2B Sales and Business Development',
        postedDate: 'today',
        workArrangement: 'On-site',
        location: 'Lahore, Punjab, Pakistan',
        department: 'Cluster Business Head',
        employmentType: 'Full time'
    },
    {
        id: '2',
        title: 'Senior Software Engineer - AI/ML',
        postedDate: '2 days ago',
        workArrangement: 'On-site',
        location: 'Lahore, Punjab, Pakistan',
        department: 'Cluster Business Head',
        employmentType: 'Full time'
    },
    {
        id: '3',
        title: 'Career Manager - Business Development',
        postedDate: '3 days ago',
        workArrangement: 'Remote',
        location: 'Lahore, Punjab, Pakistan',
        department: 'Engineering Department',
        employmentType: 'Full time'
    },
]

export default function OpenJobs() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Section Header */}
                <div className="flex flex-col gap-4 justify-center items-center mb-8 sm:mb-12">
                    <Badge>OPEN POSITIONS</Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
                        Find Your Next Opportunity
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl text-center">
                        Explore our current job openings and join the team at Grow Trucking.
                    </p>
                </div>

                {/* Mobile View - Card List */}
                <div className="lg:hidden bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {jobOpenings.map((job, index) => (
                        <div
                            key={job.id}
                            className={`px-4 sm:px-6 py-5 sm:py-6 ${index !== jobOpenings.length - 1 ? 'border-b border-gray-200' : ''
                                }`}
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2">
                                {job.title}
                            </h3>
                            <p className="text-sm text-gray-700 mb-2">
                                {job.workArrangement} · {job.department} · {job.employmentType}
                            </p>
                            <p className="text-sm text-gray-700 mb-1">
                                {job.location}
                            </p>
                            <p className="text-sm text-gray-500">
                                Posted {job.postedDate}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Desktop View - Table */}
                <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Job Title
                                    </th>
                                    <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Arrangement
                                    </th>
                                    <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Location
                                    </th>
                                    <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Department
                                    </th>
                                    <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Employment Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {jobOpenings.map((job) => (
                                    <tr
                                        key={job.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-4 sm:px-6 py-5">
                                            <h3 className="text-base sm:text-lg font-bold text-secondary">
                                                {job.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">Posted {job.postedDate}</p>
                                        </td>
                                        <td className="px-4 sm:px-6 py-5">
                                            <span className="text-sm text-gray-700">
                                                {job.workArrangement}
                                            </span>
                                        </td>
                                        <td className="px-4 sm:px-6 py-5">
                                            <span className="text-sm text-gray-700">
                                                {job.location}
                                            </span>
                                        </td>
                                        <td className="px-4 sm:px-6 py-5">
                                            <span className="text-sm text-gray-700">
                                                {job.department}
                                            </span>
                                        </td>
                                        <td className="px-4 sm:px-6 py-5">
                                            <span className="text-sm text-gray-700">
                                                {job.employmentType}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
