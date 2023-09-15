import React from "react";

export default function PaymentComp({ plat, gold, silver }) {
  return (
    <div
      className="flex flex-col  
     h-fit border-2 shadow-lg shadow-black
    border-black px-8 py-2
  "
    >
      <span className="text-gray-500 text-3xl font-bold">Booking Summary </span>
      <ul className="flex  justify-between py-4 text-gray-500 text-xl font-semibold">
        <li>Seats</li>
        <li>Qty</li>
        <li>Price</li>
      </ul>
      <ul className="w-full flex justify-between p-2 text-md font-normal text-black border-2 shadow-lg mb-5">
        <li>Silver</li>
        <li>{silver}</li>
        <li>&#8377;150.00</li>
      </ul>
      <ul className="w-full flex justify-between p-2 text-md font-normal text-black border-2 shadow-lg mb-5">
        <li>Gold</li>
        <li>{gold}</li>
        <li>&#8377;180.00</li>
      </ul>
      <ul className="w-full flex justify-between p-2 text-md font-normal text-black border-2 shadow-lg mb-5">
        <li>Plat</li>
        <li>{plat}</li>
        <li>&#8377;250.00</li>
      </ul>

      <ul className="w-full flex justify-between p-2 text-2xl font-semibold text-black border-2 shadow-lg mb-5">
        <li>Total</li>
        <li>{gold + plat + silver}</li>
        <li>&#8377;{gold * 180 + plat * 250 + silver * 150}</li>
      </ul>
    </div>
  );
}
