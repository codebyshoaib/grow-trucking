import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
    children: React.ReactNode
    className?: string
}

export function Badge({ children, className }: BadgeProps) {
    return (
        <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30",
            className
        )}>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
                {children}
            </span>
        </div>
    )
}
