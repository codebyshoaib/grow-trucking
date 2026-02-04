'use client'

import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {/* Mobile: Form First, Desktop: Info First */}
                    <div className="order-2 lg:order-1">
                        <ContactInfo />
                    </div>
                    <div className="order-1 lg:order-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
