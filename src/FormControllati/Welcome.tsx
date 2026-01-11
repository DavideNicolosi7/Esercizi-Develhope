interface WelcomeProps {
  name: string;
}

export default function Welcome({ name }: WelcomeProps) {
  return <h2>Benvenuto, {name || "user"}!</h2>;
}
