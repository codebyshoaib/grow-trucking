/**
 * Job Types
 * Types for job postings and career opportunities
 */

export interface JobOpening {
    id: string
    slug: string
    title: string
    jobId?: string
    postedDate: string
    workArrangement: string
    location: string
    department: string
    employmentType: string
    
    // Detailed information
    description?: string
    introduction?: string
    duties?: string[]
    qualifications?: {
        required?: string[]
        preferred?: string[]
    }
    whatWeOffer?: string[]
    encouragementText?: string
    applyLink?: string
}
