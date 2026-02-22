import { redirect } from 'next/navigation'
import { StateRegistry } from '@/domain/state/state.config'

/**
 * Areas We Serve Route Handler
 * Maps navigation URLs like /areas-we-serve/northeast/connecticut to /states/connecticut
 * 
 * This handles the multi-level navigation structure while maintaining
 * the actual route structure at /states/[stateSlug]
 */
export default async function AreasWeServeRoute({ 
    params 
}: { 
    params: Promise<{ path: string[] }> 
}) {
    const { path } = await params
    
    // Path will be like ['northeast', 'connecticut'] or just ['connecticut']
    // The last segment should be the state name
    if (!path || path.length === 0) {
        // Redirect to states listing if no path
        redirect('/states')
    }

    // Get the state name from the last segment
    const stateName = path[path.length - 1]
    
    // Convert state name to slug format (e.g., "connecticut" -> "connecticut", "new-york" -> "new-york")
    // Handle both "connecticut" and "Connecticut" formats
    const stateSlug = stateName.toLowerCase().replace(/\s+/g, '-')
    
    // Check if state exists in registry by slug
    const allStates = StateRegistry.getAll()
    const state = allStates.find(s => 
        s.slug === stateSlug || 
        s.slug.toLowerCase() === stateSlug ||
        s.name.toLowerCase().replace(/\s+/g, '-') === stateSlug ||
        s.displayName.toLowerCase().replace(/\s+/g, '-') === stateSlug
    )
    
    if (state) {
        // Redirect to the actual state page using the correct slug
        redirect(`/states/${state.slug}`)
    }
    
    // If state not found, redirect to states listing
    redirect('/states')
}
