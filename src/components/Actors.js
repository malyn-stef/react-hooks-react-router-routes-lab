import React from "react";
import { actors } from "../data";

function Actors() {

  const showActors = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>{actor.movies.map((movie) =>
          <li key={movie}>{movie}</li>
        )}</ul>
      </div>
    )
  })
  return <div>
    <h1>Actors Page</h1>
    {showActors}
  </div>;
}

export default Actors;
