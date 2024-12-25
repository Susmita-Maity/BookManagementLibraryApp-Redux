import React from "react";
import { Link, useParams } from "react-router-dom";
import booksData from "../utils/BooksData";
import { IoArrowBackSharp } from "react-icons/io5";

const BookByCategory = () => {
  const params = useParams();
  const filteredBooks = booksData.filter(
    (item) => item.genre == params.categories
  );
  
  return (
    <div className="px-3 xs:px-8  py-4">
      <Link
        to={`/browseBooks`}
        className="border flex gap-2 items-center w-[12rem] my-2 rounded-full shadow-md px-4 py-[3px] cursor-pointer"
      >
        <IoArrowBackSharp />
        Back to Home
      </Link>
      <h2 className="font-bold">Category :- {params.categories}</h2>

      {filteredBooks.length >= 1 ? (
        <div className="flex gap-6 flex-wrap py-2">
          {filteredBooks.map((item) => (
            <div
              key={item.id}
              className="bookCard w-[16rem] border-2 border-slate-100 shadow-lg p-2 flex flex-col"
            >
              <img
                src={item.coverImage}
                className="w-[15rem] h-[20rem] object-cover mx-auto"
                alt=""
              />
              <h2 className="font-bold pt-2">
                {" "}
                {item.title.length > 24
                  ? `${item.title.slice(0, 24)}...`
                  : item.title}{" "}
              </h2>
              <h3 className="font-semibold  py-2">{item.author}</h3>
              <p className="text-justify   text-wrap">
                {item.description.length > 85
                  ? `${item.description.slice(0, 84)}...`
                  : item.description}
              </p>
              <h3 className="font-semibold py-2">Price : ${item.price}</h3>

              <Link
                to={`/book/${item.id}`}
                className="py-2 mb-4 border-2 text-center text-blue-500 font-bold border-blue-500 shadow-lg hover:bg-blue-500 hover:text-white transition-all"
              >
                Visit Book
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-blue-500 font-bold w-1/4 mx-auto">
          <h3 className="text-3xl font-bold text-center">404</h3>
          <h2 className="text-center text-black">No data to display </h2>
        </div>
      )}
    </div>
  );
};

export default BookByCategory;