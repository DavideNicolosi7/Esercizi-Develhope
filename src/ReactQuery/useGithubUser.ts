/*
Modifica l'hook personalizzato useGithubUser che hai creato nell'esercizio sui custom hook per utilizzare 
l'hook react-query e recuperare i dati di un utente Github.
Modifica l'hook useGithubUser in modo che, se il nome utente è null, non venga effettuata alcuna richiesta.
Modifica l'hook useGithubUser in modo che restituisca una funzione per eseguire manualmente un nuovo recupero 
dei dati quando invocata.
*/

import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
};

export function useGithubUser(username: string) {
  const { data, isLoading, error, refetch } = useQuery<User>({
    queryKey: ["user", username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("Errore nel recupero dell'utente");
      }

      const responseJson = await response.json();

      return responseJson;
    },
    enabled: !!username, // in qeusto modo tramite reac-query è possibile non effettuare nessuna chiamata se l'username è null
  });

  return {
    user: data,
    loading: isLoading,
    error: error,
    refetch: refetch,
  };
}
