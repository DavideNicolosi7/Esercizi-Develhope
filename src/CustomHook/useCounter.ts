/*
Crea un hook personalizzato useCounter che tiene traccia dello stato di un contatore e restituisce 
il valore attuale del contatore, insieme a tre funzioni per incrementare, decrementare e resettare il contatore.
Crea un hook personalizzato che tiene traccia dello stato di un modulo controllato con gli input username
e password, e restituisce il valore attuale degli input insieme a un gestore di eventi per aggiornare uno dei due input.
Estrai la logica per recuperare i dati di un utente Github dal componente GithubUser di 16.3 
in un hook personalizzato chiamato useGithubUser.
Modifica l'hook useGithubUser per restituire la funzione per recuperare i dati di un utente Github, 
insieme ai dati dell'utente e agli stati di errore e caricamento.
Scrivi l'hook personalizzato useCurrentLocation, che utilizza l'API navigator.geolocation del browser 
per ottenere la posizione attuale dell'utente tramite il metodo incorporato getCurrentPosition. 
L'hook dovrebbe restituire la posizione attuale, insieme a una funzione per ottenere la posizione attuale e 
agli stati di errore e caricamento. I dettagli su come utilizzare questa API possono essere trovati qui: Geolocation API.
*/

import { useState } from "react";

interface CounterProps {
  initialValue: number;
  num: number;
}

export default function useCounter({ initialValue, num }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + num);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - num);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return [
    counter,
    {
      onIncrement: handleCounterIncrement,
      onDecrement: handleCounterDecrement,
      onReset: handleCounterReset,
    },
  ] as const;
}
