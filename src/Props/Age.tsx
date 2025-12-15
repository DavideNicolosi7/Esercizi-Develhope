export type AgeProps = {
  age: number;
};

export default function Age({ age }: AgeProps) {
  return <p>Your age is {age}</p>;
}
