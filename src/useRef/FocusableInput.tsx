/*
Crea un componente FocusableInput che renderizza un tag input. Non appena il componente viene renderizzato, il tag input dovrebbe essere automaticamente messo a fuoco.
Utilizzando StrictMode, crea un componente con un effetto che stampa un messaggio solo quando il componente è montato per la prima volta. Usa un ref per tenere traccia se il componente è montato o meno.
Modifica il componente Counter in modo che ogni volta che il valore del contatore cambia, il valore di un ref venga aggiornato per contenere la direzione del cambiamento (cioè "up" o "down") rispetto alla prop initialValue. Stampa il valore del ref nella console solo quando è diverso dal valore precedente.
*/

import { useEffect, useRef } from "react";
import MountedComponent from "./MountedComponent";
import Counter from "./Counter";

export default function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input ref={inputRef} name="username" />
      <MountedComponent />
      <Counter initialValue={0} />
    </div>
  );
}
