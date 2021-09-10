import React, { useEffect, useState } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Allrecipes from "./Allrecipes";

function Main(props) {
  const APP_ID = "63e6543a";
  const APP_KEY = "a123fbdad2d545658110e126c1ce8eec";
  const [query, setQuery] = useState("pizza");
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const api = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function fetchRecipe() {
    const response = await fetch(api);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
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
      <body>
        <nav className="navbar navbar-light custom-navbar">
          <div className="container">
            <a className="navbar-brand" href="/">
              MyRecipeApp.
            </a>
          </div>
        </nav>
        <div className="container col-sm-6 col-md-4 col-lg-4">
          <form className="input-group mb-3">
            <input
              placeholder="which recipe do you want"
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
      </body>
    </div>
  );
}

export default Main;
