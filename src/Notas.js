import React, { useEffect, useState } from "react";

const Nota = (props) => {
  const { note } = props; //destructuración
  //console.log(note);
  return <li>{note.content}</li>;
};
//Const es un tipo de declaracion de variable
// que nos dice que la variable es la misma
//en todo su ciclo de vida

const Notas = (props) => {
  const { notes } = props;
  const [notas, setNotas] = useState(notes);
  const [nuevaNota, setNuevaNota] = useState(" ");
  const [showImportant, setShowimportant] = useState(false);
  //console.log("Nueva Nota", nuevaNota);
  //console.log("notas", notas);
  //Ecmascript 6
  //Map

  useEffect(() => {
    //console.log("Notas", notas);
  }, [notas]);

  const addNote = (e) => {
    e.preventDefault();
    //preventDefault sirve para
    // prevenir el comportamiento Normal del evento
    //console.log(e);
    const noteObject = {
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notas.length + 1
    };
    setNotas(notas.concat(noteObject));
    setNuevaNota("");
    //console.log("noteObject", noteObject);
  };
  //console.log("Notas", notas);

  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;
    //console.log("Mi nota es: ", e.target.value);
    setNuevaNota(value);
  };

  const notasImp = (notes) => {
    setShowimportant(!showImportant);
    //console.log("Click");
  };
  console.log("showImportant", showImportant);

  const notasAMostrar = showImportant
    ? notas.filter((note) => note.important === true)
    : notas;

  console.log("Notas a Mostrar", notasAMostrar);
  //Diversos eventos
  //onSubmit
  //onClick
  //onChange
  //onMouseEnter
  //onMauseLeave
  return (
    <div>
      <h1>Notas </h1>
      <button onClick={notasImp}>
        Mostrar {showImportant ? "todos" : "importantes"}
      </button>
      <ul>
        {notasAMostrar.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={nuevaNota} onChange={handleNoteChange} />
        <button type="submit"> Guardar nota </button>
      </form>
    </div>
  );
};

export default Notas;
