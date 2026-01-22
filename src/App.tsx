import { useState } from "react";
import GithubUser from "./Fetch/GithubUser";
import GithubUsers from "./Fetch/GithubUsers";
import InteractiveWelcome from "./FormControllati/InteractiveWelcome";
import UncontrolledLogin from "./FormIncontrollati/UncontrolledLogin";
import MultiButton from "./GestioneEventi/MultiButton";
import TodoList from "./Liste-e-Stato/TodoList";
import Colors from "./Liste/Colors";
import FocusableInput from "./useRef/FocusableInput";

const colors = [
  { id: 1, name: "blu" },
  { id: 2, name: "nero" },
  { id: 3, name: "rosso" },
  { id: 4, name: "giallo" },
  { id: 5, name: "viola" },
];

export function App() {
  const [selectedUser, setSelectedUser] = useState("DavideNicolosi7");
  return (
    <div>
      <GithubUsers onSelectUser={setSelectedUser} />
      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
}
