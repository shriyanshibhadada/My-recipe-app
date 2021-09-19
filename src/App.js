import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Search from "./components/Search";

function App() {
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
      <Navbar />
      <Search
        handleChange={handleChange}
        search={search}
        submitQuery={submitQuery}
      />
      <Content recipe={recipe} />
    </div>
  );
}

export default App;
