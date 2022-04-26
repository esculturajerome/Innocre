import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/client";

function Header() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const focusDiv = useRef();

  useEffect(() => {
    if (focusDiv.current) focusDiv.current.focus();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (keyword !== "") {
        handleRedirect(e, `/search/?keyword=${keyword}`);
      }
    }
  };

  const handleSearch = (e) => {
    if (focusDiv.current) focusDiv.current.focus();
    if (keyword !== "") {
      handleRedirect(e, `/search/?keyword=${keyword}`);
    }
  };

  const handleRedirect = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  const handleInput = () => {
    setKeyword(focusDiv.current.value);
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 sm:grid-cols-4 bg-white shadow-md p-3 md:px-10">
      {/* left */}
      <div className=" my-auto">
        <h1
          className="text-xl font-bold text-mainColor font-Nunito  cursor-pointer "
          onClick={(e) => handleRedirect(e, "/")}
        >
          Innocre Store
        </h1>
      </div>

      {/* Middle */}
      <div className="flex sm:col-span-2 items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          ref={focusDiv}
          onKeyPress={handleKeyPress}
          onChange={handleInput}
          type="text"
          value={keyword}
          placeholder="Start your Search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon
          className="hidden lg:inline-flex h-8 bg-mainColor text-white rounded-full p-2 cursor-pointer md:mx-2"
          onClick={(e) => handleSearch(e)}
        />
      </div>

      {/* right */}
      <div className="flex items-center space-x-2 lg:space-x-6 justify-end text-gray-500 cursor-pointer ">
        <div
          className="flex cursor-pointer"
          onClick={(e) => handleRedirect(e, "/cart")}
        >
          {/* <p className="hidden md:inline cursor-pointer">Your Cart</p> */}
          <ShoppingCartIcon className="h-6 " />
        </div>
        <div className="flex items-center space-x-2  p-2 " onClick={signIn}>
          <h2 className="hidden lg:inline">
            {!useSession ? "Hello, Jerome" : "Login"}
          </h2>
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
