// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { BeakerIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";

import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

function Header() {
  // const { systemTheme, theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // const renderThemeChange = () => {
  //   if (!mounted) return null;
  //   const currentTheme = theme === "system" ? systemTheme : theme;

  //   if (currentTheme === "dark") {
  //     return (
  //       <SunIcon
  //         className="w-7 h-7"
  //         role="button"
  //         onClick={() => setTheme("light")}
  //       />
  //     );
  //   } else {
  //     return (
  //       <MoonIcon
  //         className="w-7 h-7"
  //         role="button"
  //         onClick={() => setTheme("dark")}
  //       />
  //     );
  //   }
  // };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* {renderThemeChange()} */}
      {/* <h1 className="ml-4 md:ml-0">Innocre</h1> */}
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your Search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 cursor-pointer ">
        <p className="hidden md:inline cursor-pointer">Your Cart</p>
        <ShoppingCartIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
