"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ticketContext } from "../Context";
import { bookingContext } from "../seatBooking/page";
import { selectedMovieContext } from "../Context";
import { locationContext } from "../Context";
import Link from "next/link";
const createCollection = () => {
  // axios.get(
  //   `http://localhost:8000/seats/checkSeats?movie=${selectedMovie.name}&theater=${location}&time=${booking.time}`
  // )
  console.log("hello");
  // console.log(
  //   `http://localhost:8000/seats/checkSeats?movie=${selectedMovie.name}&theater=${location}&time=${booking.time}`
  // );
};
export default function BookSeat() {
  const { tickets } = useContext(ticketContext);
  const [isHidden, setIsHidden] = useState(true);
  const { booking, setBookings } = useContext(bookingContext);

  const { selectedMovie, setSelectedMovie } = useContext(selectedMovieContext);
  const { location, setLocation } = useState(locationContext);

  useEffect(() => {
    if (tickets.length) setIsHidden(false);
    else setIsHidden(true);

    console.log(tickets);
    console.log(booking);
  }, [tickets]);
  return (
    <div
      className={`w-ful p-4 flex justify-around flex-col md:flex-row border-t border-black  ${
        isHidden ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col">
        <span className="font-semibold text-2xl ">&#8377;{booking.total}</span>
        <span className="text-md font-medium text-gray-500">
          Tickets {booking.plat}x250 {booking.gold}x150 {booking.silver}x180
        </span>
      </div>
      <div>
        <Link href={"/payment"}>
          <button
            onClick={() => createCollection}
            className="hover:bg-sky-blue  shadow-black shadow-md text-2xl text-white bg-primary-blue px-20 py-2 rounded-md"
          >
            Book Seats
          </button>
        </Link>
      </div>
    </div>
  );
}
