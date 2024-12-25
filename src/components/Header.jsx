import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
function Header() {
  const books = useSelector((store) => store.book.items);
  const [navToggle, setNavToggle] = useState(false);

  return (
    <nav className="border-b-8 relative border-blue-500 font-cfont py-4 shadow-lg px-3 xs:px-8    flex items-center justify-between">
      <div className="logo flex w-[20rem]  items-center cursor-pointer">
        <h2 className="font-bold text-xl">Online Library</h2>
        <img className="w-8" src="/logo.jpg" alt="Library logo" />
      </div>
      <div
        className="toggleBtn sm:hidden transition-all"
        onClick={() => setNavToggle(!navToggle)}
      >
        {navToggle ? <ImCross /> : <GiHamburgerMenu />}
      </div>
      <ul
        className={`links flex font-bold pb-8 gap-8 transition-all bg-white border-4 border-black border-l-0 sm:border-none sm:bg-transparent sm:items-center  items-start justify-end flex-col absolute top-[70px] h-[12rem] sm:h-auto ${
          navToggle ? "left-0" : "left-[-700px] "
        }  p-5 sm:p-0 w-full sm:static sm:flex-row`}
      >
        <li className="hover:text-orange-500 hover:underline cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-orange-500 hover:underline cursor-pointer">
          <Link to={"/browseBooks"}>Browse Books ({books.length})</Link>
        </li>
        <li className="hover:text-orange-500 hover:underline cursor-pointer">
          <Link to={"/addBook"}>Add Book </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;