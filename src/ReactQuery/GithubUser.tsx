import { useGithubUser } from "./useGithubUser";

type GithubUserProps = {
  username: string;
};

export default function GithubUser({ username }: GithubUserProps) {
  const { user, loading, error, refetch } = useGithubUser(username);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore trovato</p>;
  }

  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>

      <h2>{user?.name}</h2>
      <p>{user?.bio}</p>
      <img src={user?.avatar_url} />
    </div>
  );
}
