import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import ExploreNearby from "../exploreNearby/exploreNearby";

function BodyOfContents() {
  const exploreData = useSelector(
    (state: RootState) => state?.exploreDataReducer?.data,
  );
  return (
    <div className="relative my-10 p-10 max-w-7xl mx-auto shadow-md rounded-md bg-white">
      <h1 className="text-3xl font-extralight mb-3">Explore Nearby</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {exploreData?.map((item, i) => (
          <ExploreNearby key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default BodyOfContents;
