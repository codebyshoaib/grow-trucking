import { Badge } from '@/components/ui/badge'
import GridPattern from '@/components/ui/grid-pattern'
import { HexagonBackground } from '@/components/ui/hexagon-background'
import { Check, Clock, Smile, UsersRound } from 'lucide-react'
import React from 'react'

const stats = [
    { id: 1, icon: <UsersRound className="h-6 w-6" />, value: '100+', label: 'Active Clients' },
    { id: 2, icon: <Clock className="h-6 w-6" />, value: '10+', label: 'Years of Experience' },
    { id: 3, icon: <Smile className="h-6 w-6" />, value: '100%', label: 'Satisfied Customers' },
    { id: 4, icon: <Check className="h-6 w-6" />, value: '500+', label: 'Completed Projects' },
]

export default function StatsSection() {
    return (
        <section className="relative overflow-hidden bg-secondary py-16 sm:py-20 mb-8">
            <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
                <GridPattern />
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
                <HexagonBackground />
            </div>

            <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex justify-between gap-6">
                    <div className="text-center">
                        <Badge className="mb-4">By the numbers</Badge>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
                            Trusted results, measurable impact
                        </h2>
                    </div>
                    <div className="hidden sm:block h-px flex-1 bg-white/10" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="
                group relative rounded-2xl p-6 sm:p-7
                border border-white/10 bg-white/[0.04]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]
              "
                        >
                            {/* Top highlight line (subtle, premium) */}
                            <div
                                className="
                  pointer-events-none absolute inset-x-0 top-0 h-px
                  bg-gradient-to-r from-transparent via-white/25 to-transparent
                  opacity-40
                "
                            />

                            <div className="flex items-center gap-4">
                                {/* Icon capsule */}
                                <div
                                    className="
                    relative grid h-12 w-12 place-items-center rounded-xl
                    bg-white/5 ring-1 ring-white/10
                    transition-all duration-300
                    group-hover:bg-white/10 group-hover:ring-primary/30
                  "
                                >
                                    <div className="text-primary">{stat.icon}</div>

                                    {/* Soft corner glow (controlled) */}
                                    <div
                                        className="
                      pointer-events-none absolute -inset-1 rounded-xl
                      bg-gradient-to-br from-primary/20 via-transparent to-transparent
                      opacity-0 blur
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                                    />
                                </div>

                                {/* Value + label */}
                                <div className="min-w-0">
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-3xl sm:text-[34px] font-bold text-white tracking-tight leading-none">
                                            {stat.value}
                                        </p>
                                    </div>
                                    <p className="mt-2 text-sm sm:text-[15px] font-medium text-white/70 leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom micro-detail line */}
                            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
