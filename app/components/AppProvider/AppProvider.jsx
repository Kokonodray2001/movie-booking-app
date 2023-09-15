import AuthProvider from "../AuthProvider/AuthProvider";
import TicketProvider from "../TicketContextProvider/TicketProvider";
import MovieProvider from "../MovieProvider/MovieProvider";
import SelectedMovieProvider from "../SelecteMovieContextProvider/SelectedMovieProvider";
import TheaterProvider from "../TheaterProvider/TheaterProvider";
import SeatDetailsProvider from "../SeatDetailsProvider/SeatDetailsProvider";
import LocationProvider from "../LocationProvider/LocationProvider";
import PreBookedSeatProvider from "../PreBookedSeatProvider/PreBookedSeatProvider";
import React from "react";

export default function AppProvider({ children }) {
  return (
    <TicketProvider>
      <MovieProvider>
        <SelectedMovieProvider>
          <TheaterProvider>
            <SeatDetailsProvider>
              <LocationProvider>
                <PreBookedSeatProvider>
                  <AuthProvider> {children}</AuthProvider>
                </PreBookedSeatProvider>
              </LocationProvider>
            </SeatDetailsProvider>
          </TheaterProvider>
        </SelectedMovieProvider>
      </MovieProvider>
    </TicketProvider>
  );
}
