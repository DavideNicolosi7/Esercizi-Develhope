/*
Crea un componente Colors che renderizza un tag ul con un tag li per ogni colore passato nella prop items. La prop items dovrebbe essere un array di stringhe.
Modifica il componente Colors in modo che items si aspetti essere un array di oggetti, ciascuno contenente una proprietà id e una proprietà name. 
Renderizza la proprietà name di ogni oggetto all'interno di un tag li e usa l'id come chiave.
Estrai il tag li in un nuovo componente chiamato Color e renderizzalo all'interno del componente Colors.
*/

import Color from "./Color";

interface ItemsProps {
  id: number;
  name: string;
}

interface ColorsProps {
  items: ItemsProps[];
}

export default function Colors({ items }: ColorsProps) {
  return (
    <ul>
      {items.map((item) => (
        <Color key={item.id} name={item.name} />
      ))}
    </ul>
  );
}
