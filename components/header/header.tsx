import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";

function Header() {
  const [showWhiteHeader, setShowWhiteHeader] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.documentElement.scrollTop > 50) {
        setShowWhiteHeader(true);
      } else {
        setShowWhiteHeader(false);
      }
    }
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 grid grid-cols-3 ${
        showWhiteHeader ? "bg-white p-5" : "bg-transparent p-8"
      } 
    transition-all transform duration-500 shadow-md`}
    >
      <div
        className={`${
          showWhiteHeader ? "h-8" : "h-10"
        }  relative flex items-center my-auto cursor-pointer transition-all transform duration-500`}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div
        className={`${
          showWhiteHeader ? "text-gray-700" : "text-zinc-200"
        } rounded-full py-2 flex items-center px-2 md:shadow-[0_4px_8px_-2px_rgba(-34,-21,-13,1.3)]`}
      >
        <input
          className="pl-1 bg-transparent outline-none flex-grow"
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>
      <div
        className={`${
          showWhiteHeader ? "text-gray-700" : "text-zinc-200"
        } flex items-center space-x-4 justify-end text-gray-500`}
      >
        <p>Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center p-2 border-2 space-x-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
