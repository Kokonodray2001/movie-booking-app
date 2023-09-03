import AuthProvider from "../AuthProvider/AuthProvider";
import TicketProvider from "../TicketContextProvider/TicketProvider";
import MovieProvider from "../MovieProvider/MovieProvider";
import React from "react";

export default function AppProvider({ children }) {
  return (
    <TicketProvider>
      <MovieProvider>
        <AuthProvider> {children}</AuthProvider>
      </MovieProvider>
    </TicketProvider>
  );
}
