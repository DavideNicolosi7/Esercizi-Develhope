import { useState } from "react";

type LoginData = {
  username: string;
  password: string;
  remember: boolean;
};

type LoginProps = {
  onLogin: (data: LoginData) => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleLogin(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    onLogin(data);
  }

  function handleReset() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username</label>
        <input name="username" value={data.username} onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Remember</label>
        <input
          type="checkbox"
          name="remember"
          checked={data.remember}
          onChange={handleChange}
        />
      </div>

      <button disabled={!data.username}>Login</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
