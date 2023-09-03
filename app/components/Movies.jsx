import React from "react";

export default function Movies({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div>{movie._id}</div>
      ))}
    </div>
  );
}
