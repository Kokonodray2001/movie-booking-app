"use client";
import Link from "next/link";
import MoviesComp from "./components/MoviesComp";
export default function Home() {
  return (
    <section className="flex justify-center w-full ">
      {/* <Link href={"/seatBooking"}>
        <button className="bg-black text-white p-1 rounded w-20 ">book</button>
      </Link> */}
      <MoviesComp></MoviesComp>
    </section>
  );
}
