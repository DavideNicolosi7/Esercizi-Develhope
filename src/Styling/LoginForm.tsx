import { useForm } from "../CustomHook/useForm";

export default function LoginForm() {
  const [data, { onChange, onLogin, onReset }] = useForm({
    onLogin: (data) => console.log("Login:", data),
  });

  const loginButtonColor =
    data.password && data.password.length > 8 ? "green" : "red";

  return (
    <form onSubmit={onLogin}>
      <h2>Login</h2>

      <input
        name="username"
        placeholder="Username"
        value={data.username}
        onChange={onChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={onChange}
      />

      <label>
        <input
          type="checkbox"
          name="remember"
          checked={data.remember}
          onChange={onChange}
        />
        Remember me
      </label>

      <button
        style={{ backgroundColor: loginButtonColor }}
        disabled={!data.username || !data.password}
        type="submit"
      >
        Login
      </button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </form>
  );
}
