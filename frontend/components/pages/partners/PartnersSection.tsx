'use client'

import React from 'react'
import PartnerCard, { Partner } from './PartnerCard'

const partners: Partner[] = [
    {
        name: "C.H. Robinson Worldwide, Inc.",
        tagline: "Premier Freight Brokerage Partner",
        overview: "C.H. Robinson Worldwide is one of the largest and most respected freight brokers in the United States, providing comprehensive logistics solutions through its global network of carriers and shippers. With roots dating back to 1905, C.H. Robinson specializes in freight brokerage, third-party logistics (3PL), transportation management, and supply chain services.",
        coreServices: [
            "Full Truckload (FTL) & Less-Than-Truckload (LTL) Brokerage",
            "Intermodal & Air/Ocean Freight",
            "Supply Chain Consulting & Digital TMS Platforms",
            "Managed Transportation Solutions"
        ],
        whyChoose: "C.H. Robinson's scale, advanced technology, and market reach make it a go-to broker for carriers seeking consistent freight opportunities and shippers needing reliable capacity across the U.S. Its digital freight network connects carriers with high-value loads efficiently.",
        strengths: [
            "One of the largest freight brokers by revenue and network footprint",
            "Deep carrier network spanning multiple modes",
            "Data-driven freight matching and optimization"
        ],
        relationship: "Grow Trucking maintains a strong, collaborative relationship with C.H. Robinson Worldwide, empowering our carriers with access to reliable freight, competitive rates, and priority load opportunities.",
        cta: "Contact us today to start hauling premium C.H. Robinson freight"
    },
    {
        name: "J.B. Hunt Transport Services, Inc.",
        tagline: "Strategic Brokerage Partner",
        overview: "J.B. Hunt Transport Services is a major U.S. transportation and logistics company with a robust freight brokerage division. Founded in 1961, J.B. Hunt provides intermodal, truckload brokerage, dedicated contract services, and advanced digital freight solutions across North America.",
        coreServices: [
            "Intermodal Freight Brokerage",
            "Full Truckload & Dedicated Services",
            "Digital Load Matching & Route Optimization",
            "Final-Mile Logistics"
        ],
        whyChoose: "J.B. Hunt's combination of asset-based services with brokerage flexibility allows carriers to tap into consistent freight lanes and benefit from scalable freight volumes across major markets.",
        relationship: "Grow Trucking works closely with J.B. Hunt Transport Services to secure freight opportunities that align with carrier goals and operational needs.",
        cta: "Reach out now to partner with Grow Trucking and access high-value J.B. Hunt freight"
    },
    {
        name: "Total Quality Logistics (TQL)",
        tagline: "A Top Brokerage Network",
        overview: "Total Quality Logistics (TQL) is a leading freight brokerage and third-party logistics firm based in Ohio. Founded in 1997, TQL has grown into one of the largest private brokers in the U.S., offering comprehensive FTL, LTL, intermodal, and specialized freight services.",
        coreServices: [
            "Full Truckload & LTL Brokerage",
            "Intermodal & Specialized Logistics",
            "Cross-Border (Canada/Mexico) Services",
            "Real-Time Load Matching & Tracking"
        ],
        whyChoose: "TQL's expansive carrier network, technology platforms, and customer-centric approach help carriers find regular loads and improve utilization.",
        relationship: "Grow Trucking has developed a strong working partnership with Total Quality Logistics, offering enhanced freight access and priority load opportunities.",
        cta: "Join Grow Trucking today to accelerate your fleet growth with TQL freight"
    },
    {
        name: "Echo Global Logistics",
        tagline: "Technology-Driven Freight Brokerage",
        overview: "Echo Global Logistics is a leading U.S. freight brokerage that leverages technology to provide optimized load matching, real-time quoting, and shipment tracking. Echo supports truckload, LTL, and multimodal freight solutions.",
        coreServices: [
            "Truckload & LTL Brokerage",
            "Intermodal & Expedited Freight",
            "Real-Time Data & Digital Brokerage Platform"
        ],
        whyChoose: "Echo's tech-centric approach enhances freight visibility, reduces turnaround times, and gives carriers greater control over load selection and planning.",
        relationship: "Grow Trucking collaborates with Echo Global Logistics to bring expanded freight opportunities and more efficient dispatch workflows to carriers.",
        cta: "Contact us to boost your freight volume with Echo-enabled lanes"
    },
    {
        name: "RXO",
        tagline: "Scalable Brokerage Solutions",
        overview: "RXO is a prominent U.S. freight brokerage formed through strategic growth and acquisitions, including Coyote Logistics, giving it strong brokerage and digital capacity services.",
        coreServices: [
            "Full Truckload Brokerage",
            "Managed Transportation",
            "Digital Freight Matching & Analytics"
        ],
        whyChoose: "RXO's strategic use of technology and network scale drives strong carrier engagement and competitive freight opportunities.",
        relationship: "Grow Trucking's carrier network benefits from close collaboration with RXO, connecting fleets with high-volume freight opportunities.",
        cta: "Explore RXO freight options through Grow Trucking today"
    },
    {
        name: "Landstar System",
        tagline: "Independent-Focused Brokerage Alliance",
        overview: "Landstar System operates an agent-based freight brokerage model with a large independent carrier network, offering flexible freight solutions including truckload, LTL, and specialized transportation.",
        coreServices: [
            "Truckload & LTL Brokerage",
            "Expedited & Specialized Freight",
            "Agent-Level Capacity Allocation"
        ],
        whyChoose: "Landstar's focus on independent owner-operators and tailored freight solutions delivers customized options and capacity flexibility.",
        relationship: "Grow Trucking works with Landstar System to match carriers with freight that suits their operational and revenue objectives.",
        cta: "Talk to Grow Trucking to access Landstar freight opportunities"
    },
    {
        name: "Uber Freight",
        tagline: "Digital Brokerage & Instant Load Matching",
        overview: "Uber Freight is a digital-first freight brokerage that connects carriers and shippers through real-time load matching, dynamic pricing, and mobile-based dispatch tools.",
        coreServices: [
            "On-Demand Load Matching",
            "Real-Time Pricing & Booking",
            "Mobile App Integration"
        ],
        whyChoose: "Uber Freight combines cutting-edge technology with carrier convenience, enabling fast and transparent freight booking.",
        relationship: "Grow Trucking leverages its relationship with Uber Freight to provide carriers with efficient and consistent freight flow.",
        cta: "Get started with Grow Trucking and Uber Freight today"
    },
    {
        name: "Mode Global",
        tagline: "Innovative Brokerage Partner",
        overview: "Mode Global is a fast-growing freight brokerage known for multimodal services and digital solutions that help carriers optimize load selection and route efficiency.",
        coreServices: [
            "Truckload & Intermodal Brokerage",
            "Digital Freight Tools & Analytics"
        ],
        relationship: "Grow Trucking partners with Mode Global to secure competitive freight options and streamline dispatch operations.",
        cta: "Contact Grow Trucking to explore Mode Global freight opportunities"
    },
    {
        name: "WWEX Group",
        tagline: "Comprehensive Brokerage & Logistics Services",
        overview: "WWEX Group (WorldWide Express) is a diversified freight brokerage and logistics provider offering truckload, LTL, expedited services, and parcel logistics solutions.",
        coreServices: [
            "LTL & Truckload Brokerage",
            "Expedited Freight",
            "Parcel Distribution Management"
        ],
        relationship: "Grow Trucking collaborates with WWEX Group to bring expanded freight choices to carriers and enhance route profitability.",
        cta: "Connect with Grow Trucking for WWEX freight programs"
    },
    {
        name: "Arrive Logistics",
        tagline: "Dynamic Brokerage Network",
        overview: "Arrive Logistics is a fast-expanding freight brokerage focused on scalable truckload and intermodal freight solutions with advanced shipment technology and strong carrier support.",
        coreServices: [
            "Truckload Brokerage",
            "Intermodal Freight",
            "Advanced TMS & Load Execution Tools"
        ],
        relationship: "Grow Trucking's partnership with Arrive Logistics ensures carriers can access dependable freight and superior operational support.",
        cta: "Partner with Grow Trucking for Arrive freight opportunities"
    }
]

export default function PartnersSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 uppercase leading-tight">
                        Our Strategic Partners
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We've built strong relationships with premier freight brokers across the industry,
                        giving you access to premium freight opportunities and reliable capacity solutions.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                    {partners.map((partner, index) => (
                        <PartnerCard
                            key={partner.name}
                            partner={partner}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
