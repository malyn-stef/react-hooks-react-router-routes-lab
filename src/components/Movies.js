import React from "react";
import { movies } from "../data";

function Movies() {

  const showMoviesGen = movies.map((movie) => {

    return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <p>{movie.time} minutes</p>
        <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
      </div>
    )
  })
  return <div>
    <h1>Movies Page</h1>
    {showMoviesGen}
  </div>;
}

export default Movies;
