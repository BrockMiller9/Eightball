import React from "react";

const Clicker = () => {
  const fireLasers = (e) => {
    console.log("Pew pew!");
    console.log(e);
  };
  return (
    <>
      <button onMouseOver={fireLasers}>Click me!</button>
      <textarea rows="2" onScroll={fireLasers}>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum
      </textarea>
    </>
  );
};

export default Clicker;
