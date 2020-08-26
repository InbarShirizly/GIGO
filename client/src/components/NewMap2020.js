import React, { useState } from "react";
// import { ApiKey } from "../APIKEY";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import { markers } from "../context/mockedData";

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 32.08987,
  lng: 34.880451,
};

const NewMap2020 = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });
  const [selected, setSelected] = useState(null);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div className="position-fixed">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.name}
            position={{
              lat: marker.location.lat,
              lng: marker.location.lng,
            }}
            onClick={() => {
              setSelected(marker);
              console.log(selected);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.location.lat,
              lng: selected.location.lng,
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="info-window">
              <p>{selected.name}</p>
              <div className="d-flex align-items-center">
                <img
                  className="info-window-image"
                  src={selected.image}
                  alt={selected.name}
                />
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default NewMap2020;
