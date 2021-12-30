import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/router";
import logo from "../../airbnb-logo.png";
import ReservePlaceCalender from "../reservePlaceCalender/reservePlaceCalender";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import useDarkMode from "../hook/hook";

type propTypes = {
  searchPage: boolean;
  placeHolder: string;
};

function Header({ searchPage, placeHolder }: propTypes) {
  const [showWhiteHeader, setShowWhiteHeader] = useState(false);
  const [inputVal, setInputVal] = useState<string | null>("");

  const [colorTheme, setTheme]: any = useDarkMode();
  console.log("CT ", colorTheme, "ST ", setTheme);

  const router = useRouter();

  const handleSetInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

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
      className={`fixed w-full top-0 z-50 ${
        inputVal ? "grid" : "sm-max:flex sm-min:grid"
      } sm-max:justify-between grid-cols-3 z-10
       ${
         searchPage && !showWhiteHeader
           ? "bg-white dark:bg-slate-800 dark:text-gray-200 p-8"
           : showWhiteHeader
           ? "bg-white dark:bg-slate-800 dark:text-gray-200 p-5 shadow-lg"
           : inputVal
           ? "bg-white dark:bg-slate-800 dark:text-gray-200 p-8"
           : "bg-transparent p-8"
       } 
    transition-all sm-max:p-4 transform duration-500`}
    >
      {console.log("CT", colorTheme)}
      <div
        onClick={() => router.push("/")}
        className={`${
          showWhiteHeader ? "h-8" : "h-10"
        }  relative flex items-center my-auto sm-max:w-10 sm-max:h-10 cursor-pointer transition-all transform duration-500`}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="sm-max:invisible"
        />
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="sm-min:invisible sm-max:visible"
        />
      </div>
      <div
        className={`${
          showWhiteHeader || inputVal || searchPage
            ? "text-gray-700 dark:text-gray-300"
            : "text-white"
        } col-span-2 md:col-span-1 focus-within:flex-1 transition-all transform duration-300 sm-max:ml-auto rounded-full py-2 flex items-center px-2 shadow-[0_4px_8px_-2px_rgba(-34,-21,-13,1.3)]`}
      >
        <input
          value={inputVal}
          onChange={handleSetInput}
          className="pl-1 bg-transparent outline-none flex-grow"
          type="text"
          placeholder={`${placeHolder || "Start your Search"}`}
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>
      <div
        className={`${
          showWhiteHeader || inputVal || searchPage
            ? "text-gray-700 dark:text-gray-300"
            : "text-gray-300"
        } hidden md:flex items-center space-x-4 justify-end`}
      >
        <p className="cursor-pointer">Become a host</p>
        {colorTheme == "dark" ? (
          <MoonIcon
            onClick={() => setTheme(colorTheme)}
            className="h-6 cursor-pointer"
          />
        ) : (
          <SunIcon
            onClick={() => setTheme(colorTheme)}
            className="h-6 cursor-pointer"
          />
        )}
        <GlobeAltIcon className="h-6 cursor-pointer hidden md:block" />
        <div className="flex items-center p-2 border-2 space-x-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      <ReservePlaceCalender
        colorTheme={colorTheme}
        setInputVal={setInputVal}
        inputVal={inputVal}
      />
    </header>
  );
}

export default Header;
