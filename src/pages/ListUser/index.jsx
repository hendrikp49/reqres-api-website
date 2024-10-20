import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb, { arrow } from "../../components/Breadcrumb";

const ListUser = () => {
  // const token = localStorage.getItem("token_user");
  const [listUser, setListUser] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 6,
    total: null,
    total_pages: null,
  });

  const handleListUser = () => {
    axios
      .get(`https://reqres.in/api/users?page=${pagination.page}`)
      .then((res) => {
        setListUser(res.data.data);
        setPagination({
          page: res.data.page,
          per_page: res.data.page,
          total: res.data.total,
          total_pages: res.data.total_pages,
        });
      })
      .catch((err) => alert(err.response));
  };

  const handleNext = () => {
    setPagination({
      ...pagination,
      page: pagination.page + 1,
    });
  };

  const handleBack = () => {
    setPagination({
      ...pagination,
      page: pagination.page - 1,
    });
  };

  useEffect(() => {
    handleListUser();
  }, [pagination.page]);

  return (
    <div className="bg-[url('/img/mosaic.webp')]">
      <Navbar />
      <Breadcrumb>
        <li>
          <div className="flex items-center">
            {arrow}
            <span className="text-sm font-medium text-gray-700 ms-1 md:ms-2 dark:text-gray-400">
              List User
            </span>
          </div>
        </li>
      </Breadcrumb>

      <div className="flex justify-between max-w-sm gap-2 mx-auto mt-16 mb-5 duration-200 ease-out sm:max-w-lg md:max-w-3xl lg:max-w-6xl">
        <div className="flex gap-3">
          <button
            disabled={pagination.page === 1}
            onClick={handleBack}
            className="px-5 duration-200 ease-out border rounded-full disabled:cursor-not-allowed border-rose-500 text-rose-500 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:border-rose-50/0 hover:bg-rose-500 hover:text-white"
          >
            Prev
          </button>
          <button
            disabled={pagination.page === pagination.total_pages}
            onClick={handleNext}
            className="px-5 duration-200 ease-out border rounded-full disabled:cursor-not-allowed border-rose-500 text-rose-500 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:border-rose-50/0 hover:bg-rose-500 hover:text-white"
          >
            Next
          </button>
        </div>
        <Link to="/add-user">
          <button className="px-3 py-1 text-white duration-300 ease-out rounded-md bg-rose-500 hover:bg-rose-600">
            + Add User
          </button>
        </Link>
      </div>

      <div className="grid max-w-sm grid-cols-1 gap-5 mx-auto duration-200 ease-out sm:max-w-lg md:max-w-3xl lg:max-w-6xl place-items-center sm:gap-7 md:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listUser.map((user) => (
          <div
            key={user.id}
            className="flex flex-col w-full gap-3 px-3 py-5 text-center duration-300 ease-out bg-transparent shadow-sm backdrop-blur-sm hover:shadow-rose-400 shadow-rose-400 hover:shadow-xl border-rose-300 max-w-60 rounded-xl"
          >
            <img
              src={user.avatar}
              alt=""
              className="object-cover w-32 mx-auto rounded-full aspect-square"
            />
            <div>
              <h5 className="text-lg font-medium">
                {user.first_name + " " + user.last_name}
              </h5>
              <p className="text-sm">{user.email}</p>
            </div>
            <Link to={`/detail-user/${user.id}`}>
              <button className="w-full py-1 text-white duration-150 ease-out rounded-full bg-rose-500 hover:bg-rose-600">
                Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ListUser;
