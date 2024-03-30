import React, { useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails({ foods }) {
  const { id } = useParams();
  const [food, setFood] = useState(foods[parseInt(id)]);
  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (food[ingredientKey] && food[measureKey]) {
      ingredients.push(food[ingredientKey]);
      measures.push(food[measureKey]);
    }
  }
  console.log(food);
  return (
    <div className="flex flex-col mt-5 md:mt-0 md:p-20">
      <div className="flex flex-col justify-center md:justify-normal md:flex-row">
        <div className="w-max mx-auto md:mx-0">
          <div className="flex items-center justify-between px-2 mb-3">
            <h1 className="text-4xl font-medium">{food.strMeal}</h1>
            <p>{food.strArea}</p>
          </div>
          <img
            src={food.strMealThumb}
            alt="food-image"
            className="rounded max-w-sm md:max-w-lg"
          />
        </div>
        <table className="border border-neutral-700 ml-4 w-96 mr-auto mt-14">
          <thead className="border border-neutral-700">
            <tr>
              <th>Ingredient</th>
              <th>Measures</th>
            </tr>
          </thead>
          <tbody className="text-start">
            {ingredients.map((ingredient, i) => {
              return (
                <tr key={i} className="border border-neutral-700">
                  <th>{ingredient}</th>
                  <th>{measures[i]}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-14 ml-3 ">
        <h1 className="text-3xl mb-2">Instruction</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: food.strInstructions.replaceAll("\r\n", "<br />"),
          }}
          className="text-justify text-lg"
        ></div>
      </div>
    </div>
  );
}

export default RecipeDetails;
