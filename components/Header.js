import { useRouter } from "next/router";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const router = useRouter();

  const handleRedirect = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      <h1
        className="text-xl font-bold text-mainColor font-Nunito my-auto cursor-pointer"
        onClick={(e) => handleRedirect(e, "/")}
      >
        Innocre Store
      </h1>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your Search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden lg:inline-flex h-8 bg-mainColor text-white rounded-full p-2 cursor-pointer md:mx-2" />
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
          <h2 className="hidden lg:inline">Hello, Jerome</h2>
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
