import React from "react";
const Hellow = (props) => {
  console.log("Props", props);
  const { name, age } = props;
  return (
    <div>
      <p>
        {" "}
        Hello {name} Edad {age}
      </p>
    </div>
  );
};

export default Hellow;
