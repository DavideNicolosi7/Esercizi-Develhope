import { BaseSyntheticEvent } from "react";

export default function UncontrolledLogin() {
  function handleUncontrolledLogin(event: BaseSyntheticEvent) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });
  }

  return (
    <form onSubmit={handleUncontrolledLogin}>
      <h3 className="font-bold text-3xl ">Form non controllato stilizzato</h3>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          className="w-full border border-gray-400 rounded "
          id="email"
          name="email"
          type="email"
        ></input>
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          className="w-full border border-blue-900  "
          id="password"
          name="password"
          type="password"
        ></input>
      </div>

      <button className=" bg-green-600 py-2 px-4" type="submit">
        Login
      </button>
    </form>
  );
}
