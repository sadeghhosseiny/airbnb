import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, DateRange } from "react-date-range";
import { useRouter } from "next/router";
import { UsersIcon } from "@heroicons/react/solid";
import useDarkMode from "../../hook/useDarkMode";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

function ReservePlaceCalender({ theme, setInputVal, inputVal }) {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState<number>(1);

  const state = useSelector((state: RootState) => ({
    mode: state?.modeReducer?.mode,
  }));

  const router = useRouter();
  useDarkMode();

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

  return (
    inputVal && (
      <div
        className={`${
          theme == "dark" ? "dark-style" : ""
        } flex flex-col col-span-3 p-2 mt-2 shadow-lg rounded-lg mx-auto dark:bg-black dark:text-gray-200`}
      >
        {/* {console.log("Mode ", state.mode)} */}
        {console.log("CTM ", theme)}
        <div className="sm-max:hidden">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelectDay}
          />
        </div>
        <div className="sm-max:block sm-min:hidden">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelectDay}
          />
        </div>
        <div className="flex items-center border-b mx-4 mb-4">
          <h1 className="text-2xl flex-grow font-semibold">Number of Guests</h1>
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
    )
  );
}
export default ReservePlaceCalender;
