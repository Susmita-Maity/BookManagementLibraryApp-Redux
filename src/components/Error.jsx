import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError(); 
  return (
    <div className="text-center px-6 py-4  xs:px-8 ">
      <h2 className="text-6xl py-4">{err.status}</h2>
      <h2 className="text-xl ">
        {err.data ? err.data : "Something went wrong"}
      </h2>
      <Link
        to={`/`}
        className="border text-center mx-auto  justify-center flex gap-2 items-center w-[12rem] my-4 rounded-full shadow-md px-4 py-[3px] cursor-pointer"
      >
        <IoArrowBackSharp />
        Back to Home
      </Link>
    </div>
  );
};

export default Error;