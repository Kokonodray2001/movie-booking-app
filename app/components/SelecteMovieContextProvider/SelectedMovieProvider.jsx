"use client";
import React from "react";
import { useState } from "react";
import { selectedMovieContext } from "@/app/Context";

export default function SelectedMovieProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState({});
  return (
    <>
      <selectedMovieContext.Provider
        value={{ selectedMovie, setSelectedMovie }}
      >
        {children}
      </selectedMovieContext.Provider>
    </>
  );
}
