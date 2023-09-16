"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { checkout } from "../checkout";
import { ticketContext } from "../Context";
import { useEffect } from "react";
import MovieCompNav from "../components/MovieCompNav";
import PaymentComp from "../components/PaymentComp";
var goldval = 0;
var silval = 0;
var platval = 0;
export default function page() {
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [plat, setPlat] = useState(0);
  const session = useSession();
  console.log(session);
  const { tickets, setTickets } = useContext(ticketContext);
  useEffect(() => {
    tickets.forEach((element) => {
      if (element.seatPrice == 180) {
        setGold((preGold) => preGold + 1);
        goldval++;
      } else if (element.seatPrice == 250) {
        setPlat((prePlat) => prePlat + 1);
        platval++;
      } else {
        setSilver((preSilver) => preSilver + 1);
        silval++;
      }
    });
    // Create an object with your desired fields and values

    if (Object.keys(tickets).length != 0) {
      const myObject = {
        goldT: goldval,
        platT: platval,
        silverT: silval,
      };

      // Convert the object to a JSON string
      const objectJSON = JSON.stringify(myObject);

      // Set the JSON string as a cookie
      Cookies.set("myCookieName", objectJSON);
    }

    // Retrieve the JSON string from the cookie
    const newobjectJSON = Cookies.get("myCookieName");

    // Parse the JSON string back into an object
    if (newobjectJSON) {
      const newmyObject = JSON.parse(newobjectJSON);

      // Access the values
      setGold(newmyObject.goldT);
      setSilver(newmyObject.silverT);
      setPlat(newmyObject.platT);
    }
  }, []);

  return (
    <div className="flex flex-col  items-center">
      <MovieCompNav></MovieCompNav>
      <div
        className={`${
          session.status === "unauthenticated"
            ? "blur-sm select-none pointer-events-none"
            : "flex flex-col items-center"
        }`}
      >
        <PaymentComp gold={gold} silver={silver} plat={plat}></PaymentComp>

        <button
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: "price_1NqflOSJL3iqb2tbsfPHh23z",
                  quantity: silver,
                },
                {
                  price: "price_1NqeGkSJL3iqb2tbUjwZniEa",
                  quantity: gold,
                },

                {
                  price: "price_1NqflqSJL3iqb2tbyWgeapgY",
                  quantity: plat,
                },
              ],
            });
          }}
          className="m-4 bg-primary-blue p-2 text-white font-semibold"
        >
          Make Payment
        </button>
        <button
          type="button"
          onClick={() => signOut("google")}
          className="flex   w-8/12 px-4 py-2 border-thin shadow-md shadow-black border-black font-semibold hover:bg-black hover:bg-opacity-5"
        >
          <div>
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              }
              alt="G"
              width={25}
              height={10}
            />
          </div>
          <span> &nbsp;&nbsp;&nbsp;&nbsp;Logout</span>
        </button>
      </div>
      <div
        id="loginPopup"
        className={`bg-black bg-opacity-10 fixed  mt-40 h-fit py-10 rounded-lg border-2 flex flex-col items-center px-10 py-3 ${
          session.status === "unauthenticated" ? "" : "invisible"
        }`}
      >
        <span className=" text-2xl font-semibold py-4">LogIn to Continue</span>
        <button
          onClick={() => signIn("google")}
          className=" hover:bg-black hover:bg-opacity-20 font-semibold w-fit px-20  flex border border-black py-2 justify-between"
        >
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            }
            alt="G"
            width={25}
            height={10}
          />
          &nbsp;&nbsp;&nbsp;&nbsp; Continue with Google
        </button>
        <span className="text-gray-800 text-sm mt-5">
          I agree to the Terms & Conditions & Privacy Policy
        </span>
      </div>
      <div className="h-24"></div>
    </div>
  );
}
