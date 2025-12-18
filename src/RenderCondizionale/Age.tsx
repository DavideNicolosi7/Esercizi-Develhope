export interface AgeProps {
  age: number;
}

export default function Age({ age }: AgeProps) {
  return <p>You are {age} years old </p>;
}
