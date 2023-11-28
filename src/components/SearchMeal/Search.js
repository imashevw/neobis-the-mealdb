import React from "react";

function Search() {
  return (
    <div className="search">
      <h2 className="subtitle">Find your Meal</h2>
      <form className="searchMeal">
        <input
          className="searchInput"
          type="text"
          placeholder="Find your meal"
        />
        <button className="searchButton">Search</button>
      </form>
    </div>
  );
}

export default Search;
