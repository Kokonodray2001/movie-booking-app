// export default function Loading() {
//   return <p className="w-full h-96 ">Loading...</p>;
// }
// components/Loader.js
"use client";
// components/Loader.js

import React from "react";
import { Spinner } from "react-bootstrap"; // You may need to install react-bootstrap

const Loader = () => {
  return (
    <div className="loader-container">
      <p className="w-full flex justify-center items-center h-96 text-4xl font-semibold">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
