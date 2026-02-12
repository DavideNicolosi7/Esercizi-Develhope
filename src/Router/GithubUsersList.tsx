import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router";

type User = {
  id: number;
  login: string;
};

export default function GithubUserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          `https://api.github.com/users?per_page=10`,
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const responseJson = await response.json();
        setUsers(responseJson);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <Container title="Github Users">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </Container>
  );
}
