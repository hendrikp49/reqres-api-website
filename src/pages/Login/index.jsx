import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: null,
    password: null,
  });

  const handleInput = (e) =>
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: loginUser.email,
      password: loginUser.password,
    };
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token_user", token);
        alert("Login Berhasil");
      })
      .catch((err) => {
        console.error(err.response);
        alert(err.response.data.error);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="">Email</label>
          <input
            onChange={handleInput}
            type="text"
            name="email"
            placeholder="example@mail.com"
            className="border"
          />
          <label htmlFor="">Password</label>
          <input
            onChange={handleInput}
            type="text"
            name="password"
            placeholder="*****"
            className="border"
          />
          <button type="submit" className="border">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
