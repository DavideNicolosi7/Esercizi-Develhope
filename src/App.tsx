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

/*
Suggerimento generale

Per approfondire la tipizzazione di React con TypeScript: https://react-typescript-cheatsheet.netlify.app/
Riepilogo miglioramenti suggeriti:

Aggiungere sempre la tipizzazione di ritorno alle function component (: JSX.Element)
Posizionare i commenti fuori dagli elementi JSX per migliorare la leggibilità.

L'utilizzo ripetuto di <Hello /> dimostra che il componente viene renderizzato più volte come previsto. La spiegazione fornita nei commenti è appropriata,
ma sarebbe consigliabile posizionare i commenti sopra la riga o 
il blocco di codice a cui si riferiscono piuttosto che all'interno del markup JSX.
In questo modo si migliora la leggibilità e si evita l'inclusione di "{" "}" superflui 
o di commenti allineati a elementi inline
*/
