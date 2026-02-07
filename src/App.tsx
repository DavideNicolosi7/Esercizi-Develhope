import CounterReducer from "./Redux/CounterReducer";
import ReduxCombinato from "./Redux/ReduxCombinato";
import ReduxGithubUsers from "./Redux/ReduxGithubUsers";

export function App() {
  return (
    <div>
      <h1>Redux Components Test</h1>
      <CounterReducer />
      <ReduxCombinato />
      <ReduxGithubUsers />
    </div>
  );
}
