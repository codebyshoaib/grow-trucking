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
            slug: 'global-b2b-sales-and-business-development',
            title: 'Global B2B Sales and Business Development',
            jobId: 'GT001',
            postedDate: 'today',
            workArrangement: 'On-site',
            location: 'Lahore, Punjab, Pakistan',
            department: 'Cluster Business Head',
            employmentType: 'Full time',
            introduction: 'Grow Trucking is hiring a Global B2B Sales and Business Development professional to join our dynamic team in Lahore!',
            description: 'As a Global B2B Sales and Business Development professional, you\'ll work closely with our leadership team to identify and develop new business opportunities in the trucking and logistics industry. Your expertise in B2B sales will be key as you build relationships with potential clients and expand our market presence. You\'ll also play a vital role within a highly collaborative team, where working closely together is essential to achieving our growth goals and fostering a culture of innovation.',
            duties: [
                'Identify and pursue new B2B sales opportunities in the logistics and trucking sector',
                'Develop and maintain relationships with key clients and stakeholders',
                'Create and present compelling proposals and business cases',
                'Collaborate with internal teams to ensure client satisfaction',
                'Analyze market trends and competitor activities',
                'Meet and exceed sales targets and KPIs',
                'Participate in industry events and networking opportunities',
                'Provide regular sales reports and forecasts to management'
            ],
            qualifications: {
                required: [
                    '5+ years of experience in B2B sales and business development',
                    'Proven track record of meeting or exceeding sales targets',
                    'Strong communication and negotiation skills',
                    'Experience in logistics, trucking, or transportation industry preferred',
                    'Bachelor\'s degree in Business, Marketing, or related field'
                ],
                preferred: [
                    'Experience with CRM systems',
                    'Multilingual capabilities',
                    'Existing network in the logistics industry'
                ]
            },
            whatWeOffer: [
                'A fun, open, and inclusive workplace that encourages innovative thinking',
                'Opportunities for professional growth with access to training platforms',
                'Flexible work arrangements to support a healthy work-life balance',
                'Full-time employment with competitive compensation',
                'Comprehensive benefits: competitive salary and performance-based bonuses, health insurance, professional development opportunities'
            ],
            encouragementText: 'Questioning if you meet the mark? Studies have shown that some individuals may be less likely to apply unless they match the job description exactly. Here at Grow Trucking, we\'re building an inclusive workplace where all employees feel they belong. If this position excites you, we welcome you to apply whether you check all the preferred qualifications or just a few. You may just be our next great fit!',
            applyLink: 'https://forms.google.com/your-form-link' // Replace with actual form link
        },
        {
            id: '2',
            slug: 'senior-software-engineer-ai-ml',
            title: 'Senior Software Engineer - AI/ML',
            jobId: 'GT002',
            postedDate: '2 days ago',
            workArrangement: 'On-site',
            location: 'Lahore, Punjab, Pakistan',
            department: 'Cluster Business Head',
            employmentType: 'Full time',
            introduction: 'Grow Trucking is hiring a Senior Software Engineer specializing in AI/ML to join our technology team in Lahore!',
            description: 'As a Senior Software Engineer - AI/ML, you\'ll work closely with product managers and stakeholders to design and develop complex AI-powered solutions that deliver real value to our customers. Your expertise in machine learning and artificial intelligence will be key as you optimize and refactor code for performance and scalability. You\'ll also play a vital role within a highly collaborative team, where working closely together is essential to getting things done and fostering a culture of innovation.',
            duties: [
                'Design and develop AI/ML models and algorithms for logistics optimization',
                'Implement and maintain machine learning pipelines',
                'Collaborate with cross-functional teams to integrate AI solutions',
                'Optimize models for performance and scalability',
                'Conduct research and stay updated with latest AI/ML trends',
                'Mentor junior engineers and contribute to code reviews',
                'Troubleshoot and resolve production issues',
                'Document technical designs and implementations'
            ],
            qualifications: {
                required: [
                    '7+ years of experience in software development with focus on AI/ML',
                    'Strong experience with Python, TensorFlow, or PyTorch',
                    'Experience with database systems and data pipelines',
                    'Solid understanding of machine learning algorithms and techniques',
                    'Bachelor\'s degree in Computer Science, Engineering, or related field'
                ],
                preferred: [
                    'Experience with cloud platforms (AWS, GCP, Azure)',
                    'Knowledge of logistics and transportation industry',
                    'Experience with MLOps and model deployment',
                    'Advanced degree in AI/ML or related field'
                ]
            },
            whatWeOffer: [
                'A fun, open, and inclusive workplace that encourages innovative thinking',
                'Opportunities for professional growth with access to training platforms',
                'Flexible work arrangements to support a healthy work-life balance',
                'Full-time employment with competitive compensation',
                'Comprehensive benefits: competitive salary and performance-based bonuses, health insurance, professional development opportunities'
            ],
            encouragementText: 'Questioning if you meet the mark? Studies have shown that some individuals may be less likely to apply unless they match the job description exactly. Here at Grow Trucking, we\'re building an inclusive workplace where all employees feel they belong. If this position excites you, we welcome you to apply whether you check all the preferred qualifications or just a few. You may just be our next great fit!',
            applyLink: 'https://forms.google.com/your-form-link' // Replace with actual form link
        },
        {
            id: '3',
            slug: 'career-manager-business-development',
            title: 'Career Manager - Business Development',
            jobId: 'GT003',
            postedDate: '3 days ago',
            workArrangement: 'Remote',
            location: 'Lahore, Punjab, Pakistan',
            department: 'Engineering Department',
            employmentType: 'Full time',
            introduction: 'Grow Trucking is hiring a Career Manager for Business Development to join our team! This role offers the flexibility to work remotely.',
            description: 'As a Career Manager - Business Development, you\'ll be responsible for managing and developing business relationships while also focusing on career development initiatives within the organization. You\'ll work closely with our team to identify growth opportunities and help shape the future of our business development efforts.',
            duties: [
                'Develop and execute business development strategies',
                'Manage key client relationships and partnerships',
                'Identify new market opportunities and growth areas',
                'Lead career development programs and initiatives',
                'Collaborate with internal teams on strategic projects',
                'Analyze business metrics and provide insights',
                'Participate in strategic planning sessions',
                'Mentor and coach team members'
            ],
            qualifications: {
                required: [
                    '5+ years of experience in business development or related field',
                    'Strong leadership and management skills',
                    'Excellent communication and interpersonal abilities',
                    'Experience in strategic planning and execution',
                    'Bachelor\'s degree in Business, Management, or related field'
                ],
                preferred: [
                    'MBA or advanced degree',
                    'Experience in logistics or transportation',
                    'Remote work experience',
                    'Certification in project management'
                ]
            },
            whatWeOffer: [
                'A fun, open, and inclusive workplace that encourages innovative thinking',
                'Opportunities for professional growth with access to training platforms',
                'Flexible work arrangements to support a healthy work-life balance',
                'Full-time employment with competitive compensation',
                'Comprehensive benefits: competitive salary and performance-based bonuses, health insurance, professional development opportunities'
            ],
            encouragementText: 'Questioning if you meet the mark? Studies have shown that some individuals may be less likely to apply unless they match the job description exactly. Here at Grow Trucking, we\'re building an inclusive workplace where all employees feel they belong. If this position excites you, we welcome you to apply whether you check all the preferred qualifications or just a few. You may just be our next great fit!',
            applyLink: 'https://forms.google.com/your-form-link' // Replace with actual form link
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
