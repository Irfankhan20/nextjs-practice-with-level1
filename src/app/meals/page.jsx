import MealSearchInput from "./components/MealSearchInput";
const MealsPage = async ({ searchParams }) => {
  const query = (await searchParams) || "";

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();

      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const mealss = (await fetchMeals()) || [];

  return (
    <div>
      <MealSearchInput></MealSearchInput>
      <p>Total Meals: {mealss?.length}</p>

      <div className="grid grid-cols-4 gap-4">
        {mealss.map((meal) => (
          <div
            className="border-2 p-3 shadow-xl rounded-xl border-purple-600"
            key={meal?.idMeal}
          >
            <p>Meal Name: {meal?.strMeal}</p>
            <p>Meal Details: {meal?.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
