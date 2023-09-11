"use client";
import React from "react";
import { movieContext } from "../Context";
import { useContext, useEffect } from "react";

export default function SearchBarDropDown({ category, setCategory, movieArr }) {
  function handleDropdownChange(event) {
    setCategory(event.target.value);
  }
  const { movies, setMovies } = useContext(movieContext);
  useEffect(() => {
    console.log(category);

    setMovies(movieArr);
    if (category != "All") {
      const filterdMovie = movieArr.filter(
        (movie) => movie.category == category
      );
      setMovies(filterdMovie);
    }
  }, [category]);
  return (
    <div>
      {" "}
      <label className="text-cyan-400 font-semibold text-lg ">Category </label>
      <select
        value={category}
        onChange={handleDropdownChange}
        className="p-2 bg-inherit text-white  border-2"
      >
        <option value="All" className="category-options">
          All
        </option>
        <option value="Drama" className="category-options">
          Drama
        </option>
        <option value="Crime" className="category-options">
          Crime
        </option>
        <option value="Action" className="category-options">
          Action
        </option>
        <option value="Science Fiction" className="category-options">
          Science Fiction
        </option>
        <option value="Thriller" className="category-options">
          Thriller
        </option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}
