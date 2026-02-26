import React from 'react'
import Link from 'next/link'
import { Phone, Building2, MailCheck } from 'lucide-react'
import Image from 'next/image'
import { socialLinks } from '@/constants/social.config'

const contactLinks = [
    {
        icon: MailCheck,
        label: 'Email',
        value: process.env.NEXT_PUBLIC_COMPANY_EMAIL_ADDRESS ?? '',
        href: `mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL_ADDRESS ?? 'info@growtrucking.com'}`
    },
    {
        icon: Phone,
        label: 'Phone',
        value: process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER ?? '',
        href: `tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER ?? ''}`
    },
    {
        icon: Building2,
        label: 'Address',
        value: [
            process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS,
            process.env.NEXT_PUBLIC_COMPANY_CITY,
            (process.env.NEXT_PUBLIC_COMPANY_STATE ?? '').toUpperCase(),
            process.env.NEXT_PUBLIC_COMPANY_ZIP_CODE
        ].filter(Boolean).join(' '),
        href: 'https://share.google/OVWJofU12AadwPRG7'
    },
]

const quickLinks = [
    { label: 'Tutorials', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

// Social links are imported from social.config.ts

const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/privacy-policy' },
]

export default function Footer() {
    return (
        <footer className="bg-secondary text-white rounded-t-3xl">
            <div className="container mx-auto px-6 py-16 lg:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
                    {/* Left Column - Branding and Social */}
                    <div className="space-y-6">
                        {/* Logo and Company Name */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.webp"
                                alt="Logo"
                                width={150}
                                height={150}
                                className="object-contain filter brightness-0 invert"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-sm leading-relaxed max-w-md mt-4">
                            Grow Trucking is a truck dispatch company that provides truck dispatch services to owner-operators, small fleets, and independent truck drivers across the USA.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-white/70 hover:text-primary transition-colors"
                                        aria-label={link.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Column - Navigation Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Resources Column */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white underline underline-offset-8 decoration-primary">
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white underline underline-offset-8 decoration-primary">
                                Contact Us
                            </h3>
                            <ul className="space-y-3">
                                {contactLinks.map((link) => {
                                    const Icon = link.icon
                                    return (
                                        <li key={link.label} className="flex items-center gap-2">
                                            <Icon className="w-5 h-5 text-white/70 flex-shrink-0" />
                                            <Link
                                                href={link.href}
                                                className="text-sm text-white/70 hover:text-white transition-colors"
                                            >
                                                {link.value}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright and Legal Links */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-white/60">
                        © 2026 Grow Trucking. All rights reserved.
                    </p>

                    {/* Legal Links */}
                    <div className="flex items-center gap-6">
                        {legalLinks.map((link, index) => (
                            <React.Fragment key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-white/70 hover:text-white underline underline-offset-4 transition-colors"
                                >
                                    {link.label}
                                </Link>
                                {index < legalLinks.length - 1 && (
                                    <span className="text-white/30">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
