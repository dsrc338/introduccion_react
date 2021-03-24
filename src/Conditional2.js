import React, { Fragment } from "react";

const Conditional2 = (props) => {
  console.log("props", props);
  const { totalAutos } = props;
  return (
    <Fragment>
      <h1>Autos</h1>
    </Fragment>
  );
};

export default Conditional2;
