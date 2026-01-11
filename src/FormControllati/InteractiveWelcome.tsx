/*
Crea un componente InteractiveWelcome che renderizza un tag input e il componente Welcome. 
Passa il contenuto corrente del tag input alla prop name del componente Welcome. 
Il tag input dovrebbe essere un componente controllato.
Crea un componente Login contenente tre input: un input per il username, 
un input per la password e una checkbox per remember. Tutti e tre gli input dovrebbero essere componenti controllati.
Aggiungi un pulsante "login" al componente Login. Questo pulsante dovrebbe essere disabilitato finché gli input username e password sono vuoti. 
Quando cliccato, il gestore di eventi allegato al pulsante dovrebbe chiamare una funzione onLogin passata come prop al componente Login, passando lo stato.
Aggiungi un pulsante "reset" al componente Login che cancella il contenuto di tutti e tre gli input quando cliccato.
*/

import { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";

type LoginData = {
  username: string;
  password: string;
  remember: boolean;
};

export default function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleLogin(data: LoginData) {
    setName(data.username);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Inserisci il tuo nome"
        value={name}
        onChange={handleInputChange}
      />
      <Welcome name={name} />
      <Login onLogin={handleLogin} />
    </div>
  );
}
