import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import AllPlaces from "../components/allPlaces/allPlaces";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { wrapper } from "../store";
import { searchDataRequesting } from "../store/actions";
import { format } from "date-fns";
import Map from "../components/map/map";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import MobileNav from "../components/mobileNav/mobileNav";

function Search() {
  const router = useRouter();

  const [hideBtn, setHideBtn] = useState(false);

  const { location, startDate, endDate, noOfGuests }: any = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const handleBackToTop = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  // const onScroll = () => {
  //   if (window.scrollY > 350) {
  //     setHideBtn(true);
  //   } else {
  //     setHideBtn(false);
  //   }
  // };
  // useEffect(() => {
  //   onScroll();
  // }, []);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 250) {
        setHideBtn(true);
      } else setHideBtn(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className="dark:text-gray-200">
      <Header
        placeHolder={`${location} | ${formattedStartDate}-${formattedEndDate} | ${noOfGuests} `}
        searchPage={true}
      />
      <div className="relative overflow-hidden">
        <Map />
        <button
          onClick={handleBackToTop}
          className={`${
            hideBtn ? "translate-y-16" : "translate-y-0"
          } transition transform duration-200 absolute bottom-3 left-1/2 bg-slate-50 text-black p-3 rounded-full`}
        >
          <ChevronDownIcon className="h-6" />
        </button>
      </div>

      <div className="py-16 px-20 flex flex-col space-y-4">
        <p className="p-3 bg-white shadow-lg max-w-lg rounded-lg dark:bg-gray-900">
          300+ stays -<span className="text-red-400"> {range} </span>- for{" "}
          {noOfGuests} guests
        </p>
        <h1 className="text-2xl font-semibold">Stays in {location}</h1>
        <div className="w-full">
          <div className="max-w-5xl space-x-4 space-y-3">
            <div className="inline-block w-auto">
              <div className="pill dark:bg-gray-900">
                Cancellation Flexebility
              </div>
            </div>
            <div className="inline-block w-auto">
              <div className="pill dark:bg-gray-900">Type of Place</div>
            </div>
            <div className="inline-block w-auto">
              <div className="pill dark:bg-gray-900">Price</div>
            </div>
            <div className="inline-block w-auto">
              <div className="pill dark:bg-gray-900">Rooms and Beds</div>
            </div>
          </div>
        </div>
      </div>
      <AllPlaces />
      <MobileNav />
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store): any => async ({ req, res }) => {
    await store?.dispatch(searchDataRequesting(req));
    store?.dispatch(END);
    await store?.sagaTask?.toPromise();
  });

export default Search;
