import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchUser } from "./usersSlice";

export default function ReduxGithubUsers() {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");

  const users = useAppSelector((state) => state.users.users);
  const loading = useAppSelector((state) => state.users.loading);
  const error = useAppSelector((state) => state.users.error);

  function handleFetchUser() {
    if (username.trim()) {
      dispatch(fetchUser(username) as any);
      setUsername("");
    }
  }

  return (
    <div>
      <h2>GitHub Users</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleFetchUser}>Cerca</button>

      {loading && <p>loading..</p>}
      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.login})
          </li>
        ))}
      </ul>
    </div>
  );
}
