"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { selectedMovieContext } from "../Context";
import SelectCity from "./SelectCity";
import axios from "axios";

var hr = "";
var min = "";
export default function MovieCard() {
  const [posters, setPosters] = useState({});
  const customLoader = ({ src }) => {
    return `${src}`;
  };
  const { selectedMovie, setSelectedMovie } = useContext(selectedMovieContext);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getPosters/${selectedMovie.name}`)
      .then((response) => {
        setPosters(response.data);
        console.log(posters);
      })
      .catch((err) => {
        console.log(err);
      });

    hr = Math.floor(selectedMovie.duration / 60);
    min = selectedMovie.duration % 60;
  }, []);
  return (
    <div className="w-full flex flex-col justify-center mb-10">
      {" "}
      <div className="w-full flex flex-col justify-center mb-10">
        <div className=" w-full h-large absolute z-[-1]  flex">
          <Image
            src={`${posters.poster2}`}
            alt=""
            layout="fill"
            loader={customLoader}
          ></Image>
        </div>
        <div className="w-full h-large flex  bg-gradient-to-r from-black  to-transparent ">
          <div className="w-64 h-full md:ml-20 flex flex-col justify-center rounded-md">
            <Image
              src={`${posters.poster1}`}
              alt=""
              width={1}
              height={1}
              layout="responsive"
              loader={customLoader}
              className="shadow-white shadow-2xl"
            ></Image>
            <span className="bg-inherit text-white flex justify-center text-sm font-thin p-2">
              IN CINEMAS
            </span>
          </div>
          <div className="mt-20 h-full flex flex-col justify-start md:ml-10 text-white">
            <span className="font-bold text-3xl">{selectedMovie.name}</span>
            <div className="mt-5 flex justify-between flex-col">
              <div className="flex  ">
                <Image
                  src={"/assets/icons/imdb.png"}
                  alt=""
                  width={30}
                  height={30}
                ></Image>
                <span className="ml-4  font-semibold text-xl">
                  {selectedMovie.imdb}/10
                </span>
              </div>
              <div className="flex mt-10 font-semibold">
                <span className="bg-gray-300  p-2 text-black mr-4 rounded-md">
                  {selectedMovie.category}
                </span>
                <span className="bg-gray-300  p-2 text-black mr-4 rounded-md">
                  {selectedMovie.language}
                </span>
              </div>
              <span className="mt-10 text-lg font-medium">
                {hr + "h "}
                {min + "min "} • {selectedMovie.category} •{" "}
                {selectedMovie.rating} •{" "}
                {selectedMovie.releaseDate.substring(0, 10)}{" "}
              </span>
              <Link href={"/seatBooking"}>
                <button className="shadow-black shadow-md bg-primary-blue  text-white font-semibold py-2 w-52 rounded  mt-10 hover:bg-sky-blue">
                  BOOK SEATS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <span className="ml-10 text-3xl font-bold">SELECT CITY</span>
      <div className=" ml-10 w-8/12 h-48 flex justify-center">
        <Link
          href={""}
          className="m-3 flex-col hover:border-4 hover:border-sky-blue hover:bg-sky-blue hover:text-white"
        >
          {" "}
          <Image
            src={"/assets/images/Kolkata.jpeg"}
            alt=""
            width={300}
            height={100}
            loader={customLoader}
            className=" "
          ></Image>
          <span className="ml-2 text-lg font-semibold hover:text-white">
            Kolkata
          </span>
        </Link>
        <Link
          href={""}
          className=" hover:text-white m-3 flex-col hover:border-4 hover:border-sky-blue hover:bg-sky-blue"
        >
          {" "}
          <Image
            src={"/assets/images/Mumbai.jpeg"}
            alt=""
            width={300}
            height={150}
            loader={customLoader}
            className=""
          ></Image>
          <span className="ml-2 text-lg font-semibold hover:text-white">
            Mumbai
          </span>
        </Link>
        <Link
          href={""}
          className=" hover:text-white m-3 flex-col hover:border-4 hover:border-sky-blue hover:bg-sky-blue"
        >
          {" "}
          <Image
            src={"/assets/images/Delhi.jpeg"}
            alt=""
            width={300}
            height={150}
            loader={customLoader}
            className=" "
          ></Image>
          <span className="ml-2 text-lg font-semibold hover:text-white">
            Delhi
          </span>
        </Link>
        <Link
          href={""}
          className=" hover:text-white m-3 flex-col hover:border-4 hover:border-sky-blue hover:bg-sky-blue"
        >
          {" "}
          <Image
            src={"/assets/images/Bangalore.jpeg"}
            alt=""
            width={300}
            height={150}
            loader={customLoader}
            className=" "
          ></Image>
          <span className="ml-2 text-lg font-semibold hover:text-white">
            Bangalore
          </span>
        </Link>
      </div> */}
      <SelectCity></SelectCity>
      <div className=" flex flex-col">
        <span className=" text-3xl font-bold ml-10  flex flex-col text-gray-500">
          About the movie
          <span className="text-sm font-normal mt-2">
            {selectedMovie.About}
          </span>
        </span>
      </div>
      ;
    </div>
  );
}
