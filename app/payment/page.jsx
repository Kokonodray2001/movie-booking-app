"use client";
import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
export default function page() {
  const session = useSession();
  console.log(session);

  //   useEffect(() => {
  //     if (session.status === "authenticated") {
  //       router.push("/pa");
  //     }
  //   }, [session]);
  return (
    <div className="flex flex-col  items-center">
      <div
        className={`${
          session.status === "unauthenticated"
            ? "blur-sm select-none pointer-events-none"
            : ""
        }`}
      >
        noe make the payment
        <button
          type="button"
          onClick={() => signOut("google")}
          className="bg-blue-500 w-fit px-20 py-2"
        >
          logout
        </button>
      </div>
      <div
        id="loginPopup"
        className={`fixed  mt-40 h-fit py-10 rounded-lg border-2 flex flex-col items-center px-10 py-3 ${
          session.status === "unauthenticated" ? "" : "invisible"
        }`}
      >
        <span className=" text-2xl font-semibold py-4">LogIn to Continue</span>
        <button
          onClick={() => signIn("google")}
          className=" font-semibold w-fit px-20  flex border border-black py-2 justify-between"
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
        <span className="text-gray-400 text-sm mt-5">
          I agree to the Terms & Conditions & Privacy Policy
        </span>
      </div>
    </div>
  );
}
