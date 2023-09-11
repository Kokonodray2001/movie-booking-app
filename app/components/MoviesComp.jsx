"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { movieContext } from "../Context";
import { selectedMovieContext } from "../Context";
import axios from "axios";
import SearchBarDropDown from "./SearchBarDropDown";
import Movies from "./movies";
import Link from "next/link";
import MovieCompFooter from "./MovieCompFooter";
import BannerSlider from "./BannerSlider";
import MovieCompNav from "./MovieCompNav";

var movieArr = [];
var moviePosters = [];
export default function SearchBar() {
  const [moviePostersState, setMoviePostersState] = useState({});
  const [category, setCategory] = useState("All");
  const { movies, setMovies } = useContext(movieContext);
  const { selectedMovie, setSelectedMovie } = useContext(selectedMovieContext);
  const customLoader = ({ src }) => {
    return `${src}`;
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getMovies")
      .then((response) => {
        movieArr = response.data;
        setMovies(movieArr);
        movieArr.forEach((movie) => {
          axios
            .get(`http://localhost:8000/api/getPosters/${movie.name}`)
            .then((response) => {
              // const mName = movie.name;
              moviePosters.push(response.data);
              setMoviePostersState((prevMoviePostersState) => {
                const updatedObject = {
                  ...prevMoviePostersState,
                  [movie.name]: response.data,
                };
                return updatedObject;
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // useEffect(() => {
  //   console.log(movieArr);
  // }, [category]);
  const SearchMovie = (query) => {
    const searchedMovie = movieArr.filter(
      (movie) =>
        movie.name.toLowerCase().includes(query.toLowerCase()) &&
        (movie.category == category || category == "All")
    );
    setMovies(searchedMovie);
  };
  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };
  return (
    <div className="w-full flex flex-col items-center justify-cente bg-gray-300">
      <MovieCompNav></MovieCompNav>
      <div id="scrollable-posters " className="w-11/12 flex justify-center ">
        <BannerSlider></BannerSlider>
      </div>

      <div
        id="searchBar"
        className=" w-full  my-10 md:w-4/6 h-fit py-4  flex flex-col items-center backdrop-blur-md bg-no-repeat bg-cover bg-center  back-ground-img-seacrch-bar"
      >
        <div className="flex">
          <div className="flex flex-col w-full p-8">
            <span className="text-2xl font-semibold text-cyan-400">
              Welcome to ScreenSAGE
            </span>
            <span className="text-4xl font-bold text-white">
              WHAT YOU WANT TO WATCH ?📽
            </span>
          </div>
          <SearchBarDropDown
            category={category}
            setCategory={setCategory}
            movieArr={movieArr}
          ></SearchBarDropDown>
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

      <div
        //grid  grid-flow-col overflow-auto justify-between
        className="  gradient-col flex  flex-wrap justify-evenly
                    w-11/12 p-10 m-5  "
      >
        {movies.map((movie, index) => (
          <div className="flex flex-col justify-center items-center rounded-lg group ">
            <div
              className=" flex flex-col  relative justify-end
                            group
                          text-transparent
                          hover:text-white  w-44 hover:p-5 h-64 
                          bg-white mx-10 group group-hover:w-72
                            transition-all duration-300 ease-in-out
                          hover:bg-cyan-600 bg-cover rounded-lg 
                          "
            >
              {" "}
              <Image
                src={`${moviePostersState[movie.name]?.poster1}`}
                alt=" /assets/images/tb1.jpg"
                loader={customLoader}
                layout="fill"
                className="absolute hover:hidden transition-opacity duration-400 ease-out group-hover:opacity-0"
              />
              <Image
                src={`${moviePostersState[movie.name]?.poster2}`}
                alt=" /assets/images/tb1.jpg"
                loader={customLoader}
                layout="fill"
                className="absolute  opacity-0 hover:hidden transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              />
              <div className="mb-10 text-lg font-bold relative">
                {movie.name}
              </div>
              {/* Hidden Link button */}
              <div className="absolute inset-0 flex flex-wrap flex-row-reverse justify-between items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className=" w-fit h-fit p-2 bg-opacity-0 outline rounded text-sm">
                  {movie.rating}
                </div>

                <Link href="/moviePage">
                  {" "}
                  {/*Link href="/seatBooking */}
                  <button
                    onClick={() => selectMovie(movie)}
                    className="flex justify-center bg-opacity-0 font-semibold px-20 py-2 text-white bg-black outline-dashed rounded w-20 hover:bg-opacity-40 hover:outline-double "
                  >
                    BOOK
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="w-44 mb-5 bg-primary-blue relative  
                            p-2 text-white group-hover:opacity-0 
                            transition-opacity duration-300 "
            >
              {movie.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
