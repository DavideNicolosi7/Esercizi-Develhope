import Age, { AgeProps } from "./Age";

export default function Message({ age }: AgeProps) {
  return <>{age > 18 ? <Age age={age} /> : "You are very young"}</>;
}
