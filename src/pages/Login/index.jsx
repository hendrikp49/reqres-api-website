import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: null,
    password: null,
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        setSuccess(true);
        setErrors(false);
        setTimeout(() => {
          navigate("/list-user");
        }, 3000);
      })
      .catch((err) => {
        setErrors(true);
        setErrorMessage(err.response.data.error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center h-[calc(100vh-60px)] bg-[url('/img/table.jpg')] bg-cover">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-xs gap-8 px-5 py-6 mx-auto duration-300 ease-out bg-transparent border rounded-lg shadow-sm backdrop-blur-lg shadow-rose-400 hover:shadow-2xl hover:shadow-rose-500 border-rose-400 "
        >
          <h1 className="text-2xl font-semibold text-center text-rose-500">
            Login
          </h1>
          <div className="flex flex-col gap-3">
            {success && (
              <p className="px-3 py-1 mx-auto text-center text-white bg-green-500 rounded-lg w-fit">
                Login Success!
              </p>
            )}
            {errors && (
              <p className="px-3 py-1 mx-auto text-center text-white bg-red-500 rounded-lg w-fit">
                {errorMessage}
              </p>
            )}
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input
                onChange={handleInput}
                type="text"
                name="email"
                placeholder="example@mail.com"
                className="px-3 py-1 text-sm border rounded-md placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Password</label>
              <input
                onChange={handleInput}
                type="password"
                name="password"
                placeholder="*****"
                className="px-3 py-1 text-sm border rounded-md placeholder:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-1 text-white duration-100 ease-out border rounded-md bg-rose-500 hover:bg-rose-600"
            >
              Login
            </button>
            <p className="mt-3 text-sm text-center text-neutral-800">
              Don&apos;t have an Account?{" "}
              <Link to="/register">
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Register
                </span>
              </Link>{" "}
              here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
