import React from "react";
import { Link } from "react-router-dom";
import ButtonCounter from "../components/ButtonCounter";
import StarRating from "../components/StarRating";
import ButtonDone from "../components/ButtonDone";

export default function Card({ image, name, date_created }) {
  return (
    <>
      <div className="m-2 border-bottom">
        <div className="d-flex space-between">
          <div className="m-2 w-50">{name}</div>
          <div className="m-2 w-50 text-right">{date_created}</div>
        </div>
        <div className="d-flex align-items-center">
          <div className="img-container w-80">
            <img src={image} alt={name} />
          </div>
          <div className="d-flex flex-column center">
            {/* <div className="left-50 center"> */}
            <div>
              <ButtonCounter />
            </div>
            <div className="center mt-3">
              <ButtonDone />
            </div>
          </div>
        </div>
        <div className="no-outline">
          <StarRating />
        </div>
      </div>
    </>
  );
}
