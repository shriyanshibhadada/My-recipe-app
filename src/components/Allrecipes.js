import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Thisrecipe from "./Thisrecipe";
import ReactDOM from 'react-dom';

function Allrecipes(props) {
  
  function handleClick() {
    ReactDOM.render(
      <Thisrecipe
      title={props.title}
      cuisineType={props.cuisineType}
      image={props.image}
      recipe={props.recipe}
      dishType = {props.dishType}
    />,
      document.getElementById('root')
    );
    ;
  }
  return (
    <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
      <div className="item-wrap fancybox" onClick={handleClick}>
        <div className="work-info">
          <h3>{props.title}</h3>
          <span>{props.cuisineType}</span>
        </div>
        <img className="img-fluid" src={props.image} alt="" />
      </div>
    </div>
  );
}

export default Allrecipes;
