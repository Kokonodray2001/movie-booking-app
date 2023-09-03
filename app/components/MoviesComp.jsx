"use client";
import React, { useState, useEffect, useContext } from "react";
import { movieContext } from "../Context";
import axios from "axios";
import Movies from "./movies";
var movieArr = [];

export default function SearchBar() {
  // const [movies, setMovies] = useState([]);
  const { movies, setMovies } = useContext(movieContext);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getMovies")
      .then((response) => {
        movieArr = response.data;
        setMovies(movieArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const SearchMovie = (query) => {
    const searchedMovie = movieArr.filter((movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );
    setMovies(searchedMovie);
  };
  return (
    <div>
      
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => SearchMovie(e.target.value)}
        />
      </form>
      <Movies movies={movies}></Movies>
    </div>
  );
}
