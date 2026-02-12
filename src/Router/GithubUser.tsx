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
