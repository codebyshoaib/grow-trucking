'use client'

import React from 'react'
import SignupForm from './SignupForm'
import Image from 'next/image'
import ContactInfoCards from '../contact/ContactInfoCards'

export default function SignupSection() {
    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white">
            <div className="container grid grid-cols-1 md:grid-cols-3 justify-center mx-auto px-6">
                {/* Form - First on mobile, second on desktop */}
                <div className="col-span-2 max-w-5xl md:mx-auto order-1 md:order-2">
                    <SignupForm />
                </div>
                {/* Info Section - Second on mobile, first on desktop */}
                <div className="flex flex-col order-2 md:order-1 mt-10 md:mt-0">
                    <div className='flex items-center gap-2 mb-8'>
                        <Image
                            src="/case-studies/truck1.webp"
                            alt="Truck"
                            width={800}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        Start Getting Loads
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Whether you operate locally, regionally, or nationwide, we have you covered! Contact us today to join our wide network.
                    </p>
                    {/* Contact Information Cards */}
                    <div className="mt-8">
                        <ContactInfoCards />
                    </div>
                </div>
            </div>
        </section>
    )
}
