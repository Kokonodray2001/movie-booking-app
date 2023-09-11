import React from "react";
import Image from "next/image";
export default function MovieCompNav() {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between  bg-primary-blue text-white items-center mb-5 border-b-thin">
      <div className="flex items-center">
        <Image
          src={"/assets/icons/logo.svg"}
          alt=""
          width={100}
          height={100}
        ></Image>
        <span className="font-semibold pt-3  text-2xl pr-20 ">SCREEN-SAGE</span>
      </div>

      <span className="font-thin text-2xl pr-20 md:p-4">
        Safe, secure, reliable ticketing.
        <span className="font-thin text-3xl text-cyan-400">
          {" "}
          Your ticket to live entertainment!
        </span>
      </span>
    </div>
  );
}
