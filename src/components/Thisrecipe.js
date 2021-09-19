import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Navbar from "./Navbar";
function Thisrecipe(props) {
  const ingredients = props.recipe;
  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="site-section pb-0">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-md-8" data-aos="fade-up">
                <img
                  src={props.image}
                  style={{ width: "100%" }}
                  alt="/"
                  class="img-fluid"
                />
              </div>
              <div
                className="col-md-3 ml-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="sticky-content">
                  <h3 className="h3">{props.title}</h3>
                  <p className="mb-4">
                    <span className="text-muted">{props.cuisineType}</span>
                  </p>

                  <h4 className="h4 mb-3">ingredients</h4>
                  <ul className="list-unstyled list-line mb-5">
                    {ingredients.map((item) => {
                      return <li>{item.text}</li>;
                    })}
                  </ul>

                  <p>
                    <a href="/" className="btn btn-outline-secondary">
                      Reload
                    </a>
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
