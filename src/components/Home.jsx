import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    "Fiction",
    "Science Fiction",
    "Romance",
    "Classic",
    "Adventure",
    "Dystopian Fiction",
    "Historical Fiction",
    "Fantasy",
    "Horror",
    "Young Adult",
    "Philosophical Fiction",
  ];

  const booksData = useSelector((store) => store.book.items);
  const popularBooks = booksData.filter((item) => item.rating >= 4.7);

  return (
    <div className="px-3 xs:px-8 ">
      <h1 className="font-bold text-lg">Welcome User</h1>
      <h2 className="py-4">Book Categories :- </h2>
      <div className="categories xs:flex gap-4  flex-wrap">
        {categories.map((item, index) => (
          <Link
            key={index}
            to={`/books/${item}`}
            className="border rounded-full block my-4 xs:my-0 shadow-md px-4 py-[3px] cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>

      <h2 className="font-bold text-xl py-4">
        {" "}
        Popular <span className="text-blue-500">Books</span>
      </h2>
      <div className="popularBooks flex gap-6 flex-wrap py-2">
        {popularBooks?.map((item) => (
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
              className="py-2 text-center mb-4 border-2 text-blue-500 font-bold border-blue-500 shadow-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              Visit Book
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;