/* 
Crea un componente MouseClicker che contenga un pulsante con la prop name impostata alla stringa "one". 
Aggiungi un gestore di eventi al pulsante che stampa la prop name nella console quando cliccato, 
leggendo la proprietà event.target.name.
Aggiungi un'immagine all'interno del pulsante e, senza creare un nuovo gestore di eventi 
o allegare un gestore di eventi all'immagine, stampa l'attributo name del pulsante
indipendentemente dal fatto che si clicchi sul pulsante o sull'immagine.
Aggiungi un gestore di eventi onClick all'immagine che stampa il src dell'immagine nella console. 
L'attributo name del pulsante viene comunque stampato nella console quando si clicca sull'immagine? Perché?
Come puoi impedire che l'attributo name del pulsante venga stampato nella console quando si clicca sull'immagine?
Crea un componente MultiButton con tre pulsanti, ciascuno con la prop name impostata rispettivamente a "one", "two" e "three". 
Aggiungi lo stesso gestore di eventi a ciascun pulsante che stampa la prop name nella console quando cliccato, 
leggendo la proprietà event.target.name.
*/

import { BaseSyntheticEvent } from "react";

interface MouseProps {
  name: string;
}

export function MouseClicker({ name = "one" }: MouseProps) {
  function handleClickButton(event: BaseSyntheticEvent) {
    console.log(event.target.name);
  }

  function handleClickImage(event: BaseSyntheticEvent) {
    console.log(event.target.src);
  }

  return (
    <button name={name} onClick={handleClickButton}>
      <img
        onClick={handleClickImage}
        src="https://www.ciamanimali.com/stupload/stblog/1/42/59/4259large.jpg"
        height={24}
        width={24}
      />
      {name}
    </button>
  );
}

// con un solo gestore degli eventi nel bottone e passando la proprietà event.currentTarget.name in console verrà stampato il name indipendemente da dove si  clicca all'interno del bottone
// dopo aver aggiunto il gestore di eventi all'immagine l'attributo name non viene più stampato perchè al gestore eventi dell'immagine passo event.target.src quindi stampa solo l src dell'immagine

export default MouseClicker;
