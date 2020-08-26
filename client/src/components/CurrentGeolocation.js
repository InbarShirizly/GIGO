import React from 'react';
import Geocode from "react-geocode";

const CurrentGeolocation = () => {
    return (
        <div>
            Hello
        </div>
    )
}

export default CurrentGeolocation;



Geocode.setApiKey("AIzaSyBcLA8JiIbmGBihyac92hMgOYjurCb6bDg");
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


