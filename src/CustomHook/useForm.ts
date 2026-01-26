import { useState } from "react";

type LoginData = {
  username: string;
  password: string;
  remember: boolean;
};

type LoginProps = {
  onLogin: (data: LoginData) => void;
};

export function useForm({ onLogin }: LoginProps) {
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

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onLogin(data);
  }

  function handleFormReset() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  return [
    data,
    {
      onChange: handleChange,
      onLogin: handleLogin,
      onReset: handleFormReset,
    },
  ] as const;
}
