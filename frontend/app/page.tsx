export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  try {
    const res = await fetch(`${baseUrl}/api/v1/dispatch/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Ensure fresh data on each request
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Truck Dispatch - Test API
            </h1>
            <p className="text-gray-600 mb-6">
              Testing connection between Next.js and Django backend
            </p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">
                API Response:
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-auto">
                <pre className="text-sm text-gray-800 font-mono whitespace-pre-wrap">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                ✓ API connection successful!
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Truck Dispatch - Test API
            </h1>
            <p className="text-gray-600 mb-6">
              Testing connection between Next.js and Django backend
            </p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-red-600 mb-3">
                Error:
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium mb-2">
                  {error instanceof Error ? error.message : 'Unknown error occurred'}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Make sure Django server is running on{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                    {baseUrl}
                  </code>
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                💡 Tip: Run <code className="bg-yellow-100 px-2 py-1 rounded text-xs font-mono">python manage.py runserver</code> in the backend directory
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
