import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Breadcrumb, { arrow } from "../../components/Breadcrumb";

const InputDataAdd = (props) => {
  const { dataInput } = props;
  const navigate = useNavigate();
  const [regisSuccess, setRegisSuccess] = useState(false);
  const [add, setAdd] = useState({
    name: null,
    job: null,
  });

  const handleInput = (e) =>
    setAdd({
      ...add,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: add.name,
      job: add.job,
    };

    axios
      .post("https://reqres.in/api/users", payload)
      .then((res) => {
        setRegisSuccess(true);
        setTimeout(() => {
          navigate("/list-user");
        }, 3000);
      })
      .catch((err) => console.error(err.response.data.error));
  };

  return (
    <div className="bg-[url('/img/mosaic.webp')]">
      <Navbar />
      <Breadcrumb>
        <li>
          <div className="flex items-center">
            {arrow}
            <a
              href="/list-user"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              List User
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            {arrow}
            <span className="text-sm font-medium text-gray-700 ms-1 md:ms-2 dark:text-gray-400">
              Add User
            </span>
          </div>
        </li>
      </Breadcrumb>

      <div className="flex items-center justify-center h-[calc(100vh-60px)]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-sm gap-5 px-5 py-5 overflow-hidden duration-300 ease-out bg-transparent border shadow-sm backdrop-blur-sm hover:shadow-2xl hover:shadow-rose-400 shadow-rose-500 rounded-xl border-rose-400"
        >
          <h2 className="text-2xl font-bold text-center text-rose-500">
            Add User
          </h2>
          {regisSuccess && (
            <p className="px-3 mx-auto text-white bg-green-500 rounded-md w-fit">
              Adding User Successful!
            </p>
          )}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col justify-between gap-2">
              <label htmlFor="" className="font-medium">
                Name
              </label>
              <input
                required
                onChange={handleInput}
                type="text"
                name="name"
                className="px-1 text-sm border-b focus:outline-none focus:border-rose-400"
              />
            </div>
            <div className="flex flex-col justify-between gap-2">
              <label htmlFor="" className="font-medium">
                Job
              </label>
              <input
                required
                onChange={handleInput}
                type="text"
                name="job"
                className="px-1 text-sm border-b focus:outline-none focus:border-rose-400"
              />
            </div>
            {dataInput.map((item) => (
              <div
                key={item.judul}
                className="flex flex-col justify-between gap-2"
              >
                <label htmlFor="" className="font-medium">
                  {item.judul}
                </label>
                <input
                  onChange={handleInput}
                  type={item.tipe}
                  name={item.nama}
                  className="px-1 text-sm border-b focus:outline-none focus:border-rose-400"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="py-1 text-white duration-200 ease-out rounded-lg hover:bg-rose-600 bg-rose-500"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputDataAdd;
