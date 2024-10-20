import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Register = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    email: null,
    password: null,
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      .then((res) => {
        setSuccess(true);
        setErrors(false);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error);
        setErrors(true);
        setSuccess(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center h-[calc(100vh-60px)] bg-[url('/img/table.jpg')] bg-cover">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-sm gap-8 p-5 mx-auto duration-300 ease-out bg-transparent border rounded-lg shadow-sm backdrop-blur-lg shadow-rose-400 hover:shadow-2xl hover:shadow-rose-500 border-rose-400 "
        >
          <h1 className="text-2xl font-semibold text-center text-rose-500">
            Register
          </h1>

          <div className="flex flex-col gap-3">
            {success && (
              <p className="px-3 py-1 mx-auto text-center text-white bg-green-600 rounded-lg w-fit">
                Register Success!
              </p>
            )}
            {errors && (
              <p className="px-3 py-1 mx-auto text-center text-white bg-red-600 rounded-lg w-fit">
                {errorMessage}
              </p>
            )}

            <div className="flex flex-col gap-1">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="username"
                placeholder="your_username"
                className="px-3 py-1 text-sm border rounded-md placeholder:text-sm"
              />
            </div>

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

            <div className="flex flex-col gap-1">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="confirmpw"
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
              Register Now
            </button>
            <p className="mt-3 text-sm text-center text-neutral-800">
              Have an Account?{" "}
              <Link to="/login">
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Login
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

export default Register;
