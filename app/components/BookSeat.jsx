"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ticketContext } from "../Context";
import { bookingContext } from "../seatBooking/page";
import Link from "next/link";

export default function BookSeat() {
  const { tickets } = useContext(ticketContext);
  const [isHidden, setIsHidden] = useState(true);
  const { booking, setBookings } = useContext(bookingContext);
  useEffect(() => {
    if (tickets.length) setIsHidden(false);
    else setIsHidden(true);
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
          <button className="hover:bg-sky-blue  shadow-black shadow-md text-2xl text-white bg-primary-blue px-20 py-2 rounded-md">
            Book Seats
          </button>
        </Link>
      </div>
    </div>
  );
}
