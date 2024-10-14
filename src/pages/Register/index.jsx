import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    email: null,
    password: null,
  });

  const handleInput = (e) =>
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: register.email,
      password: register.password,
    };

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => navigate("/login"))
      .catch((err) => console.error(err.response.data.error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          onChange={handleInput}
          type="text"
          name="email"
          className="border"
        />
        <label htmlFor="">Password</label>
        <input
          onChange={handleInput}
          type="text"
          name="password"
          className="border"
        />
        <button type="submit" className="border">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
