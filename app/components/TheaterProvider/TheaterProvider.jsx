"use client";
import { theaterContext } from "@/app/Context";

import React, { useState } from "react";

export default function TheaterProvider({ children }) {
  const [theaters, setTheaters] = useState([
    { name: "Cineplex Plaza", city: "Kolkata" },
    { name: "Starlight Theater", city: "Kolkata" },
    { name: "Royal Theater", city: "Kolkata" },
  ]);
  return (
    <>
      <theaterContext.Provider value={{ theaters, setTheaters }}>
        {children}
      </theaterContext.Provider>
      ;
    </>
  );
}
