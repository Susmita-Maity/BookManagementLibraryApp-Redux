import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import Rating from "./Rating";
import { useSelector } from "react-redux";

const BookDetail = () => {
  const booksData = useSelector((store) => store.book.items);
  const params = useParams();
  const currentBook = booksData.filter((item) => item.id == params.id)[0];
 
  return (
    <div className="px-3 xs:px-8  py-4">
      <Link
        to={`/browseBooks`}
        className="border flex gap-2 items-center w-[12rem] my-2 rounded-full shadow-md px-4 py-[3px] cursor-pointer"
      >
        <IoArrowBackSharp />
        Back to browse
      </Link>

      {currentBook ? (
        <>
          <h2 className=" font-bold text-xl py-4">
            {" "}
            Book <span className="text-blue-500">Details</span>
          </h2>

          <div className="bookCard flex-col sm:flex-row sm:w-[38rem] lg:w-[50rem] break-words border-2 border-slate-100 shadow-lg   py-6 px-4 sm:px-10 flex gap-10">
            <img
              src={currentBook?.coverImage}
              className="w-[15rem] h-[20rem] object-cover  "
              alt=""
            />
            <div className="data">
              <h2 className="font-bold pt-2">
                <span className="font-bold ">Title :</span> {currentBook?.title}
              </h2>
              <h3 className="font-semibold  py-2">
                <span className="font-bold">Author :</span>{" "}
                {currentBook?.author}
              </h3>
              <p className="text-justify  my-2 text-wrap">
                <span className="font-bold">Published Date :</span>{" "}
                {currentBook?.publishedDate}
              </p>
              <p className="  py-2 text-wrap break-words w-full">
                <span className="font-bold">Description :</span>{" "}
                {currentBook?.description}
              </p>
              <p className="   ">
                {" "}
                <span className="font-bold">Pages :</span> {currentBook?.pages}
              </p>

              <h3 className="font-semibold py-2">
                <span className="font-bold">Category :</span>{" "}
                {currentBook?.genre}
              </h3>
              <h3 className="font-semibold  ">
                <span className="font-bold">Price : </span>${currentBook?.price}
              </h3>
              <h3>
                <Rating rating={Math.ceil(currentBook?.rating)} />
              </h3>
            </div>
          </div>
        </>
      ) : (
        <h2 className="font-bold text-blue-500">Invalid Book </h2>
      )}
    </div>
  );
};

export default BookDetail;