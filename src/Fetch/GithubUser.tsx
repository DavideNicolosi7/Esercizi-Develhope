//Crea un componente GithubUser che riceve una prop username e recupera i dati dell'utente corrispondente
// dalla Github API. Il componente dovrebbe renderizzare il nome dell'utente, il login e l'avatar.
//Crea un componente GithubUsers che recupera una lista di utenti dalla Github API e
// renderizza la lista dei nomi utente come un elenco. Quando un nome utente viene cliccato,
// il componente GithubUser dovrebbe essere renderizzato, passando il nome utente come prop.

import { useEffect, useState } from "react";

type GithubUserProps = {
  username: string;
};

type User = {
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
};

export default function GithubUser({ username }: GithubUserProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const responseJson: User = await response.json();
        setUser(responseJson);
      } catch (err) {
        console.error("Errore nel recupero dell'utente");
      }
    }

    fetchUser();
  }, [username]);

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.bio}</p>
      <img src={user?.avatar_url} />
    </div>
  );
}
