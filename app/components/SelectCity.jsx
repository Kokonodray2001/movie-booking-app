import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { theaterContext } from "../Context";

const cities = ["Kolkata", "Mumbai", "Delhi", "Bangalore"];
var count = 0;
var filteredT = [
  { name: "Cineplex Plaza", city: "Kolkata" },
  { name: "Starlight Theater", city: "Kolkata" },
  { name: "Royal Theater", city: "Kolkata" },
];
export default function SelectCity() {
  const customLoader = ({ src }) => {
    return `${src}`;
  };
  const [filteredTheater, setFilteredTheater] = useState([
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Bangalore",
  ]);
  const { theaters, setTheaters } = useContext(theaterContext);
  const [toggle, setToggle] = useState();
  const [location, setLocation] = useState();
  useEffect(() => {
    // filteredT = [
    //   { name: "Cineplex Plaza", city: "Kolkata" },
    //   { name: "Starlight Theater", city: "Kolkata" },
    //   { name: "Royal Theater", city: "Kolkata" },
    // ];
    count = 0;
    setLocation("Cineplex Plaza");
    setToggle("Kolkata");
  }, []);

  useEffect(() => {
    filteredT = theaters.filter((theater) => theater.city == toggle);
    setFilteredTheater(filteredT);

    // setTimeout(() => {
    if (count > 0) {
      setLocation(filteredT[0].name);
    }
    count = 1;

    // }, 1000);
  }, [toggle]);
  const toggleFunc = async (city) => {
    setToggle(city);
  };
  const locationFunc = async (location) => {
    setLocation(location);
  };
  return (
    <div>
      <span className="ml-10 text-3xl font-bold text-gray-500">
        SELECT CITY
      </span>
      <div className=" ml-10 w-8/12  flex flex-col sm:flex-row justify-center">
        {/**cities */}
        {cities.map((city) => (
          <div
            onClick={() => toggleFunc(city)}
            className={
              toggle == city
                ? "m-3 shadow-black shadow-md flex-col border-4 border-sky-blue bg-sky-blue text-white"
                : "m-3 shadow-black shadow-md flex-col hover:border-4 hover:border-sky-blue hover:bg-sky-blue hover:text-white "
            }
          >
            {" "}
            <Image
              src={`/assets/images/${city}.jpeg`}
              alt=""
              width={300}
              height={100}
              loader={customLoader}
              className=" "
            ></Image>
            <span className="ml-2 text-lg font-semibold  hover:text-white">
              {city}
            </span>
          </div>
        ))}
      </div>

      <div className=" ml-9 w-1/2 flex  flex-wrap p-4">
        {filteredTheater.map((theater) => (
          <div
            onClick={() => locationFunc(theater.name)}
            className={
              location == theater.name
                ? "bg-sky-blue p-3 m-1 rounded-md shadow-black shadow-md text-white font-semibold hover:bg-sky-blue"
                : "bg-primary-blue p-3 m-1 rounded-md shadow-black shadow-md text-white font-semibold hover:bg-sky-blue"
            }
          >
            {theater.name}
          </div>
        ))}
      </div>
    </div>
  );
}
