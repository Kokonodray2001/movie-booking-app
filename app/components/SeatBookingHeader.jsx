"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { locationContext, selectedMovieContext } from "../Context";
import { ticketContext } from "../Context";
import { bookingContext } from "../seatBooking/page";
import { PreBookedSeatContext } from "../Context";
import axios from "axios";

const date = new Date();
const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
const dayOfMonth = date.getDate();
const monthName = date.toLocaleDateString("en-US", { month: "long" });

export default function SeatBookingHeader({}) {
  const { booking, setBooking } = useContext(bookingContext);
  const { tickets, setTickets } = useContext(ticketContext);
  const { selectedMovie, setSelectedMovie } = useContext(selectedMovieContext);
  const { location, setlocation } = useContext(locationContext);
  const { preBookedSeat, setPreBookedSeat } = useContext(PreBookedSeatContext);
  const flimTime = selectedMovie.timeSlots.split(",");

  const [timeSlot, setTimeSlot] = useState(flimTime[0]);

  const onClickSlot = (newtimeSlot) => {
    setTimeSlot(newtimeSlot);
    const updateTime = booking;
    updateTime.time = newtimeSlot;
    setBooking(updateTime);
  };

  useEffect(() => {
    //const flimTime = selectedMovie.timeSlots.split(", ");
    const updateTime = booking;
    updateTime.time = selectedMovie.timeSlots.substring(0, 7);
    setBooking(updateTime);
    console.log(selectedMovie.timeSlots.substring(0, 7));
    const tempTimeSlot = timeSlot;
    setTimeSlot(tempTimeSlot);
  }, []);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/seats/checkSeats?movie=${selectedMovie.name}&theater=${location}&time=${timeSlot}`
      )
      .then((response) => {
        const data = {
          movie: selectedMovie.name,
          theater: location,
          time: booking.time,
          bookedSeats: [],
        };
        if (!response.data) {
          axios
            .post(`http://localhost:8000/seats/addSeats`, data)
            .then((response) => {
              console.log(response.data);
            })
            .catch((err) => console.log(err));
        } else {
          setPreBookedSeat(response.data.bookedSeats);
          //console.log(preBookedSeat);
        }
      })
      .catch((err) => console.log(err));
    setBooking({
      plat: 0,
      gold: 0,
      silver: 0,
      total: 0,
      time: "",
    });
    setTickets([]);
  }, [timeSlot]);
  // useEffect(() => {
  //   console.log(preBookedSeat);
  // }, [preBookedSeat]);
  return (
    <div className="seat-booking-header  ">
      <div id="flim-name-bar" className="flex  gradient-col text-white">
        <Image src="/assets/icons/logo.svg" alt="" width={100} height={80} />
        <div
          id="flimdetails"
          className=" flex flex-col w-full items-center  justify-around"
        >
          <div id="fName" className="font-semibold text-3xl">
            {selectedMovie.name +
              " • " +
              selectedMovie.type +
              " • " +
              selectedMovie.language}
          </div>
          <div id="fDeatils" className=" text-1xl">
            {selectedMovie.releaseDate.substring(0, 10)}&nbsp;,&nbsp;{timeSlot}
            &nbsp;,&nbsp;
            {location}
          </div>
        </div>
      </div>

      <div
        id="time-slot-bar"
        className="  bg-light-blue w-full  flex flex-col items-center justify-between md:flex-row px-4"
      >
        <div id="time-slot" className="flex flex-col items-center md:flex-row ">
          <div className="flex flex-col pr-8">
            <span className="text-lg font-semibold px-2 text-gray-500">
              {dayOfWeek.substring(0, 3)}
            </span>
            <span className="text-xl font-semibold px-2">
              {dayOfMonth + " " + monthName.substring(0, 3)}
            </span>
          </div>
          {flimTime.map((time) => (
            <div
              id="time-slot"
              onClick={() => onClickSlot(time)}
              className={
                time == timeSlot
                  ? "flex flex-col text-white bg-sky-blue   w-fit p-1 px-6 m-2 rounded-md justify-center font-bold  shadow-md  hover:cursor-pointer"
                  : "flex flex-col text-green-400 bg-white   w-fit p-1 px-6 m-2 rounded-md justify-center font-bold  shadow-md   hover:bg-sky-blue hover:text-white hover:cursor-pointer "
              }
            >
              {time}
              <div
                className={
                  time == timeSlot
                    ? "flex flex-col items-center font-semibold text-white"
                    : "flex flex-col items-center font-normal text-gray-500   hover:text-white"
                }
              >
                2D
              </div>
            </div>
          ))}
        </div>

        <div id="seat-marks " className="flex mr-4 ">
          <div className=" time-slot-marker  border-primary-blue"></div>
          Avaliable
          <div className="time-slot-marker bg-gray-500"></div>
          Booked
          <div className="time-slot-marker  bg-primary-blue"></div>Selected
        </div>
      </div>
    </div>
  );
}
