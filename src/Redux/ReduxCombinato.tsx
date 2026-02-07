import { store, useAppDispatch, useAppSelector } from "@/store/store";
import { counterState } from "@/store/counter.state";
import { todoState } from "@/store/todos.state";
import { useEffect } from "react";

export default function ReduxCombinato() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  const todos = useAppSelector((state) => state.todo);

  // Iscriversi allo store e verificare gli aggiornamenti
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      console.log("Store Aggiornato:", {
        counter: state.counter,
        todos: state.todo,
      });
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Redux Combinato</h1>

      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(counterState.actions.increment(1))}>
          Increment
        </button>
        <button onClick={() => dispatch(counterState.actions.decrement(1))}>
          Decrement
        </button>
        <button onClick={() => dispatch(counterState.actions.reset())}>
          Reset
        </button>
      </div>

      <div>
        <h2>Todos: {todos.length}</h2>
        <button
          onClick={() =>
            dispatch(
              todoState.actions.add({
                id: Date.now(),
                text: `Todo #${todos.length + 1}`,
                completed: false,
              }),
            )
          }
        >
          Aggiungi Todo
        </button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(todoState.actions.toggle(todo.id))}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(todoState.actions.remove(todo.id))}
              >
                Elimina
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
