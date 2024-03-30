import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import { LoaderCircle } from "lucide-react";

function Recipe({ foods, setfoods, rec, setRec }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchfoods = async () => {
      try {
        setLoading(true);
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${rec}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setfoods(data.meals); // Update state with foods array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchfoods();
  }, [rec]);

  return (
    <div className="p-10 md:p-16">
      <div className="flex justify-center">
        <input
          type="text"
          name="search"
          value={rec}
          onChange={(e) => setRec(e.target.value)}
          className="md:w-1/2 px-4 py-3 rounded placeholder:text-neutral-50 text-xl focus:ring ring-stone-900 bg-stone-500 outline-none text-neutral-100"
          placeholder="Search Recipes..."
          id="search"
        />
        <button className="bg-primary text-white rounded-e -ml-1 px-3">
          Search
        </button>
      </div>
      <div className="mt-5 flex flex-wrap justify-center">
        {foods &&
          foods.map((food, i) => {
            return (
              <Card
                key={i}
                id={i}
                name={food.strMeal}
                cat={food.strArea}
                image={food.strMealThumb}
                cnt={food.strCategory}
              />
            );
          })}
        {loading && (
          <LoaderCircle className="animate-spin" width={75} height={75} />
        )}
      </div>
    </div>
  );
}

export default Recipe;
