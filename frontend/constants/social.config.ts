import { 
    Instagram, 
    Linkedin, 
    Twitter, 
    Facebook, 
    Youtube,
    MessageCircle,
    MessageSquare
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface SocialLink {
    label: string
    href: string
    icon: LucideIcon
    platform: string
}

/**
 * Social Media Configuration
 * Centralized configuration for all social media links
 * Reusable across Footer, Contact Page, Hero, and other components
 */
export const socialLinks: SocialLink[] = [
    {
        label: 'X (Twitter)',
        href: 'https://x.com/GrowTrucking',
        icon: Twitter,
        platform: 'twitter'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/growtrucking/',
        icon: Instagram,
        platform: 'instagram'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/grow-trucking',
        icon: Linkedin,
        platform: 'linkedin'
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/growtruckingllc',
        icon: Facebook,
        platform: 'facebook'
    },
    {
        label: 'Reddit',
        href: 'https://www.reddit.com/user/grow_trucking/',
        icon: MessageCircle, // Using MessageCircle as Reddit icon alternative
        platform: 'reddit'
    },
    {
        label: 'Quora',
        href: 'https://www.quora.com/profile/Grow-Trucking',
        icon: MessageSquare, // MessageSquare icon for Q&A platform
        platform: 'quora'
    }
]

/**
 * Get social links for specific platforms
 * Useful when you only want to display certain platforms
 */
export const getSocialLinksByPlatform = (platforms: string[]): SocialLink[] => {
    return socialLinks.filter(link => platforms.includes(link.platform))
}

/**
 * Get all social media URLs for SEO schema (sameAs array)
 */
export const getSocialMediaUrls = (): string[] => {
    return socialLinks.map(link => link.href)
}
