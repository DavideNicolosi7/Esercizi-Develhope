//Crea un componente GithubUsers che recupera una lista di utenti dalla Github API e renderizza
// la lista dei nomi utente come un elenco. Quando un nome utente viene cliccato, il componente GithubUser
// dovrebbe essere renderizzato, passando il nome utente come prop.

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  login: string;
};

type GithubUsersProps = {
  onSelectUser: (username: string) => void;
};

export default function GithubUsers({ onSelectUser }: GithubUsersProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`https://api.github.com/users?per_page=10`);

      const responseJson = await response.json();
      setUsers(responseJson);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((users) => (
          <li key={users.id} onClick={() => onSelectUser(users.login)}>
            {users.login}
          </li>
        ))}
      </ul>
    </div>
  );
}
