import React from "react";
import PlacesList from "../components/PlacesList";
import NewMap2020 from "../components/NewMap2020";
import { markers } from "../context/mockedData";

export default function Dashboard() {
  return (
    <div className="d-flex" style={{background: 'white'}}>
      <div className = "w-50">
        <PlacesList markers = {markers}/>
      </div>
      <div className = "w-50">
        <NewMap2020 markers = {markers}/>
      </div>
    </div>
  );
}
