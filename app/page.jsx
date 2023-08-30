import Link from "next/link";
export default function Home() {
  return (
    <section className="flex justify-center w-full">
      <Link href={"/seatBooking"}>
        <button className="bg-black text-white p-1 rounded w-20 ">book</button>
      </Link>
    </section>
  );
}
