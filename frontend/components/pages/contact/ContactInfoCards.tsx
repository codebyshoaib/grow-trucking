'use client'

import React, { useState } from 'react'
import { Building2, Check, Copy, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { socialLinks } from '@/constants/social.config'

/**
 * ContactInfoCards Component
 * Domain layer: Reusable contact information display component
 * Displays address, phone, and email with copy-to-clipboard functionality
 */
export default function ContactInfoCards() {
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

            {/* Social Media Links Card */}
            <div className="min-h-32 items-center flex group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-start gap-4 w-full">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-3 text-base">Follow Us</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <Link
                                        key={social.platform}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-primary hover:text-white transition-colors group/item"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-4 h-4 text-gray-600 group-hover/item:text-white transition-colors" />
                                        <span className="text-xs font-medium text-gray-700 group-hover/item:text-white transition-colors">
                                            {social.label}
                                        </span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
