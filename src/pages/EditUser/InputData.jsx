import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Breadcrumb, { arrow } from "../../components/Breadcrumb";

const InputData = (props) => {
  const { dataInput } = props;

  const { id } = useParams();
  const [dataUser, setDataUser] = useState({
    name: "",
    job: "",
    avatar: "",
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleDataUser = () => {
    axios
      .get(`https://reqres.in/api/users?id=${id}`)
      .then((res) =>
        setDataUser({
          name: res.data.data.first_name + " " + res.data.data.last_name,
          job: res.data.data.email,
          avatar: res.data.data.avatar,
        })
      )
      .catch((err) => console.log(err.response));
  };

  const handleChange = (e) =>
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: dataUser.name,
      job: dataUser.job,
    };

    axios
      .put(`https://reqres.in/api/users/?id=${id}`, payload)
      .then((res) => {
        setSuccess(true);
        setTimeout(() => {
          navigate("/list-user");
        }, 2000);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    handleDataUser();
  }, []);
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
            <Link to={`/detail-user/${id}`}>
              <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                Detail User
              </span>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            {arrow}
            <span className="text-sm font-medium text-gray-700 ms-1 md:ms-2 dark:text-gray-400">
              Edit User
            </span>
          </div>
        </li>
      </Breadcrumb>

      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-16 h-[calc(100vh-60px)]"
        >
          {success && (
            <p className="px-5 py-1 mb-3 text-center text-white bg-green-500 rounded-md">
              Data has been updated!
            </p>
          )}
          <div className="flex flex-col items-center w-full max-w-sm gap-5 px-3 py-5 duration-300 ease-out bg-transparent rounded-lg shadow-sm backdrop-blur-sm hover:shadow-2xl hover:shadow-rose-500 lg:max-w-3xl shadow-rose-500">
            <div className="flex flex-col items-center w-full gap-5 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
              <img
                src={dataUser.avatar}
                alt=""
                className="rounded-full w-28 lg:w-36 aspect-square"
              />
              <div className="flex flex-col w-full gap-2 px-5 lg:pl-10 lg:max-w-md lg:border-l lg:border-rose-400">
                <div className="flex justify-between ">
                  <label htmlFor="">Name</label>
                  <div className="w-3/4 pl-10 border-l border-dashed">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      value={dataUser.name}
                      className="w-full py-1 border-b focus:outline-none focus:border-rose-400"
                    />
                  </div>
                </div>
                <div className="flex justify-between ">
                  <label htmlFor="">Email</label>
                  <div className="w-3/4 pl-10 border-l border-dashed">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="job"
                      value={dataUser.job}
                      className="w-full py-1 border-b focus:outline-none focus:border-rose-400"
                    />
                  </div>
                </div>
                <div className="flex justify-between ">
                  <label htmlFor="">URL Image</label>
                  <div className="w-3/4 pl-10 border-l border-dashed">
                    <input
                      type="text"
                      name=""
                      value={dataUser.avatar}
                      className="w-full py-1 border-b focus:outline-none focus:border-rose-400"
                    />
                  </div>
                </div>
                {dataInput.map((item) => (
                  <div key={item.nama} className="flex justify-between ">
                    <label htmlFor="">{item.nama}</label>
                    <div className="w-3/4 pl-10 border-l border-dashed">
                      <input
                        type="text"
                        name=""
                        value={item.value}
                        className="w-full py-1 border-b focus:outline-none focus:border-rose-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="w-full border-rose-500" />
            <div className="flex items-center justify-end w-full gap-3 border-rose-400">
              <button
                type="submit"
                className="px-5 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputData;
