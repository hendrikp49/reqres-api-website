import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Breadcrumb, { arrow } from "../../components/Breadcrumb";

const InputDetailUser = (props) => {
  const { inputDetail } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(false);

  const handleDetail = () => {
    axios
      .get(`https://reqres.in/api/users?id=${id}`)
      .then((res) => setDetail(res.data.data))
      .catch((err) => console.error(err.response));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setDeleteStatus(true);
        setTimeout(() => {
          navigate("/list-user");
        }, 3000);
      })
      .catch((err) => console.error(err.response));
  };

  useEffect(() => {
    handleDetail();
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
            <span className="text-sm font-medium text-gray-700 ms-1 md:ms-2 dark:text-gray-400">
              Detail User
            </span>
          </div>
        </li>
      </Breadcrumb>

      <div>
        <div className="flex flex-col items-center mt-16 h-[calc(100vh-60px)]">
          {deleteStatus && (
            <p className="px-5 py-1 mb-3 text-center text-white bg-green-500 rounded-md">
              Data has been deleted!
            </p>
          )}
          <div className="flex flex-col items-center w-full max-w-sm gap-5 px-3 py-5 duration-300 ease-out bg-transparent rounded-lg shadow-sm backdrop-blur-sm hover:shadow-2xl hover:shadow-rose-500 lg:max-w-3xl shadow-rose-500">
            <div className="flex flex-col items-center w-full gap-5 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
              <img
                src={detail.avatar}
                alt=""
                className="rounded-full w-28 lg:w-36 aspect-square"
              />
              <div className="flex flex-col w-full gap-2 px-5 lg:pl-10 lg:max-w-md lg:border-l lg:border-rose-400">
                <div className="flex justify-between ">
                  <label htmlFor="" className="">
                    Name
                  </label>
                  <p className="w-3/4 pl-10 border-l border-dashed">
                    {detail.first_name + " " + detail.last_name}
                  </p>
                </div>
                <div className="flex justify-between ">
                  <label htmlFor="">Email</label>
                  <p className="w-3/4 pl-10 border-l border-dashed">
                    {detail.email}
                  </p>
                </div>

                {inputDetail.map((item) => (
                  <div key={item.name} className="flex justify-between ">
                    <label htmlFor="">{item.name}</label>
                    <p className="w-3/4 pl-10 border-l border-dashed">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <hr className="w-full border-rose-500" />
            <div className="flex items-center justify-end w-full gap-3 border-rose-400">
              <Link to={`/edit-user/${id}`}>
                <button className="px-5 py-1 text-white bg-orange-400 rounded-md hover:bg-orange-500">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => deleteUser(id)}
                className="px-5 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDetailUser;
