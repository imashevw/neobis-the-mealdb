import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Main.css";

function Main() {
  const [meals, setMeals] = useState([]);
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    axios.get(apiUrl).then((repos) => {
      setMeals(repos.data.meals);
    });
  }, []);
  return (
    <div className="main__block">
      <div className="container">
        {meals.length > 0 ? (
          <div className="main__block">
            <div>
              <p className="subtitle">Meal of the day</p>
              <h2 className="main__title">{meals[0].strMeal}</h2>
              <p className="main__description">
                {meals[0].strCategory} | {meals[0].strArea}
              </p>
            </div>
            <div>
              <img src={meals[0].strMealThumb} alt="meal" />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Main;
