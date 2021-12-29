import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import AllPlaces from "../components/allPlaces/allPlaces";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { wrapper } from "../store";
import { searchDataRequesting } from "../store/actions";
import { format } from "date-fns";

function Search() {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests }: any = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeHolder={`${location} | ${formattedStartDate}-${formattedEndDate} | ${noOfGuests} `}
        searchPage={true}
      />
      <div className="relative mt-[100px]  lg:mt-[40px] h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px]">
        <Image
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2021/01/Option_4_RET_Crop.jpg?w=2048"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="py-16 px-20 flex flex-col space-y-4">
        <p className="p-3 bg-white shadow-lg max-w-lg rounded-lg">
          300+ stays - {range} - for {noOfGuests} guests
        </p>
        <h1 className="text-2xl font-semibold">Stays in {location}</h1>
        <div className="w-full">
          <div className="max-w-5xl space-x-4 space-y-3">
            <div className="inline-block w-auto">
              <div className="pill">Cancellation Flexebility</div>
            </div>
            <div className="inline-block w-auto">
              <div className="pill">Type of Place</div>
            </div>
            <div className="inline-block w-auto">
              <div className="pill">Price</div>
            </div>
            <div className="inline-block w-auto">
              <div className="pill">Rooms and Beds</div>
            </div>
          </div>
        </div>
      </div>
      <AllPlaces />
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
