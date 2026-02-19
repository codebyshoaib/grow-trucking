'use client'

import React from 'react'
import SignupForm from './SignupForm'

export default function SignupSection() {
    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <SignupForm />
                </div>
            </div>
        </section>
    )
}
