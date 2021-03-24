import React, { Fragment } from "react";

const Conditional = (props) => {
  //console.log("props", props);
  const { totalMessages } = props;
  return (
    <Fragment>
      <h1>Elemento 1 </h1>
      {totalMessages > 0 && <h2> Tu tienes mensaje</h2>}
      {totalMessages > 0 ? (
        <h2> Tienes mensaje </h2>
      ) : (
        <h2> No tienes mensaje </h2>
      )}
    </Fragment>
  );
};

export default Conditional;
