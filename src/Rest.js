import React, { useState, Fragment, useEffect } from "react";

const Rest = () => {
  const [users, setUsers] = useState([]);

  //Cuando sea la primera vez que mi componente se renderice o que se 'monte'
  //ejecutar una accion
  useEffect(() => {
    console.log("Primera vez renderizado");
    handleLoadUsers();
  }, []);

  const handleLoadUsers = async () => {
    console.log("Cargando Usuarios...");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    console.log("response", response);
  };
  console.log("Users", users);
  return (
    <Fragment>
      <h1> Usuarios</h1>
      {users.length === 0 ? (
        <Fragment>
          <p> Aun no hay usuario</p>
          <button onClick={handleLoadUsers}>Carga mis Usuarios </button>
        </Fragment>
      ) : (
        <p> Hay Usuarios</p>
      )}
    </Fragment>
  );
};

export default Rest;
