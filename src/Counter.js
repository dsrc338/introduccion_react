import React, { Fragment, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  handleClick = () => {
    setCount(count + 1);
  };

  decontClick = () => {
    setCount(count - 1);
  };
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
