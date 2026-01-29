import { Button } from "react-bootstrap";
import useCounter from "../CustomHook/useCounter";

export default function Counter() {
  const [count, { onIncrement, onDecrement, onReset }] = useCounter({
    initialValue: 0,
    num: 1,
  });

  const MyCounterStyle = {
    backgroundColor: "#ff0000",
    margin: "10px 20px",
    color: "yellow",
    textAlign: "center" as const,
  };

  return (
    <div>
      <h2>Counter</h2>
      <p style={MyCounterStyle}> {count}</p>
      <Button variant="primary" onClick={onIncrement}>
        +
      </Button>
      <Button variant="secondary" onClick={onDecrement}>
        -
      </Button>
      <Button variant="warning" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
