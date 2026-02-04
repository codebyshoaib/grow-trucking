'use client'
import { MapPin, Mail, Phone, Building2, Copy, Check } from 'lucide-react'
import React, { useState } from 'react'

export default function ContactInfo() {
    const [copied, setCopied] = useState<{ email: boolean; phone: boolean }>({
        email: false,
        phone: false
    })

    const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(prev => ({ ...prev, [type]: true }))
            setTimeout(() => {
                setCopied(prev => ({ ...prev, [type]: false }))
            }, 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }


    const STREET_ADDRESS = process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS;
    const SUITE_NUMBER = process.env.NEXT_PUBLIC_COMPANY_SUITE_NUMBER;
    const ZIP_CODE = process.env.NEXT_PUBLIC_COMPANY_ZIP_CODE;
    const PHONE_NUMBER = process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER;
    const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_COMPANY_EMAIL_ADDRESS;

    return (
        <div className="p-8 lg:p-10 h-full flex flex-col">
            {/* Header Section */}
            <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                    Get in touch
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Let's talk.
                </p>

            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4 flex-1">
                {/* Address Card */}
                <div className="min-h-32 items-center flex group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-1 text-base">Address</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {STREET_ADDRESS} <br />
                                {SUITE_NUMBER} <br />
                                {ZIP_CODE}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Phone Card */}
                <div className="min-h-32 items-center flex group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-1 text-base">Phone</h3>
                            <div className="flex items-center gap-2">
                                {PHONE_NUMBER ? (
                                    <>
                                        <a
                                            href={`tel:${PHONE_NUMBER}`}
                                            className="text-gray-700 text-sm hover:text-primary transition-colors font-medium"
                                        >
                                            {PHONE_NUMBER}
                                        </a>
                                        <button
                                            onClick={() => copyToClipboard(PHONE_NUMBER, 'phone')}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded-md"
                                            aria-label="Copy phone number"
                                            title="Copy phone number"
                                        >
                                            {copied.phone ? (
                                                <Check className="w-4 h-4 text-primary" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-500" />
                                            )}
                                        </button>
                                    </>
                                ) : (
                                    <span className="text-gray-500 text-sm">Not available</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email Card */}
                <div className="min-h-32 items-center flex group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-1 text-base">Email</h3>
                            <div className="flex items-center gap-2">
                                {EMAIL_ADDRESS ? (
                                    <>
                                        <a
                                            href={`mailto:${EMAIL_ADDRESS}`}
                                            className="text-gray-700 text-sm hover:text-primary transition-colors font-medium"
                                        >
                                            {EMAIL_ADDRESS}
                                        </a>
                                        <button
                                            onClick={() => copyToClipboard(EMAIL_ADDRESS, 'email')}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded-md"
                                            aria-label="Copy email"
                                            title="Copy email"
                                        >
                                            {copied.email ? (
                                                <Check className="w-4 h-4 text-primary" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-500" />
                                            )}
                                        </button>
                                    </>
                                ) : (
                                    <span className="text-gray-500 text-sm">Not available</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
