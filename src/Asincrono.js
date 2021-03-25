import React, { useState, Fragment } from "react";

const uno = () => {
  setTimeout(() => {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
};

const dos = () => {
  setTimeout(() => {
    console.log("dos");
  }, 1000);
};

const handleClick = () => {
  console.log("Inicio");
  uno();
  console.log("Fin");
};

const Asincrono = () => {
  return <button onClick={handleClick}>Click</button>;
};

export default Asincrono;
