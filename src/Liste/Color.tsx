interface ColorName {
  name: string;
}

export default function Color({ name }: ColorName) {
  return <li>{name}</li>;
}
