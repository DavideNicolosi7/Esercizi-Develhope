import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

interface CounterProps {
  initialValue?: number;
  num?: number;
}

export function Counter({ initialValue = 0, num = 1 }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter((c) => c + num);
    /* il parametro della funzione setter può essere sia un valore immediato che una funziona, 
    ma utilizzare una callback ci da più versatilità possibile e inoltre 
    in questo modo siamo sicuri di utilizzare sempre un valore aggiornato */
  }

  function decrement() {
    setCounter((c) => c - num);
  }

  function reset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay count={counter} />

      <button className="mx-2" onClick={increment}>
        Increment
      </button>
      <button className="mx-2" onClick={decrement}>
        Decrement
      </button>
      <button className="mx-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
