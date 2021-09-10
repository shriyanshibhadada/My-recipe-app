import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Allrecipes from "./components/Allrecipes";

function App(props) {
  const user = JSON.parse(process.env.REACT_APP_USERNAME);
  const APP_ID = user.ID;
  const APP_KEY = user.KEY;
  const [query, setQuery] = useState("pizza");
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const api = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function fetchRecipe() {
    const response = await fetch(api);
    const data = await response.json();
    setRecipe(data.hits);
    // console.log(data.hits);
  }

  useEffect(() => {
    fetchRecipe();
  }, [query]);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function submitQuery(event) {
    setQuery(search);
    event.preventDefault();
    setSearch("");
  }

  return (
    <div>
      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            MyRecipeApp.
          </a>
        </div>
      </nav>
      <div className="container col-sm-6 col-md-4 col-lg-5">
        <form className="input-group mb-3">
          <input
            placeholder="search for your favorite recipe, example try: burger"
            type="text"
            onChange={handleChange}
            value={search}
            className="form-control"
          />
          <button className="btn btn-outline-secondary" onClick={submitQuery}>
            submit
          </button>
        </form>
      </div>

      <main id="main">
        <section className="section site-portfolio">
          <div className="container">
            <div
              id="portfolio-grid"
              className="row no-gutter"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {recipe.map((item, index) => {
                return (
                  <Allrecipes
                    id={index}
                    key={index}
                    title={item.recipe.label}
                    cuisineType={item.recipe.cuisineType}
                    image={item.recipe.image}
                    recipe={item.recipe.ingredients}
                    dishType={item.recipe.dishType}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
