import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import ExploreNearby from "../exploreNearby/exploreNearby";
import LiveAnywhere from "../liveAnywhere/liveAnywhere";

function BodyOfContents() {
  const state = useSelector((state: RootState) => ({
    exploreData: state?.exploreDataReducer?.data,
    liveAnywhereData: state?.liveAnywhereReducer?.data,
  }));

  return (
    <div className="relative my-10 p-10 max-w-7xl mx-auto shadow-md rounded-md bg-white">
      <h1 className="text-3xl font-sans mb-5">Explore Nearby</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {state?.exploreData?.map((item, i) => (
          <ExploreNearby key={i} item={item} />
        ))}
      </div>
      <h1 className="text-3xl font-sans mt-9 mb-5">Live Anywhere</h1>
      <div className="flex overflow-x-auto p-3 -ml-3 scrollbar-hide space-x-4">
        <div className="rounded-lg">
          <div className="relative h-80 w-80 cursor-pointer shadow-lg rounded-lg hover:scale-105 transition transform duration-300">
            <Image
              src="https://images.unsplash.com/photo-1559741033-d85618ce7e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&h=1000&q=60"
              width={320}
              height={320}
              layout="fixed"
              className="rounded-lg"
            />
          </div>
          <h2 className="mt-4 text-xl font-extralight">Hotels</h2>
        </div>
        {state?.liveAnywhereData?.map((item, i) => (
          <LiveAnywhere key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default BodyOfContents;
