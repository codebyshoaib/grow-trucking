'use client'

import { useState, useCallback } from 'react'

/**
 * Custom hook for managing modal state
 * Application layer - handles modal state management logic
 * 
 * @returns Object containing modal state and control functions
 */
export function useModal(initialState: boolean = false) {
    const [isOpen, setIsOpen] = useState(initialState)

    const open = useCallback(() => {
        setIsOpen(true)
    }, [])

    const close = useCallback(() => {
        setIsOpen(false)
    }, [])

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return {
        isOpen,
        open,
        close,
        toggle,
    }
}
