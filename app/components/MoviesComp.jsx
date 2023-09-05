"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { movieContext } from "../Context";
import axios from "axios";
import Movies from "./movies";
import BannerSlider from "./BannerSlider";
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
  //https://media.istockphoto.com/id/1203930843/photo/blue-red-light-background.webp?b=1&s=170667a&w=0&k=20&c=GwfVdVlksL1wpcIDCxu4vjzfmHup7Zc2gi9pmwIoZ1w=
  return (
    <div className="w-full flex flex-col items-center justify-cente bg-primary-blue pt-10">
      {/*back-ground-img */}
      {/* <div className="w-full absolute h-full bg-cover mt-96  "></div> */}
      {/*posters */}
      <div id="scrollable-posters " className="w-11/12 flex justify-center ">
        <BannerSlider></BannerSlider>
      </div>

      {/* seacrch - bar */}
      <div
        id="searchBar"
        className="my-10 w-4/6 h-fit py-4  flex flex-col items-center backdrop-blur-md bg-no-repeat bg-cover bg-center   back-ground-img-seacrch-bar"
      >
        <div className="flex flex-col w-full p-8">
          <span className="text-2xl font-semibold text-cyan-400">
            Welcome to ScreenSAGE
          </span>
          <span className="text-4xl font-bold text-white">
            WHAT YOU WANT TO WATCH ?📽
          </span>
        </div>
        <form
          className=" w-11/12 
        flex flex-col justify-center items-center
        p-8  bg-opacity-40 bg-black "
        >
          <input
            className="w-full bg-transparent pb-2 text-white focus:outline-none border-b-2 border-white"
            type="text"
            placeholder="Search for Movies"
            onChange={(e) => SearchMovie(e.target.value)}
          />
        </form>
      </div>
      {/*movies */}
      <Movies movies={movies}></Movies>
    </div>
  );
}
