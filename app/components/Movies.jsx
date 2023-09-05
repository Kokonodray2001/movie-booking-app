import React from "react";

export default function Movies({ movies }) {
  return (
    <div className="flex justify-center w-11/12">
      {movies.map((movie) => (
        <div className="w-40 h-40 bg-white mx-10"> {movie.name}</div>
      ))}
    </div>
  );
}
