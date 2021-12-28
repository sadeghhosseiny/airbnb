import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

type propTypes = {
  searchPage: boolean;
  placeHolder: string;
};

function Header({ searchPage, placeHolder }: propTypes) {
  const [showWhiteHeader, setShowWhiteHeader] = useState(false);
  const [inputVal, setInputVal] = useState<string | null>("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState<number>(1);

  const router = useRouter();

  const handleSetInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const cancelBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInputVal("");
  };

  const handleGoToSearchPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push({
      pathname: "/search",
      query: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
        location: inputVal,
      },
    });
  };

  const handleSelectDay = (ranges) => {
    setstartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
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
      className={`fixed w-full top-0 z-50 grid grid-cols-3
       ${
         searchPage && !showWhiteHeader
           ? "bg-white p-8"
           : showWhiteHeader
           ? "bg-white p-5"
           : inputVal
           ? "bg-white p-8"
           : "bg-transparent p-8"
       } 
    transition-all transform duration-500 shadow-md`}
    >
      <div
        onClick={() => router.push("/")}
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
          showWhiteHeader || inputVal || searchPage
            ? "text-gray-700"
            : "text-white"
        } rounded-full py-2 flex items-center px-2 md:shadow-[0_4px_8px_-2px_rgba(-34,-21,-13,1.3)]`}
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
            ? "text-gray-700"
            : "text-gray-300"
        } flex items-center space-x-4 justify-end`}
      >
        <p>Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center p-2 border-2 space-x-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {inputVal && (
        <div className="flex flex-col col-span-3 p-2 mt-2 shadow-lg rounded-lg mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelectDay}
          />
          <div className="flex items-center border-b mx-4 mb-4">
            <h1 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h1>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="outline-none w-12 text-lg ml-2 text-red-400"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.valueAsNumber)}
              min={1}
            />
          </div>
          <div className="flex space-x-3">
            <button className="dateBtn" onClick={cancelBooking}>
              Cancel
            </button>
            <button className="dateBtn" onClick={handleGoToSearchPage}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
