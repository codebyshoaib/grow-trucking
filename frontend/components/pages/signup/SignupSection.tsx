'use client'

import React from 'react'
import SignupForm from './SignupForm'
import Link from 'next/link'
import Image from 'next/image'
import ContactInfoCards from '../contact/ContactInfoCards'

export default function SignupSection() {
    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white">
            <div className="container grid grid-cols-1 md:grid-cols-3 justify-center  mx-auto px-6">
                <div className="flex flex-col ">
                    <div className='flex items-center  gap-2 mb-8'>
                        <Link href="/" className="relative inline-flex items-center justify-center max-w-full">
                            {/* Outer concentric circles - creating depth effect */}
                            <div className="absolute rounded-full bg-[#194378] opacity-15 w-[min(400px,90vw)] h-[min(400px,90vw)] -z-10"></div>
                            <div className="absolute rounded-full bg-[#194378] opacity-25 w-[min(360px,81vw)] h-[min(360px,81vw)] -z-10"></div>
                            <div className="absolute rounded-full bg-[#194378] opacity-35 w-[min(320px,72vw)] h-[min(320px,72vw)] -z-10"></div>

                            {/* White circle container - main logo area */}
                            <div className="relative rounded-full bg-white w-[min(280px,63vw)] h-[min(280px,63vw)] flex items-center justify-center shadow-xl border-4 border-[#194378]/10">
                                <div className="rounded-full w-full h-full flex items-center justify-center p-8">
                                    <Image
                                        src="/logo.webp"
                                        alt="logo"
                                        width={200}
                                        height={200}
                                        className="object-contain w-full h-full max-w-[140px] max-h-[140px]"
                                    />
                                </div>
                            </div>
                        </Link>
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
                <div className="col-span-2 max-w-5xl md:mx-auto mt-10 md:mt-0">
                    <SignupForm />
                </div>
            </div>
        </section>
    )
}
