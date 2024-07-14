import ImageSlider from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
        <header className="text-white flex flex-col lg:flex-row items-center justify-center relative p-4">
          {/* Left side image placeholder */}
          <div className="lg:w-1/2 flex justify-center p-4">
            <div className="w-80 h-80 lg:w-96 lg:h-96">
              <ImageSlider />
            </div>
          </div>

          <div className="lg:w-1/2 text-center p-4 lg:py-16">
            <div className="mb-8 mt-6 lg:mt-0">
              <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">
                NextLevel Food for NextLevel Foodies
              </h1>
              <p className="text-lg lg:text-xl text-gray-300">
                Taste & share food from all over the world.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/community"
                className="inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600"
              >
                Join the Community
              </Link>
              <Link
                href="/meals"
                className="inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600"
              >
                Explore Meals
              </Link>
            </div>
          </div>
        </header>
        <main className="container mx-auto py-16 px-4">
          <section className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 shadow-xl rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4">How it works</h2>
            <p className="text-gray-800 mb-4">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p className="text-gray-800">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>

          <section className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 shadow-xl rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4">Why NextLevel Food?</h2>
            <p className="text-gray-800 mb-4">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p className="text-gray-800">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
