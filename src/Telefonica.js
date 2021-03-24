import React, { useState, Fragment } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Hoose", number: "3141066664" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(undefined);
  const [ShowPersons, setShowPersons] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const addPhone = (e) => {
    e.preventDefault();
    const phoneObject = {
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(phoneObject));
    setNewName("");
    setNewNumber("");
    console.log("phoneObject", phoneObject);
  };

  const handlePhoneChange = (e) => {
    const { target } = e;
    const { value } = target;
    console.log("El nuevo telefono es ", e.target.value);
    setNewName(value);
  };

  const handleNumberChange = (e) => {
    const { target } = e;
    const { value } = target;
    console.log("El nuevo numero es", e.target.value);
    setNewNumber(value);
  };

  return (
    <Fragment>
      <h2>Guía telefónica</h2>
      <form onSubmit={addPhone}>
        <div>
          Nombre: <input value={newName} onChange={handlePhoneChange} />
        </div>
        <div>
          Numero: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <li>
            {person.name} {person.number}
          </li>
        );
      })}
    </Fragment>
  );
};

export default App;
