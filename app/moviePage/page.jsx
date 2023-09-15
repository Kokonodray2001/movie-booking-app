"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { theaterContext } from "../Context";
import MovieCompNav from "../components/MovieCompNav";
import MovieCard from "../components/MovieCard";
export default function page() {
  const { theaters, setTheaters } = useContext(theaterContext);
  useEffect(() => {
    axios
      .get("http://localhost:8000/theater/all")
      .then((response) => {
        setTheaters(response.data);
        // console.log(theaters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    // console.log(theaters);
  }, [theaters]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full bg-black flex justify-center">
        <MovieCompNav></MovieCompNav>
      </div>
      <MovieCard></MovieCard>
    </div>
  );
}
