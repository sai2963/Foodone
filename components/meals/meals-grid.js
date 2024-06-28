import MealItem from "./meal-item";

const MealsGrid = ({ meals }) => {
  return (
    <>
      <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-[5rem] mx-auto my-8 list-none p-0">
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default MealsGrid;
