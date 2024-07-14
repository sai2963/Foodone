"use client";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormsubmit from "@/components/meals/meals-form-submit";
import ShareMeal from "@/lib/actions";
import {useFormState} from 'react-dom'



const MealsShare = () => {
  const [state, formAction] = useFormState(ShareMeal, { message: null });
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
          <form
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            action={formAction}
          >
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
                  required
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
                  required
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
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                ></textarea>
              </div>
              <div className="mb-6">
                <ImagePicker />
              </div>
              {state.message && <p>{state.message}</p>}
              <div className="text-right ">
                <MealsFormsubmit />
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default MealsShare;
