/*
Crea un nuovo branch partendo dal primo esercizio sui props. Modifica il componente App affinché avvolga un componente Routes e aggiungi una singola Route per il percorso /, che renderizza il componente Welcome, passandogli una prop name.
Renderizza il componente App all'interno di un componente BrowserRouter.
Aggiungi una nuova Route per il percorso /counter che renderizza il componente Counter del primo esercizio sullo stato.
Aggiungi una nuova Route per il percorso /users/:username, che renderizza un componente ShowGithubUser, il quale riceve il parametro username dal percorso e renderizza un componente GithubUser, passandogli lo username ricevuto.
Aggiungi tre Link all'interno del componente principale App e utilizzali per navigare tra i tre percorsi. Aggiungi una route di "Not Found" che viene renderizzata quando un utente naviga verso un percorso inesistente.
Crea un componente GithubUserList che recupera i dati dall'API all'URL https://api.github.com/users e mostra un elenco di link con i nomi utente di GitHub. Cliccando su un nome utente, verrà visualizzato il componente ShowGithubUser.
Aggiungi una Route per il percorso /users che mostra il componente GithubUserList. Se esiste una Route per /users/:username, rimuovila dal componente App e aggiungi una nuova route annidata all'interno della route /users.
Aggiungi una route di indice alla route GithubUsers, che mostra il messaggio "Aggiungi un utente e selezionalo"
*/

export type WelcomeProps = {
  name?: string;
};

export default function Welcome({ name = "User" }: WelcomeProps) {
  return (
    <div>
      <p>
        <strong>Welcome, {name}!</strong>
      </p>
    </div>
  );
}
