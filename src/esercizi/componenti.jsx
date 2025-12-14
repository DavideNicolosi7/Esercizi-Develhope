// Crea una variabile chiamata hello e inizializzala con un tag h1 con il messaggio "Hello, World!".
// Scrivi una funzione che riceve un argomento name e restituisce un tag h1 con la variabile name aggiunta alla stringa "Hello, ".
// Cosa succede se la variabile name non viene passata alla funzione?
// Cosa succede se la variabile name contiene un'espressione JSX invece di una stringa?
// Scrivi una funzione che riceve due parametri, a e b, e restituisce la loro somma all'interno di un tag h2

const hello = <h1>Hello, World!</h1>;

function sayHello(name) {
  return <h1>Hello, {name}</h1>;
}

function sum(a, b) {
  return <h2>{a + b}</h2>;
}

export default function Componenti() {
  return (
    <div>
      {hello}

      {sayHello("Davide")}
      {sayHello()}
      {sayHello(<p>Sono una espressione JSX</p>)}

      {sum(3, 4)}
    </div>
  );
}

// Se name non viene passato alla funzione sayHello, React renderizza "Hello, undefined".
// Se viene passato un'espressione JSX, React renderizza correttamente il contenuto all'interno del tag h1.

/*
SUGGERIMENTI 
const hello. JSX.Element = <h1>Hello, World!</h1>;

const sayHello = (name?. React.ReactNode). JSX.Element => {
  return <h1>Hello, {name}</h1>;
};

const sum = (a. number, b. number). JSX.Element => {
  return <h2>{a + b}</h2>;
};

Consulta la documentazione ufficiale TypeScript per ulteriori dettagli sulla tipizzazione di componenti e props. https.//www.typescriptlang.org/docs/handbook/react.html
Utilizzare sempre la tipizzazione esplicita migliora la manutenibilità e previene errori a tempo di compilazione
*/
