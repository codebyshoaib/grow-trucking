"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sliderImages = [
    {
        id: 1,
        src: "/testimonials/testimonial-1.png",
        alt: "Truck fleet operations"
    },
    {
        id: 2,
        src: "/testimonials/testimonial-2.png",
        alt: "Professional trucking services"
    },
    {
        id: 3,
        src: "/testimonials/testimonial-3.png",
        alt: "Logistics and transportation"
    },
    {
        id: 4,
        src: "/testimonials/testimonial-4.png",
        alt: "Truck dispatch services"
    }
];

export default function AboutExperience() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    // Auto-slide functionality (pause when modal is open)
    useEffect(() => {
        if (isModalOpen) return; // Pause auto-slide when modal is open

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [isModalOpen]);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isModalOpen) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // Prevent background scrolling
            window.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isModalOpen]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
    };

    const openModal = (index: number) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextModalSlide = () => {
        setModalIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };

    const prevModalSlide = () => {
        setModalIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
    };

    return (
        <section className="bg-white py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid items-start gap-10 grid-cols-1 lg:grid-cols-2 ">
                    {/* Left */}
                    <div className="col-span-1">
                        <Badge className="rounded-full px-4 py-1 text-xs tracking-wide">
                            MORE ABOUT GROW TRUCKING
                        </Badge>

                        <h2 className="mt-5 text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
                            5+ Years of Proven Expertise
                        </h2>

                        <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                            We've navigated the market since August 2019, delivering consistent,
                            high-value support through every market cycle. Our longevity is your
                            guarantee of stability.
                        </p>
                        {/* Cards Grid */}
                        <div className="mt-6 grid gap-6 grid-cols-1">
                            {/* Card 1 */}
                            <Card className="rounded-2xl border border-gray-200 shadow-sm">
                                <CardContent className="p-6 flex flex-col">
                                    <p className="text-sm font-semibold text-gray-900 underline decoration-primary decoration-2 underline-offset-4">
                                        Our Company History
                                    </p>

                                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                        GROW Trucking was established in August 2019 to solve the core
                                        financial and compliance challenges of owner-operators. We provide
                                        strategic business consultation (not basic load booking) by
                                        converting operational knowledge into scalable profit strategies.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Card 2 */}
                            <Card className="rounded-2xl border border-gray-200 shadow-sm">
                                <CardContent className="p-6  flex flex-col">
                                    <p className="text-sm font-semibold text-gray-900 underline decoration-primary decoration-2 underline-offset-4">
                                        50+ Strategic Partnerships
                                    </p>

                                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                        We've partnered with 50+ owner-operators and small fleets, helping
                                        them implement operational strategies that maximize revenue and
                                        enable sustainable growth.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right - Image Slider */}
                    <div className="col-span-1">
                        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                            {/* Image Container */}
                            <div className="relative aspect-[1/1] w-full h-[180px] lg:h-[380px] cursor-pointer" onClick={() => openModal(currentIndex)}>
                                {sliderImages.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-contain lg:object-cover"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 transition-all hover:scale-110"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-3 h-3  text-gray-700" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 transition-all hover:scale-110"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-3 h-3 text-gray-700" />
                            </button>

                            {/* Indicator Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                                {sliderImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "w-8 bg-primary"
                                            : "w-2 bg-white/60 hover:bg-white/80"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Optional: one horizontal "trust" bar */}
                        <div className="mt-6 rounded-2xl border border-gray-200 bg-secondary/5 px-6 py-4 text-sm text-gray-700">
                            Trusted by owner-operators and small fleets for strategy, compliance,
                            and operational stability.
                        </div>
                        <Button className="mt-12" size="lg" icon={<ArrowUpRight className="w-5 h-5" />} iconPosition="left">
                            <Link href="/contact">Book Free Consultation</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Modal Navigation Arrows */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevModalSlide();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextModalSlide();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Modal Image Container */}
                    <div
                        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            {sliderImages.map((image, index) => (
                                <div
                                    key={image.id}
                                    className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${index === modalIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-contain"
                                        sizes="90vw"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Modal Indicator Dots */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                            {sliderImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setModalIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === modalIndex
                                        ? "w-8 bg-white"
                                        : "w-2 bg-white/40 hover:bg-white/60"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
