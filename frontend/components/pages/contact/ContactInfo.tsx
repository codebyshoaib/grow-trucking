'use client'
import React from 'react'
import ContactInfoCards from './ContactInfoCards'

export default function ContactInfo() {
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
            <ContactInfoCards />
        </div>
    )
}
