import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import MealsLoading from "../loading";

async function  MealsFetching (){
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}
const Meals =  () => {
  
  
  return (
    <>
      <div className="mt-36">
        <header className="text-3xl gap-12 ml-[auto] mr-[auto] my-12 w-[90%] max-w-[75rem] text-[#ddd6cb] ">
          <h1 className="font-sans">
            Delicious meals, created{" "}
            <span className="bg-[linear-gradient(90deg,_#f9572a,_#ff8a05)] bg-clip-text">by you</span>
          </h1>
          <p className="m-0">
            Choose your favorite recipe and cook it yourself. It is easy and fun!
          </p>
          <p className="">
            <Link href="/meals/share" className="inline-block mt-4 px-4 py-2 rounded-lg bg-[linear-gradient(90deg,_#f9572a,_#ff9b05)] text-[#ffffff] font-bold no-underline ">
              Share Your Favorite Recipe
            </Link>
          </p>
        </header>
        <main>
          <Suspense fallback={<MealsLoading/>}>
          <MealsFetching />
          </Suspense>
         
        </main>
      </div>
    </>
  );
};

export default Meals;
