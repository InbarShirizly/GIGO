import React from "react";
import { Link } from "react-router-dom";
import SmallButton from "../components/SmallButton";

export default function Card({ image, name }) {
  return (
    <div className="d-flex m-2 border-bottom">
      <div className = "card m-2">
        <p className="card-title ml-4 ">{name}</p>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className = "d-flex align-items-center">
        <SmallButton />
        <SmallButton />
        <SmallButton />
      </div>
    </div>
  );
}
