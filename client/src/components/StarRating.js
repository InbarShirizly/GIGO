import ReactStars from "react-rating-stars-component";
import React from "react";
// import { render } from "react-dom";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

export default function StarRating() {
  return (
    <ReactStars
    className = "no-outline"
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
}
