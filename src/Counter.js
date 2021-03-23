import React, { Fragment, useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Hook que guarda un array que tiene una variable, y una funcion

  handleClick = () => {
    setCount(count + 1);
  };

  decontClick = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Diste click " + count + " vez(s)");
  });

  return (
    <Fragment>
      <button className="btn" onClick={() => handleClick()}>
        Click
      </button>
      <button className="btn2" onClick={() => decontClick()}>
        Decontar
      </button>
      <p> Mi contador es {count} </p>
    </Fragment>
  );
};
export default Counter;
