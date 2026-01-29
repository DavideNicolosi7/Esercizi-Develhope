import Clock from "./Styling/Clock";
import Counter from "./Styling/Counter";
import FocusableInput from "./Styling/FocusableInput";
import LoginForm from "./Styling/LoginForm";
import UncontrolledLogin from "./Styling/UncontrolledLogin";
import Welcome from "./Styling/Welcome";

export function App() {
  return (
    <div>
      <Welcome name="Davide" />
      <Counter />
      <LoginForm />
      <Clock />
      <UncontrolledLogin />
      <FocusableInput />
    </div>
  );
}
