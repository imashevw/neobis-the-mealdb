import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
function Ingredient() {
  const { id } = useParams();
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    const apiUrl1 =
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
    axios.get(apiUrl1).then((response) => {
      setIngredient(response.data.meals[0]);
    });
  }, [id]);
  console.log(ingredient);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="ingredient">
          <h2 className="main__title" id={ingredient.idMeal}>
            {ingredient.strMeal}
          </h2>
          <p className="main__description">
            {ingredient.strCategory} | {ingredient.strArea}
          </p>
          <div className="sv-re">
            <div className="ingredients">
              {Object.keys(ingredient)
                .filter(
                  (item) => item.includes("strIngredient") && ingredient[item]
                )
                .map((item, idx) => (
                  <p>
                    - {ingredient[item]}{" "}
                    <b>{ingredient["strMeasure" + (idx + 1)]}</b>
                  </p>
                ))}
            </div>
            <div className="ingredient__img">
              <img src={ingredient.strMealThumb} alt={ingredient.strMeal} />
            </div>
          </div>
        </div>
        <div>
          <h2>Instruction</h2>
          <p>{ingredient.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default Ingredient;
