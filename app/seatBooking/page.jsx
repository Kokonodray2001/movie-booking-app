"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import RowSeats from "../components/RowSeats";
import SeatPrice from "../components/SeatPrice";
import SeatBookingHeader from "../components/SeatBookingHeader";
import BookSeat from "../components/BookSeat";
import { selectedMovieContext } from "../Context";
import { locationContext } from "../Context";
import { ticketContext } from "../Context";
import axios from "axios";
import { useRouter } from "next/navigation";

const bookingContext = createContext();
export default function page() {
  const { tickets, setTickets } = useContext(ticketContext);
  const { selectedMovie, setSelectedMovie } = useContext(selectedMovieContext);
  const { location, setlocation } = useContext(locationContext);
  const [booking, setBooking] = useState({
    plat: 0,
    gold: 0,
    silver: 0,
    total: 0,
    time: "",
  });

  return (
    <bookingContext.Provider value={{ booking, setBooking }}>
      {" "}
      <div
        id="seat-booking"
        className="flex flex-col items-center justify-center"
      >
        <div id="movie-details" className="w-full ">
          <SeatBookingHeader />
        </div>

        <div
          id="seats"
          className=" w-full md:w-auto mt-10 mx-5 justify-center items-center "
        >
          <div className="flex flex-col justify-center m-2  overflow-x-auto  overflow-hidden">
            <ul id="platinum-seat" className=" w-fit ">
              <SeatPrice seatType="PLATINUM" seatPrice={250} />
              {Array.from({ length: 2 }, (_, index) => (
                <li>
                  <RowSeats seatPrice={250} start={20 * index} />
                </li>
              ))}
            </ul>
            <ul id="gold-seat" className="mt-5 w-fit ">
              <SeatPrice seatType="GOLD" seatPrice={180} />
              {Array.from({ length: 4 }, (_, index) => (
                <li>
                  <RowSeats seatPrice={180} start={40 + 20 * index} />
                </li>
              ))}
            </ul>
            <ul id="silver-seat" className="mt-5 w-fit ">
              <SeatPrice seatType="SILVER" seatPrice={150} />
              {Array.from({ length: 2 }, (_, index) => (
                <li>
                  <RowSeats seatPrice={150} start={120 + 20 * index} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="screen" className="h-fit">
          <Image
            className="drop-shadow-2xl h-24 mt-2"
            src="/assets/images/sc.svg"
            alt=""
            width={500}
            height={50}
          />
        </div>
        <div id="book-seat" className="w-full mt-10 ">
          <BookSeat />
        </div>
      </div>
    </bookingContext.Provider>
  );
}
export { bookingContext };
