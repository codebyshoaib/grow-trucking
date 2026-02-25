"use client"

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getFeaturedCaseStudies } from '@/constants/case-studies.config'

export default function TestimonialsSection() {
  const caseStories = getFeaturedCaseStudies()
  const [index, setIndex] = useState(1) // Start with the second one as active (center)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const next = () => {
    setIndex((prev) => (prev + 1) % caseStories.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + caseStories.length) % caseStories.length)
  }

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      next()
    }
    if (isRightSwipe) {
      prev()
    }
  }

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge>CASE STORIES</Badge>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mt-4">
            <span className="text-secondary">Real Driver</span>{' '}
            <span className="text-primary">Success Stories</span>
          </h3>
        </div>

        <div className="relative flex items-center justify-center gap-4 lg:gap-8">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 lg:left-10 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-primary hover:text-black transition-all"
            aria-label="Previous case study"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-0 lg:right-10 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-primary hover:text-black transition-all"
            aria-label="Next case study"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile Navigation Buttons */}
          <button
            onClick={prev}
            className="md:hidden absolute left-2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-primary hover:text-black transition-all flex"
            aria-label="Previous case study"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="md:hidden absolute right-2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-primary hover:text-black transition-all flex"
            aria-label="Next case study"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Slider */}
          <div
            className="flex items-center justify-center gap-6 py-10 overflow-visible w-full"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {[-1, 0, 1].map((offset) => {
                const itemIndex = (index + offset + caseStories.length) % caseStories.length
                const story = caseStories[itemIndex]
                const isActive = offset === 0

                return (
                  <motion.div
                    key={`${story.id}-${offset}`}
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

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {story.summary}
                    </p>

                    <div className="mb-4">
                      <div className="text-lg font-black text-primary mb-1">
                        {story.revenueIncrease}
                      </div>
                      <div className="text-sm text-gray-500">
                        RPM: {story.rpmBefore} → <span className="font-semibold text-gray-900">{story.rpmAfter}/mile</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <div className="mb-4">
                        <h4 className="font-black text-black mb-1">{story.driverName}</h4>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                          {story.lane}
                        </p>
                        <p className="text-xs text-gray-500">
                          {story.equipmentBadge}
                        </p>
                      </div>
                      <Link href={`/case-studies/${story.slug}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs font-semibold border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          Read Case Study
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {caseStories.map((_, i) => (
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
