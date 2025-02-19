import Image from "next/image";
import MealSearchInput from "./components/MealSearchInput";

export const metadata = {
  title: "All Meals",
  description: "Meals loaded from MealDB API",
};

const MealsPage = async ({ searchParams }) => {
  const query = (await searchParams) || "";

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();

      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  };

  const mealss = (await fetchMeals()) || [];

  return (
    <div>
      <MealSearchInput />
      <p>Total Meals: {mealss?.length}</p>

      <div className="grid grid-cols-4 gap-4">
        {mealss.map((meal) => (
          <div
            className="border-2 p-3 shadow-xl rounded-xl border-purple-600"
            key={meal?.idMeal}
          >
            {meal.strMealThumb ? (
              <Image
                width={641}
                height={641}
                src={meal?.strMealThumb}
                alt={meal?.strMeal || "Meal Image"}
              />
            ) : (
              <p>No Image Available</p>
            )}
            <p>Meal Name: {meal?.strMeal}</p>
            <p>Meal Details: {meal?.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
