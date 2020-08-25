import React, { useState } from "react";

function ButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="button-container">
      <div>{count > 0 && <p className="text-center">+{count} 🧍</p>}</div>
      <div>
        <button
          className="btn btn-outline-success waves-effect button-counter"
          onClick={() => setCount(count + 1)}
        >
          I am in
        </button>
      </div>
    </div>
  );
}

export default ButtonCounter;
