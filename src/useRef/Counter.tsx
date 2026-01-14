import { useEffect, useRef, useState } from "react";

type CounterProps = {
  initialValue: number;
};

type CounterDirection = "up" | "down";

export default function Counter({ initialValue }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  const directionRef = useRef<CounterDirection | null>(null);
  const prevDirection = useRef<CounterDirection | null>(null);

  useEffect(() => {
    let newDirection: CounterDirection | null = null;

    if (counter > initialValue) {
      newDirection = "up";
    } else if (counter < initialValue) {
      newDirection = "down";
    }

    if (newDirection && newDirection !== prevDirection.current) {
      directionRef.current = newDirection;
      prevDirection.current = newDirection;
      console.log("Direzione :", directionRef.current);
    }
  }, [counter, initialValue]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
    </div>
  );
}
