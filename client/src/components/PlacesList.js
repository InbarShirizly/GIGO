import React from 'react';
import Card from "../components/Card";

const PlacesList = ({ markers }) => {
    return (
        <div className = "plases-list">
            {markers.map(marker => {
          return<Card key = {marker.id} {...marker} />
        })}
        </div>
    )
}

export default PlacesList;
