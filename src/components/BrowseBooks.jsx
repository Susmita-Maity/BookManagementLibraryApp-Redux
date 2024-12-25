import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BrowseBooks = () => {
  const booksData = useSelector((store) => store.book.items);
  const [books, setBooks] = useState(booksData);
  const [filterBasedOn, setFilterToggle] = useState("title");
  const [search, setSearch] = useState("");
 
  const handleChange = (e) => {
    setSearch(e.target.value);

    setBooks(
      booksData.filter((item) =>
        item[filterBasedOn].toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className="py-4 px-3 xs:px-8 ">
      <div className="flex gap-4 items-start ms:items-center flex-col  ms:flex-row">
        <div className="flex gap-2">
          <div className=" flex gap-2 ">
            <input
              id="radioTitle"
              type="radio"
              name="filterBasedOn"
              onChange={() => setFilterToggle("title")}
              value={"title"}
              defaultChecked
            />
            <label htmlFor="radioTitle">Title</label>
          </div>
          <div className=" flex gap-2 ">
            <input
              id="radioAuthor"
              type="radio"
              name="filterBasedOn"
              onChange={() => setFilterToggle("author")}
              value={"author"}
            />
            <label htmlFor="radioAuthor">Author</label>
          </div>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => handleChange(e)}
          className="px-4 py-[4px] my-2 border outline-none border-black shadow-lg"
          placeholder="Search book"
        />
      </div>

      <h2 className="font-bold text-xl py-4">
        {" "}
        Browse <span className="text-blue-500">Books</span>
      </h2>
      <div className="popularBooks flex gap-6 flex-wrap py-2">
        {books.length > 0 ? (
          books?.map((item) => (
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
          ))
        ) : (
          <h2 className="underline font-bold text-black">
            No Books to Display
          </h2>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;