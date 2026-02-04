"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    role: "Fleet Owner",
    location: "New York, America",
    text: "I absolutely love this dispatch service! From the warm welcome to the final load, everything was perfect. The team really listened to what I wanted and made me feel so comfortable.",
    image: "https://i.pravatar.cc/150?u=jenny"
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "Owner Operator",
    location: "New York, America",
    text: "I absolutely love this dispatch service! From the warm welcome to the final load, everything was perfect. The team really listened to what I wanted and made me feel so comfortable.",
    image: "https://i.pravatar.cc/150?u=esther"
  },
  {
    id: 3,
    name: "Wade Warren",
    role: "Truck Driver",
    location: "New York, America",
    text: "I absolutely love this dispatch service! From the warm welcome to the final load, everything was perfect. The team really listened to what I wanted and made me feel so comfortable.",
    image: "https://i.pravatar.cc/150?u=wade"
  },
  {
    id: 4,
    name: "Guy Hawkins",
    role: "Logistics Manager",
    location: "Chicago, USA",
    text: "Working with Resolute has been a game-changer for our fleet. Their attention to detail and proactive communication set them apart from any other dispatchers we've used.",
    image: "https://i.pravatar.cc/150?u=guy"
  }
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(1) // Start with the second one as active (center)

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge>TESTIMONIALS</Badge>
          <h3 className="text-3xl md:text-5xl font-black text-black tracking-tight mt-4">
            What Our Client Say!
          </h3>
        </div>

        <div className="relative flex items-center justify-center gap-4 lg:gap-8">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 lg:left-10 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-primary hover:text-black transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-0 lg:right-10 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-primary hover:text-black transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Slider */}
          <div className="flex items-center justify-center gap-6 py-10 overflow-visible">
            <AnimatePresence mode="popLayout" initial={false}>
              {[-1, 0, 1].map((offset) => {
                const itemIndex = (index + offset + testimonials.length) % testimonials.length
                const item = testimonials[itemIndex]
                const isActive = offset === 0

                return (
                  <motion.div
                    key={`${item.id}-${offset}`}
                    initial={{ opacity: 0, scale: 0.8, x: offset * 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1.1 : 0.9,
                      x: 0,
                      zIndex: isActive ? 10 : 0
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: -offset * 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl border border-gray-50 flex flex-col max-w-[90%] lg:max-w-[400px] flex-shrink-0 ${!isActive ? 'hidden lg:flex blur-[1px]' : 'flex'}`}
                  >
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-primary opacity-50" />
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed italic">
                      "{item.text}"
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover grayscale"
                      />
                      <div>
                        <h4 className="font-black text-black">{item.name}</h4>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === i ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
