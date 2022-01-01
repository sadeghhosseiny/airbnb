import { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

function Map() {
  const state = useSelector(
    (state: RootState) => state?.searchDataReducer?.data,
  );

  const [selectedLoaction, setSelectedLoaction] = useState<any>({});

  // transform the state array to this object -> {latitude: '123', longitude: '345'}
  const coordinates = state?.map((place) => ({
    latitude: place.lat,
    longitude: place.long,
  }));

  // this is the center of all locations
  // this 'center' is one value and it is centeral long lat between all of these places.
  const center: any = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    height: "100vh",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sadi-ssh/ckxuidz3w3c9b14lkuhvd4pp1"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      width="100%"
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      <NavigationControl className="bottom-10 left-2" />
      {state?.map((place, i) => (
        <div key={i}>
          <Marker
            longitude={place.long}
            latitude={place.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLoaction(place)}
              aria-label="push-pin"
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLoaction?.long === place.long ? (
            <Popup
              onClose={() => setSelectedLoaction({})}
              closeOnClick={true}
              longitude={place.long}
              latitude={place.lat}
              className="z-50"
            >
              {place.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
