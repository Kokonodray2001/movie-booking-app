import AuthProvider from "../AuthProvider/AuthProvider";
import TicketProvider from "../TicketContextProvider/TicketProvider";
import MovieProvider from "../MovieProvider/MovieProvider";
import SelectedMovieProvider from "../SelecteMovieContextProvider/SelectedMovieProvider";
import TheaterProvider from "../TheaterProvider/TheaterProvider";
import React from "react";

export default function AppProvider({ children }) {
  return (
    <TicketProvider>
      <MovieProvider>
        <SelectedMovieProvider>
          <TheaterProvider>
            <AuthProvider> {children}</AuthProvider>
          </TheaterProvider>
        </SelectedMovieProvider>
      </MovieProvider>
    </TicketProvider>
  );
}
