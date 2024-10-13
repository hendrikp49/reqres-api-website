import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
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
    <div>
      <button
        disabled={pagination.page === 1}
        onClick={handleBack}
        className="disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <button
        disabled={pagination.page === pagination.total_pages}
        onClick={handleNext}
        className="disabled:cursor-not-allowed"
      >
        Next
      </button>
      {listUser.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt="" />
          <p>{user.first_name + " " + user.last_name}</p>
          <p>{user.email}</p>
          <Link to={`/detail-user/${user.id}`}>
            <button className="border">Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
