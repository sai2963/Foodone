import Link from "next/link";

export default function NotFound() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Not Found</h1>
          <p className="text-lg mb-6">Unfortunately, we could not find the requested page or resource.</p>
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
            Go back to homepage
          </Link>
        </div>
      </main>
    );
  }
  