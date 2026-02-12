interface CountProps {
  count: number;
}

export default function CounterDisplay({ count }: CountProps) {
  return <h2>{count}</h2>;
}
