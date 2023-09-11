import React from "react";

export default function Movies({ movies }) {
  return (
    <div className="grid grid-cols-4 bg-primary-yellow justify-center w-11/12 p-10 m-5">
      {movies.map((movie) => (
        <div className="w-44 p-10 h-60 mb-5 bg-white mx-10"> {movie.name}</div>
      ))}
    </div>
  );
}
