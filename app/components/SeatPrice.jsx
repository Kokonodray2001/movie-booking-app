import React from "react";

export default function SeatPrice({ seatType, seatPrice }) {
  return (
    <span className="font-semibold text-gray-400 ">
      {seatType}
      &#8377;
      {seatPrice}
    </span>
  );
}
