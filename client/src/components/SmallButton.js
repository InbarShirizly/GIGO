import React from "react";

const SmallButton = () => {
  function handleClick() {
    console.log("I need help");
  }
  return (
    <div className="btn btn-primary m-2 small-card-button p-1" onClick={handleClick}>
      I need help
    </div>
  );
};

export default SmallButton;
