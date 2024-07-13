'use client'
import ImagePicker from "@/components/meals/image-picker";
import ShareMeal from "@/lib/actions";

const MealsShare = () => {
  
  return (
    <>
      <div className="m-32 text-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            Share Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f9572a] to-[#ff8a05]">
              favourite meal
            </span>
          </h1>
          <p className="mt-4 text-lg">
            Or any other meal you feel needs sharing!
          </p>
        </header>
        <main>
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg" action={ShareMeal}>
            <div>
              <div className="mb-6 flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1 mb-4 md:mb-0">
                  <label htmlFor="name" className="block mb-2 text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block mb-2 text-lg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-2 text-lg">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="summary" className="block mb-2 text-lg">
                  Short Summary
                </label>
                <input
                  type="text"
                  id="summary"
                  name="summary"
                  placeholder="Short Summary"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="instructions" className="block mb-2 text-lg">
                  Instructions
                </label>
                <textarea
                  id="instructions"
                  name="instructions"
                  rows="10"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                ></textarea>
              </div>
              <div className="mb-6">
                <ImagePicker />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="border-0 px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded cursor-pointer text-lg font-semibold shadow-md hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] focus:outline-none"
                >
                  Share Meal
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default MealsShare;
