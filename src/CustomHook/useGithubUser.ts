import { useEffect, useState } from "react";
type User = {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
};

export function useGithubUser(username: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      setError(null);
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
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [username]);

  async function refetch() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const responseJson: User = await response.json();
      setUser(responseJson);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    loading,
    error,
    refetch,
  };
}
