import { redirect } from 'next/navigation'
import { StateRegistry } from '@/domain/state/state.config'

/**
 * States Landing Page
 * Redirects to the first available state or can be customized
 * to show a listing of all states
 */
export default async function StatesLandingPage() {
    const allStates = StateRegistry.getAll()

    // Redirect to first state page
    // Alternatively, you could create a listing page here
    if (allStates.length > 0) {
        redirect(`/states/${allStates[0].slug}-truck-dispatch`)
    }

    // Fallback if no states exist
    return (
        <main className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">No States Available</h1>
                <p className="text-gray-600">Please configure states in the domain registry.</p>
            </div>
        </main>
    )
}
