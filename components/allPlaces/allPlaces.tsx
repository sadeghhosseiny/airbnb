import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import Place from "../place/place";

function AllPlaces() {
  const state = useSelector(
    (state: RootState) => state?.searchDataReducer?.data,
  );
  return (
    <div className="flex flex-col space-y-5">
      {state?.map((place, i) => (
        <Place place={place} key={i} />
      ))}
    </div>
  );
}

export default AllPlaces;
