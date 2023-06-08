import React from "react";

const ButtonGroup = () => {
  const printColor = (color) => {
    console.log(color);
  };

  return (
    <div>
      <button onClick={() => printColor("Red")}>Red</button>
      <button onClick={() => printColor("Green")}>Green</button>
      <button onClick={() => printColor("Blue")}>Blue</button>
    </div>
  );
};

export default ButtonGroup;
