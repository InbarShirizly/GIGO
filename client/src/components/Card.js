import React from "react";
import { Link } from "react-router-dom";
import ButtonCounter from "../components/ButtonCounter";

export default function Card({ image, name, date_created }) {
  return (
    <>
      <div className="m-2 border-bottom">
        <div className="d-flex">
          <div className="m-2">{name}</div>
          <div className="m-2">{date_created}</div>
        </div>
        <div className="d-flex align-items-center">
          <div className="img-container w-80">
            <img src={image} alt={name} />
          </div>
          <div className = "left-50 center">
          <ButtonCounter />
        </div>
        </div>       
      </div>
    </>
  );
}
