import React from 'react';
import Geocode from "react-geocode";

const GetGeolocation = () => {
    return (
        <div>
            
        </div>
    )
}

export default GetGeolocation



Geocode.setApiKey("AIzaSyDsb7F-VyBJn7r4LilYH_lRHBpPfgyUga8");
Geocode.enableDebug();

Geocode.fromLatLng("32.076582", "34.769").then(
  response => {
    const address = response.results[0].formatted_address;
    console.log(address);
  },
  error => {
    console.error(error);
  }
);

import "./styles.css";
