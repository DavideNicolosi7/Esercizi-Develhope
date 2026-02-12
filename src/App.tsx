import { Container } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Router/Welcome";
import Counter from "./Router/Counter";
import GithubUserList from "./Router/GithubUsersList";
import ShowGithubUser from "./Router/ShowGithubUser";
import { NotFound } from "./Router/NotFound";

export function App() {
  return (
    <Container title="Test react-router">
      <nav>
        <Link className="text-blue-600 mx-2" to="/">
          Home
        </Link>
        <Link className="text-blue-600 mx-2" to="/counter">
          Counter
        </Link>
        <Link className="text-blue-600 mx-2" to="/users/DavideNicolosi7">
          User
        </Link>
        <Link className="text-blue-600 mx-2" to="/users">
          Users
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Davide" />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
