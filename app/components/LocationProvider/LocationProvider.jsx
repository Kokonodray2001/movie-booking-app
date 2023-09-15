"use client";
import React, { useState } from "react";
import { locationContext } from "@/app/Context";

export default function LocationProvider({ children }) {
  const [location, setLocation] = useState();
  return (
    <locationContext.Provider value={{ location, setLocation }}>
      {children}
    </locationContext.Provider>
  );
}
