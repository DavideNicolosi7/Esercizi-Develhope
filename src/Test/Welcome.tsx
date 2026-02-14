// Scrivi un test per il componente Welcome dell'esercizio props

import Age from "./Age";

export type WelcomeProps = {
  name?: string;
  age: number;
};

export default function Welcome({ name = "User", age }: WelcomeProps) {
  return (
    <div>
      <p>
        <strong>Welcome, {name}!</strong>
      </p>
      <Age age={age} />
    </div>
  );
}
