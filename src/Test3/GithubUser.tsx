import { useGithubUser } from "../CustomHook/useGithubUser";

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

  if (!user) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>

      <h2>{user.name}</h2>
      <p>{user.login}</p>
      <img src={user.avatar_url} alt={`Avatar di ${user.login}`} />
    </div>
  );
}

/*
Riceve un username come prop, quando il componente viene montato parte la fetch, per ogni username fa una chiamata diversa

Nell’interfaccia User manca la proprietà 'login', richiesta dalla traccia. È presente 'bio', 
che non è richiesta: modificare l’interfaccia User rimuovendo 'bio' e aggiungendo 'login'.
Nel rendering manca la visualizzazione del campo 'login', che deve essere mostrato come da istruzioni.
L’attributo 'alt' all’immagine dell’avatar non è presente e va aggiunto per migliorare l’accessibilità.
È consigliato tipizzare l’errore nel blocco catch come 'unknown' secondo le best practices TypeScript.
È suggerito inoltre aggiungere un fallback di rendering (ad esempio loading) 
quando i dati dell’utente non sono ancora disponibili, per migliorare l’esperienza utente.
Esempio di interfaccia e rendering corretti:

interface User { id: number; name: string; login: string; avatar_url: string; } 
... if (!user) return <div>Caricamento...</div>; 
return ( <div> <h2>{user.name}</h2> <p>{user.login}</p> <img src={user.avatar_url} alt={Avatar di ${user.login}} /> </div> ); ...

Maggiori dettagli su: https://www.typescriptlang.org/docs/ , https://react.dev/reference/react/useEffect


*/
