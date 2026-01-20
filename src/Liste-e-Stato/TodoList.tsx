/*
Crea un componente TodoList che renderizza un tag ul con un tag li per ogni elemento contenuto nella variabile 
di stato items. La variabile di stato items dovrebbe essere un array di stringhe. 
Il componente TodoList dovrebbe anche contenere un tag input e un button. Quando il button viene cliccato, 
l'event handler dovrebbe aggiungere il valore del tag input all'array items.
Modifica il componente TodoList in modo che l'input venga svuotato ogni volta che un Todo viene aggiunto all'array items.
Modifica il componente TodoList aggiungendo un button "reset" che svuota l'array items quando cliccato.
Modifica il componente TodoList aggiungendo un button "remove" a ogni tag li. Quando cliccato, 
l'event handler dovrebbe rimuovere l'elemento corrispondente dall'array items.
*/

import { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([
    "auto",
    "telefono",
    "chiavi",
    "portafoglio",
  ]);

  const [inputValue, setInputValue] = useState("");

  function handleAddItem() {
    if (inputValue.trim() === "") return; // per evitare campi vuoti

    setItems([...items, inputValue]);
    setInputValue(""); // per svuotare input
  }

  function handleReset() {
    setItems([]); // svuota array
  }

  function handleRemoveItem(indexToRemove: number) {
    return setItems(items.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <label htmlFor="item">Inserici Item</label>
      <input
        id="item"
        name="item"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAddItem}>Conferma</button>
      <button onClick={handleReset} disabled={items.length === 0}>
        Reset
      </button>
    </div>
  );
}
