import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

/**
 * CareersCTA Component
 * Final call-to-action section for careers page
 */
export default function CareersCTA() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                        Ready to Grow With Us?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed">
                        Apply today and take the first step toward a rewarding career in truck dispatching sales.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            icon={<Mail className="w-5 h-5" />}
                            iconPosition="left"
                            asChild
                            className="bg-primary hover:bg-primary/90 text-white"
                        >
                            <a href="mailto:careers@growtrucking.com">
                                careers@growtrucking.com
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            icon={<ExternalLink className="w-5 h-5" />}
                            iconPosition="right"
                            asChild
                        >
                            <Link href="/careers">
                                View Open Positions
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            <a href="https://www.growtrucking.com" className="text-primary hover:underline">
                                www.growtrucking.com/careers
                            </a>
                            {' '}| Your Growth Partner in Trucking
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
