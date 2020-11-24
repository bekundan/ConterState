import React, { useState } from "react";

function Todo() {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("you have reached the Limit.");
      setNum(0);
    }
  };
  return (
    <div className="container">
      <div className="main-div">
        <div className="center-div">
          <h1>{num}</h1>
          <div className="btn-div">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
