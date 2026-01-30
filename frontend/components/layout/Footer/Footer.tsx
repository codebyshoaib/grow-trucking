import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MailCheck, PhoneCall, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
    { label: 'About us', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact us', href: '#contact' },
]

const socialLinks = [
    { label: 'Facebook', href: '#', icon: Facebook },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Twitter', href: '#', icon: Twitter },
    { label: 'Youtube', href: '#', icon: Youtube },
]
const COMPANY_EMAIL_ADDRESS = process.env.VITE_COMPANY_EMAIL_ADDRESS;
const COMPANY_PHONE_NUMBER = process.env.VITE_COMPANY_PHONE_NUMBER;
const COMPANY_STREET_ADDRESS = process.env.VITE_COMPANY_STREET_ADDRESS;
const COMPANY_SUITE_NUMBER = process.env.VITE_COMPANY_SUITE_NUMBER;
const COMPANY_ZIP_CODE = process.env.VITE_COMPANY_ZIP_CODE;

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 items-start">
                    <div className="space-y-4 flex flex-col">
                        <Image src="/logo.webp" alt="Logo" width={100} height={100} className="object-contain filter brightness-0 invert w-32 h-32" />
                        <div className="space-y-2 text-sm text-white/80">
                            <p>{COMPANY_STREET_ADDRESS}</p>
                            <p>{COMPANY_SUITE_NUMBER}</p>
                            <p>{COMPANY_ZIP_CODE}</p>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/80 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Social</h3>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
                                        >
                                            <Icon className="w-4 h-4" />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contact Us</h3>
                        <div className="flex items-center gap-2">
                            <PhoneCall className="w-4 h-4" />
                            <p className="text-sm text-white/80 hover:text-white transition-colors">
                                {COMPANY_PHONE_NUMBER}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MailCheck className="w-4 h-4" />
                            <p className="text-sm text-white/80 hover:text-white transition-colors">
                                {COMPANY_EMAIL_ADDRESS}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8">
                    <p className="text-sm text-white/60 text-center">
                        © 2026 Grow Trucking. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
