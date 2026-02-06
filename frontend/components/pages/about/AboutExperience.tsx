import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutExperience() {
    return (
        <section className="bg-white py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Left */}
                    <div className="lg:col-span-5">
                        <Badge className="rounded-full px-4 py-1 text-xs tracking-wide">
                            MORE ABOUT GROW TRUCKING
                        </Badge>

                        <h2 className="mt-5 text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
                            5+ Years of Proven Expertise
                        </h2>

                        <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                            We’ve navigated the market since August 2019, delivering consistent,
                            high-value support through every market cycle. Our longevity is your
                            guarantee of stability.
                        </p>

                        {/* Small proof row (no fluff) */}
                        <div className="mt-7 flex flex-wrap gap-3">
                            <div className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
                                Established <span className="font-semibold">Aug 2019</span>
                            </div>
                            <div className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
                                <span className="font-semibold">50+</span> Partnerships
                            </div>
                        </div>

                        <Button className="mt-12" size="lg" icon={<ArrowUpRight className="w-5 h-5" />} iconPosition="left">Book Free Consultation</Button>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-7">
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Card 1 */}
                            <Card className="rounded-2xl border border-gray-200 shadow-sm">
                                <CardContent className="p-6 min-h-[300px] flex flex-col justify-between">
                                    <p className="text-sm font-semibold text-gray-900 underline decoration-primary decoration-2 underline-offset-4">
                                        Our Company History
                                    </p>

                                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                        GROW Trucking was established in August 2019 to solve the core
                                        financial and compliance challenges of owner-operators. We provide
                                        strategic business consultation (not basic load booking) by
                                        converting operational knowledge into scalable profit strategies.
                                    </p>

                                    <div className="mt-5 border-t border-primary/30 pt-4 text-sm text-gray-700">
                                        <span className="font-semibold text-gray-900">Focus:</span>{" "}
                                        Finance + Compliance + Strategy
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Card 2 */}
                            <Card className="rounded-2xl border border-gray-200 shadow-sm ">
                                <CardContent className="p-6 min-h-[300px] flex flex-col justify-between">
                                    <p className="text-sm font-semibold text-gray-900 underline decoration-primary decoration-2 underline-offset-4">
                                        50+ Strategic Partnerships
                                    </p>

                                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                        We’ve partnered with 50+ owner-operators and small fleets, helping
                                        them implement operational strategies that maximize revenue and
                                        enable sustainable growth.
                                    </p>

                                    <div className="mt-5 border-t border-primary/30 pt-4 text-sm text-gray-700">
                                        <span className="font-semibold text-gray-900">Outcome:</span>{" "}
                                        Revenue optimization + predictable operations
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Optional: one horizontal “trust” bar */}
                        <div className="mt-6 rounded-2xl border border-gray-200 bg-secondary/10 px-6 py-4 text-sm text-gray-700">
                            Trusted by owner-operators and small fleets for strategy, compliance,
                            and operational stability.
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}
