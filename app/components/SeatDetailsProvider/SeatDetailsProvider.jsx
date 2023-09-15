"use client";
import React, { useState } from "react";
import { seatDetailsContext } from "@/app/Context";

export default function SeatDetailsProvider({ children }) {
  const [seatDetails, setSeatDetails] = useState({});
  return (
    <seatDetailsContext.Provider value={{ seatDetails, setSeatDetails }}>
      {children}
    </seatDetailsContext.Provider>
  );
}
