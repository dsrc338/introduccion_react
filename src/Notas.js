import React from "react";

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
  //Ecmascript 6
  //Map
  return (
    <div>
      <h1>Notas </h1>
      <ul>
        {notes.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default Notas;
