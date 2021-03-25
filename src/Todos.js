import React, { useState, Fragment, useEffect } from "react";

const todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Primera vez renderizado");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Cargando To-Dos...");

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await respuesta.json();
    setTodos(todos);
    console.log("FIN");
  };
  const todosFilter = (item) => {
    return item.completed === true;
  };
  console.log("todosFilter", todosFilter);
  return (
    <Fragment>
      <form>
        <h1>Lista To-Do </h1>
        {todos.length === 0 ? (
          <Fragment>
            <p> No hay to-dos </p>
            {/*<button onClick={handleLoadTodos}> Cargar los To-Dos</button>*/}
          </Fragment>
        ) : (
          <p> Hay to-dos</p>
        )}
        {todos.slice(0, 20).map((item, idx) => {
          const { userId, id, title, completed } = item;
          console.log("ToDo", item);
          return <li>{title}</li>;
        })}
        <button onClick={todosFilter}> To-Dos Complete</button>
      </form>
    </Fragment>
  );
};

export default todos;
