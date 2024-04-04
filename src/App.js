// App.js
import React, { useState } from "react";
import MoviesList from "./MoviesList";
import "./App.css";
import GenreFilter from "./GenreFilter";
import data from "./data";

const App = () => {
  const [filteredGenre, setFilteredGenre] = useState(null);

  const handleGenreChange = (genre) => {
    setFilteredGenre(genre);
  };

  const filteredData = filteredGenre
    ? data.filter((movie) => movie.genre === filteredGenre)
    : data;

  return (
    <>
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter onGenreChange={handleGenreChange} />
      <MoviesList data={filteredData} />
    </>
  );
};

export default App;