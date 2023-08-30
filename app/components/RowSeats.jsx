"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ticketContext } from "../ticketContextProvider";
import { bookingContext } from "../seatBooking/page";
const seatSet = new Set();

export default function RowSeats({ start, seatPrice }) {
  const { tickets, setTickets } = useContext(ticketContext);
  const [toggle, setToggle] = useState(false);
  // const [booking, setBooking] = useState({
  //   plat: 0,
  //   gold: 0,
  //   silver: 0,
  //   total: 0,
  // });
  const { booking, setBooking } = useContext(bookingContext);
  const seatBookings = (seatNo) => {
    var newbooking = booking;
    if (seatNo < 40) {
      if (seatSet.has(seatNo)) {
        newbooking.plat = newbooking.plat + 1;
        newbooking.total += seatPrice;
      } else {
        newbooking.plat = newbooking.plat - 1;
        newbooking.total -= seatPrice;
      }
    } else if (seatNo < 120) {
      if (seatSet.has(seatNo)) {
        newbooking.gold = newbooking.gold + 1;
        newbooking.total += seatPrice;
      } else {
        newbooking.gold = newbooking.gold - 1;
        newbooking.total -= seatPrice;
      }
    } else {
      if (seatSet.has(seatNo)) {
        newbooking.silver = newbooking.silver + 1;
        newbooking.total += seatPrice;
      } else {
        newbooking.silver = newbooking.silver - 1;
        newbooking.total -= seatPrice;
      }
    }
    setBooking(newbooking);
  };
  const onSelectSeat = (seatNo) => {
    setToggle(!toggle);
    var newTickets = [];
    var flag = 1;
    tickets.forEach((ticket) => {
      if (ticket.seatNumber != seatNo) {
        newTickets.push(ticket);
      } else flag = 0;
    });
    if (flag) {
      seatSet.add(seatNo);
      seatBookings(seatNo);
      const newTicket = {
        seatNumber: seatNo,
        seatPrice: seatPrice,
      };
      setTickets([...newTickets, newTicket]);
    } else {
      seatSet.delete(seatNo);
      seatBookings(seatNo);
      setTickets(newTickets);
    }
  };
  useEffect(() => {
    // var newbooking = booking;
    // newbooking.plat = newbooking.plat + 1;
    // setBookings(newbooking);
    // console.log(booking);
    // console.log(tickets);
    // console.log(booking);
  }, [tickets]);
  return (
    <div className="flex justify-center my-1">
      {Array.from({ length: 20 }, (_, index) =>
        index === 4 || index === 16 ? (
          <div
            onClick={() => onSelectSeat(index + start)}
            className={` ml-3 md:ml-8 border-2 border-primary-blue text-sm w-7 h-7 mx-1 text-center text-white rounded-md hover:bg-primary-blue hover:cursor-pointer ${
              toggle ? "" : ""
            } ${
              seatSet.has(index + start) ? "bg-primary-blue text-white" : ""
            }`}
          >
            {index + start}
          </div>
        ) : (
          <div
            onClick={() => onSelectSeat(index + start)}
            className={`border-2 border-primary-blue  text-sm w-7 h-7 mx-1 text-center text-white rounded-md hover:bg-primary-blue hover:cursor-pointer ${
              toggle ? "" : ""
            } ${
              seatSet.has(index + start) ? "bg-primary-blue text-white" : ""
            }`}
          >
            {index + start}
          </div>
        )
      )}
    </div>
  );
}
