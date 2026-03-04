/**
 * Job Configuration
 * Centralized configuration for all job openings
 */

import type { JobOpening } from '@/types/job.types'
import { titleToSlug } from '@/lib/utils'

/**
 * Job Registry - Domain Service Implementation
 */
export class JobRegistry {
    private static readonly jobs: JobOpening[] = [
        {
            id: '1',
            slug: 'truck-dispatching-sales-executive-remote',
            title: 'Truck Dispatching Sales Executive',
            jobId: 'GT001',
            postedDate: 'Active',
            workArrangement: 'Remote',
            location: 'Anywhere in the USA',
            department: 'Sales & Dispatch',
            employmentType: 'Full time',
            compensation: 'Base + Commission | Top Performers Earn $4,000–$6,000/mo',
            introduction: 'Join Grow Trucking as a Truck Dispatching Sales Executive and help owner-operators and fleets grow their business. This fully remote position offers competitive base salary plus uncapped commission.',
            roleOverview: [
                'Prospect and onboard new owner-operators and fleet clients for Grow Trucking\'s dispatch services',
                'Present and sell our truck dispatching packages to carriers, owner-operators, and small fleet companies',
                'Build and maintain a pipeline of qualified leads through cold outreach, referrals, and social media',
                'Work closely with the dispatch operations team to ensure smooth client onboarding',
                'Achieve and exceed monthly revenue and client acquisition targets',
                'Maintain accurate CRM records of all sales activity and client communications',
                'Represent Grow Trucking professionally in all client-facing interactions'
            ],
            whatWeLookingFor: [
                '1+ years of sales, dispatch, or logistics experience preferred (motivated beginners considered)',
                'Strong understanding of the U.S. trucking industry, freight brokerage, or dispatch operations',
                'Excellent communication and negotiation skills — confident on the phone and over email',
                'Self-motivated with the ability to manage your own schedule and hit targets independently',
                'Proficient with basic tech tools: email, CRM software, load boards, video calls',
                'Reliable internet connection and a professional remote work setup',
                'Bilingual (English/Spanish) is a strong plus'
            ],
            whatYouEarn: [
                'Competitive base salary: $2,000–$3,500/month depending on experience',
                'Uncapped commission: 5%–10% on every account you bring in',
                'Top performers earn $4,000–$6,000/month in total compensation',
                'Full remote flexibility — work from home, anywhere in the USA',
                'Monthly performance bonuses for hitting and exceeding targets',
                'Access to Grow Trucking\'s full dispatch training library',
                'Advancement opportunities to Senior Sales Executive or Dispatch Team Lead'
            ],
            applyEmail: 'careers@growtrucking.com',
            applySubject: 'Truck Dispatching Sales Executive — Remote'
        },
        {
            id: '2',
            slug: 'truck-dispatching-sales-executive-onsite',
            title: 'Truck Dispatching Sales Executive',
            jobId: 'GT002',
            postedDate: 'Active',
            workArrangement: 'On-Site',
            location: 'USA (Location TBD based on candidate)',
            department: 'Sales & Dispatch',
            employmentType: 'Full time',
            compensation: 'Base + Commission | Top Performers Earn $4,000–$6,000/mo',
            introduction: 'Join Grow Trucking as an On-Site Truck Dispatching Sales Executive. Work in a collaborative office environment with direct mentorship and team support.',
            roleOverview: [
                'Serve as an in-office sales and dispatch representative for Grow Trucking',
                'Prospect, pitch, and close owner-operators and fleet companies on our dispatch services',
                'Manage a portfolio of active carrier clients, ensuring satisfaction and retention',
                'Coordinate directly with the operations and dispatch team in a collaborative office environment',
                'Attend industry events, carrier expos, and local trucking meetups to generate leads',
                'Provide daily activity reports and pipeline updates to the Sales Manager',
                'Onboard new clients and guide them through Grow Trucking\'s service offerings'
            ],
            whatWeLookingFor: [
                '1+ years of sales experience in trucking, logistics, freight brokerage, or related field',
                'Strong in-person presentation and communication skills',
                'Proven track record of meeting or exceeding sales targets',
                'Comfortable working in a fast-paced, KPI-driven office environment',
                'Knowledge of load boards, dispatch software, and carrier operations is a strong advantage',
                'Valid driver\'s license and reliable transportation',
                'Professional appearance and conduct in all client-facing scenarios'
            ],
            whatYouEarn: [
                'Competitive base salary: $2,500–$4,000/month depending on experience',
                'Uncapped commission structure — the more you close, the more you earn',
                'On-site team environment with direct mentorship from senior dispatch professionals',
                'Monthly bonuses, team lunches, and performance incentives',
                'Structured onboarding and ongoing in-house training program',
                'Clear promotion path: Sales Executive → Senior Executive → Dispatch Manager',
                'Travel reimbursement for industry events and client visits'
            ],
            applyEmail: 'careers@growtrucking.com',
            applySubject: 'Truck Dispatching Sales Executive — On-Site'
        }
    ]

    /**
     * Get all jobs
     */
    static getAll(): JobOpening[] {
        return this.jobs
    }

    /**
     * Get job by slug
     */
    static getBySlug(slug: string): JobOpening | null {
        return this.jobs.find(job => job.slug === slug) || null
    }

    /**
     * Get job by ID
     */
    static getById(id: string): JobOpening | null {
        return this.jobs.find(job => job.id === id) || null
    }

    /**
     * Check if job exists
     */
    static exists(slug: string): boolean {
        return this.jobs.some(job => job.slug === slug)
    }
}
