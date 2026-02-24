import { redirect } from 'next/navigation'
import { TruckTypeRegistry } from '@/domain/truck-type/truck-type.config'

/**
 * Truck Type Landing Page
 * Redirects to the first available truck type or can be customized
 * to show a listing of all truck types
 */
export default async function TruckTypeLandingPage() {
    const allTruckTypes = TruckTypeRegistry.getAll()

    // Redirect to first truck type page
    // Alternatively, you could create a listing page here
    if (allTruckTypes.length > 0) {
        redirect(`/truck-type/${allTruckTypes[0].slug}-dispatch-service`)
    }

    // Fallback if no truck types exist
    return (
        <main className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">No Truck Types Available</h1>
                <p className="text-gray-600">Please configure truck types in the domain registry.</p>
            </div>
        </main>
    )
}
