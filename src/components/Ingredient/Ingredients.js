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
  }, []);
  console.log(ingredient);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="ingredient">
          <h2 className="promo__title" id={ingredient.idMeal}>
            {ingredient.strMeal}
          </h2>
          <p className="promo__descr">
            {ingredient.strCategory} | {ingredient.strArea}
          </p>
          <div className="fl">
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
            <div className="recipe__img">
              <img src={ingredient.strMealThumb} alt={ingredient.strMeal} />
            </div>
          </div>
        </div>
        <div>
          <h2>Instruction</h2>
          <p>{ingredient.strInstructions}</p>
          <button className="btnYoutube">
            <a href={ingredient.strYoutube}>Watch on Youtube</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ingredient;
