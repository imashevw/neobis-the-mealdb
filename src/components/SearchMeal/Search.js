import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {
  const [meals, setMeals] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const API_URL =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputValue;
    axios.get(API_URL).then((response) => {
      setMeals(response.data.meals);
    });
  };

  return (
    <div className="search">
      <p className="subtitle">Find your Meal</p>
      <form className="search__form sv-re" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Find your meal"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="search__btn" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <div className="container">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="meals__form sv-re">
              <Link to={{ pathname: `/${meal.idMeal}` }}>
                <img
                  className="meals__img"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
              </Link>
              <div>
                <Link to={{ pathname: `/${meal.idMeal}` }}>
                  <p className="meals__name sv-re">{meal.strMeal}</p>
                </Link>
                <p>
                  {meal.strCategory} | {meal.strArea}
                </p>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Search;
