// Crea un CounterReducer, insieme ai suoi action types e action creators, per tenere traccia di un contatore che può essere incrementato, decrementato e resettato.
// Crea uno store che usa CounterReducer come root reducer, e dispatcha un'azione INCREMENT allo store. Verifica che lo stato venga aggiornato come previsto.
// Crea un TodosReducer che gestisce una lista di todos (oggetti con una proprietà id, title e completed), consentendo azioni di aggiunta, rimozione e modifica.
// Modifica lo store in modo che utilizzi un root reducer che combina sia il reducer del contatore che quello dei todos. Dispatcha azioni per entrambi, il contatore e i todos.
// Iscriviti allo store e verifica che ogni aggiornamento dello stato attivi il callback di iscrizione.
// Usa Redux Toolkit per riscrivere lo stato del contatore e sostituirlo all'interno dello store.
// Usa Redux Toolkit per riscrivere lo stato dei todos e sostituirlo all'interno dello store.

// CONTINUARE DA QUI SOTTO
// Crea un LoggingMiddleware che registra le azioni dispatchate allo store.
// Crea un DelayMiddleware che ritarda le azioni dispatchate allo store.
// Crea, utilizzando Redux Toolkit, uno stato UsersState che gestisce una lista di utenti (oggetti con una proprietà id, name e login), consentendo azioni di aggiunta e rimozione. Aggiungi il suo reducer allo store.
// Crea un thunk fetchUser che recupera un utente dall'API GitHub e lo aggiunge allo store dispatchando un'azione al UsersReducer.
// Crea un componente ReduxCounter che utilizza l'hook useSelector per ottenere il valore attuale del contatore, e l'hook useDispatch per dispatchare azioni allo store.
// Crea un componente ReduxGithubUsers che consente di inserire il nome di un utente e recuperarlo dall'API GitHub utilizzando il thunk fetchUser, mostrando tutti gli utenti recuperati in una lista.
// Aggiungi uno stato loading e errors allo store e usali per tenere traccia dello stato di caricamento e degli errori all'interno del thunk fetchUser.

import ReduxCounter from "./ReduxCounter";

export default function Counter() {
  const [counter, counterHandlers] = ReduxCounter();
  return (
    <div>
      <h2>Counter</h2>
      <p>Valore: {counter}</p>
      <button onClick={counterHandlers.onIncrement}>Increment +</button>
      <button onClick={counterHandlers.onDecrement}>Decrement -</button>
      <button onClick={counterHandlers.onReset}>Reset</button>
    </div>
  );
}
