"use client";
import React from "react";
import { useState } from "react";
import { movieContext } from "@/app/Context";

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <movieContext.Provider value={{ movies, setMovies }}>
        {children}
      </movieContext.Provider>
    </>
  );
}
