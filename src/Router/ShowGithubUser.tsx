import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

export default function ShowGithubUser() {
  const { username } = useParams();

  if (!username) {
    return <p>User non trovato</p>;
  }

  return <GithubUser username={username} />;
}
