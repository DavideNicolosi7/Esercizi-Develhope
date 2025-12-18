/* 
In un'applicazione React, crea un function component Welcome che riceve una prop name e una prop age.
Crea un componente Age che riceve una prop age.
Il componente Welcome deve visualizzare un messaggio "Welcome, {name}!" all'interno di un tag <p> e 5 componenti Age. Per ogni rendering del componente Age, usa il rendering condizionale con una delle seguenti condizioni:
Il componente Age viene renderizzato solo se la prop age è maggiore di 18.
Il componente Age viene renderizzato solo se la prop age è presente.
Il componente Age viene renderizzato solo se la prop age è maggiore di 18 e minore di 65.
Il componente Age viene renderizzato solo se la prop age è maggiore di 18 e la prop name è uguale a "John".
Crea un nuovo componente Message che riceve una prop age e visualizza lo stesso messaggio se la prop è maggiore di 18; in caso contrario, visualizza il messaggio "You are very young!". Renderizza il componente Message all'interno del componente Welcome.
*/

import Age from "./Age";
import Message from "./Message";

export interface WelcomeProps {
  name: string;
  age: number;
}

export default function Welcome({ name, age }: WelcomeProps) {
  return (
    <div>
      <p>Welcome, {name}!</p>

      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name == "John" && <Age age={age} />}
      {age > 18 && age < 24 && <Age age={age} />}

      <Message age={age} />
    </div>
  );
}
