import React from "react";

export default function MovieCompFooter() {
  return (
    <div>
      <div id="footer" className="w-full  flex justify-center bg-primary-blue ">
        <div className=" w-11/12 py-10 border-t-thin p-4 text-white flex justify-between flex-col md:flex-row ">
          <span>
            Copyright © 2023.All Rights Reserved By{" "}
            {
              <span className="text-cyan-400 hover:cursor-pointer">
                ScreenSage
              </span>
            }
          </span>
          <div className="flex  justify-between flex-wrap w-5/12 font-semibold">
            <span className="hover:cursor-pointer">About</span>
            <span className="hover:cursor-pointer">Terms Of Use</span>
            <span className="hover:cursor-pointer">Privacy Policy</span>
            <span className="hover:cursor-pointer">FAQ</span>
            <span className="hover:cursor-pointer">Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}
