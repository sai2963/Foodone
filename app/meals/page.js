import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

const Meals = async () => {
  const meals = await getMeals();
  console.log(meals); // Log meals to check its structure
  return (
    <>
      <div className="mt-36">
        <header className="gap-12 mx-12 my-auto w-11/12 max-w-6xl text-yellow-100 text-2xl">
          <h1 className="font-sans">
            Delicious meals, created{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text">by you</span>
          </h1>
          <p className="m-0">
            Choose your favorite recipe and cook it yourself. It is easy and fun!
          </p>
          <p className="m-0">
            <Link href="/meals/share" className="inline-block mt-4 px-2 py-4 rounded-lg bg-orange-500 text-black hover:bg-orange-400">
              Share Your Favorite Recipe
            </Link>
          </p>
        </header>
        <main>
          <MealsGrid meals={meals} />
        </main>
      </div>
    </>
  );
};

export default Meals;
