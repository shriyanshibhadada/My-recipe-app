import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Navbar from "./Navbar";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function Thisrecipe() {
  let history = useHistory();
  const recipeId = window.location.pathname.split('/')[1];
  const recipe = useSelector(state => state)[recipeId].recipe;
  const goBack = () => {
    history.push("/");
  }
  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="site-section pb-0">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-md-8" data-aos="fade-up">
                <img
                  src={recipe.image}
                  style={{ width: "100%" }}
                  alt="/"
                  className="img-fluid"
                />
              </div>
              <div
                className="col-md-3 ml-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="sticky-content">
                  <h3 className="h3">{recipe.label}</h3>
                  <p className="mb-4">
                    <span className="text-muted">{recipe.cuisineType}</span>
                  </p>

                  <h4 className="h4 mb-3">ingredients</h4>
                  <ul className="list-unstyled list-line mb-5">
                    {recipe.ingredients.map((item, index) => {
                      return <li key ={index} >{item.text}</li>;
                    })}
                  </ul>

                  <p>
                    <button  className="btn btn-outline-secondary" onClick={goBack}>
                      Go back
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Thisrecipe;
