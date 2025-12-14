import Hello from "./Hello";
import { Message } from "./Message";

export function App() {
  return (
    <div>
      <Hello />
      <Hello />{" "}
      {/*Utilizzando più di una volta il componente Hello all'interno del componente App succede che viene renderizzato più volte il contenuto del componente Hello */}
      <Message />{" "}
      {/*Posso utilizzare il componente Message direttamente all'interno del componente App e utilizzandolo importa automaticamente il suo contenuto */}
    </div>
  );
}
