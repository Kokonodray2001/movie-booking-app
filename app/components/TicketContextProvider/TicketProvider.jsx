"use client";
import React from "react";
import { useState } from "react";
import { ticketContext } from "@/app/Context";

export default function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  return (
    <>
      <ticketContext.Provider value={{ tickets, setTickets }}>
        {children}
      </ticketContext.Provider>
    </>
  );
}
