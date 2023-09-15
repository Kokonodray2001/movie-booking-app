"use client";

import React, { Children, useState } from "react";
import { PreBookedSeatContext } from "@/app/Context";
export default function PreBookedSeatProvider({ children }) {
  const [preBookedSeat, setPreBookedSeat] = useState([]);
  return (
    <PreBookedSeatContext.Provider value={{ preBookedSeat, setPreBookedSeat }}>
      {children}
    </PreBookedSeatContext.Provider>
  );
}
