"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SeatBookingHeader({
  flimName,
  flimDate,
  flimTime,
  flimDay,
  flimLocation,
}) {
  const onClickSlot = (newtimeSlot) => {
    setTimeSlot(newtimeSlot);
  };

  const [timeSlot, setTimeSlot] = useState(flimTime[0]);

  // useEffect(() => {}, [timeSlot]);
  return (
    <div className="seat-booking-header  ">
      <div id="flim-name-bar" className="flex   bg-primary-blue text-white">
        <Image src="/assets/icons/logo.svg" alt="" width={100} height={80} />
        <div
          id="flimdetails"
          className=" flex flex-col w-full items-center  justify-around"
        >
          <div id="fName" className="font-semibold text-3xl">
            {flimName}
          </div>
          <div id="fDeatils" className=" text-1xl">
            {flimDate}&nbsp;,&nbsp;{timeSlot}&nbsp;,&nbsp;{flimLocation}
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
              {flimDay}
            </span>
            <span className="text-xl font-semibold px-2">{flimDate}</span>
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
