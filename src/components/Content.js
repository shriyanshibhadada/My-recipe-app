import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Allrecipes from "./Allrecipes";

function Content(props) {
  return (
    <div>
      <main id="main">
        <section className="section site-portfolio">
          <div className="container">
            <div
              id="portfolio-grid"
              className="row no-gutter"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {props.recipe.map((item, index) => {
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

export default Content;
