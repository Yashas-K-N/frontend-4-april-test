import { useState } from "react";
import FilterMovies from "./FilterMovies";
import { TopNave } from "./TopNave";
import { movies } from "./data";
import Genrefilter from "/genrefilter";




function App({ movie }) {

  const [GenreSelect, SetGenreSelection] = useState('ALL');

  const haldelGenreSelect = (genre) => {
   SetGenreSelection(genre)
  }


  return (
    <>
      
      <div className="container">
        < TopNave />
        < Genrefilter movie={movies} GenreSelect={haldelGenreSelect} />
        < FilterMovies movie={movies} GenreSelect={GenreSelect} />
      </div>
    </>

  );
}

export default App;