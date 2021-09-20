import React, { useEffect, useState } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Content from "./Content";
import Search from "./Search";
import { useDispatch } from 'react-redux';
import updaterecipe from '../actions';

function App() {
  const user = JSON.parse(process.env.REACT_APP_USERNAME);
  const APP_ID = user.ID;
  const APP_KEY = user.KEY;
  const dispatch = useDispatch();
  const [query, setQuery] = useState("pizza");
  const [search, setSearch] = useState("");
  const api = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function fetchRecipe() {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data.hits);
    dispatch(updaterecipe(data.hits));
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
      <Content />
    </div>
  );
}

export default App;
