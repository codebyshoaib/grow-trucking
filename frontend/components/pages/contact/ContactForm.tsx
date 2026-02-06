'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Loader2 } from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log('Form submitted:', formData)
        // You can add API call here

        setIsSubmitting(false)
        // Reset form after successful submission
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-200 h-full flex flex-col">
            {/* Header Section */}
            <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                    Contact Form
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                    Fill out the form below to get in touch with us.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                {/* Name Field */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="flex-1">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            First Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Last Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>

                </div>

                {/* Email Field */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Phone
                    </label>
                    <div className="relative">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="123-456-7890"
                            required
                        />
                    </div>
                </div>
                {/* Message Field */}
                <div className="flex-1 flex flex-col">
                    <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Message
                    </label>
                    <div className="relative flex-1">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none h-full"
                            placeholder="Your message here..."
                            required
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        Tell us about your fleet, lanes, or goals...
                    </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4 space-y-3">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 mr-2" />
                                Send message
                            </>
                        )}
                    </Button>

                    {/* Trust Elements */}
                    <p className="text-xs text-center text-gray-500">
                        No spam. We'll only reply to your request.
                    </p>
                </div>
            </form>
        </div>
    )
}
