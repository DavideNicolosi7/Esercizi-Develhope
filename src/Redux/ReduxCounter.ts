import { counterState } from "@/store/counter.state";
import { useAppDispatch, useAppSelector } from "@/store/store";

export default function ReduxCounter() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  function handleCounterIncrement() {
    dispatch(counterState.actions.increment(1));
  }

  function handleCounterDecrement() {
    dispatch(counterState.actions.decrement(1));
  }

  function handleCounterReset() {
    dispatch(counterState.actions.reset());
  }

  return [
    counter,
    {
      onIncrement: handleCounterIncrement,
      onDecrement: handleCounterDecrement,
      onReset: handleCounterReset,
    },
  ] as const;
}
