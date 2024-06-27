import ImageSlider from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gray-800">
        <header className="text-white relative flex items-center justify-end ">
          {/* Left side image placeholder */}
          <div className=" px-32 mx-10 flex justify-around" >
          <div className="absolute y-10 inset-y-0 left-0 w-96 bg-cover bg-center h-80 m-36 ">
              <ImageSlider />
            </div>

          <div className="container mx-auto text-center py-16 px-4 relative w-96 y-10 m-12">
            
            <div className="mb-8 mt-6">
              <h1 className="text-5xl font-extrabold mb-4">
                NextLevel Food for NextLevel Foodies
              </h1>
              <p className="text-xl text-gray-300">
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
          </div>
          
        </header>
        <main className="container mx-auto py-16 px-4">
          <section className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 shadow-xl rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4">How it works</h2>
            <p className="text-white-800 mb-4">
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
