import React from "react";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <form>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={handleInput}
      />{" "}
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleInput}
      />{" "}
      <br />
      <button onClick={login}>Login</button>
    </form>
  );
}

export default Login;
