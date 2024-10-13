import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailUser = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const handleDetail = () => {
    axios
      .get(`https://reqres.in/api/users?id=${id}`)
      .then((res) => setDetail(res.data.data))
      .catch((err) => console.error(err.response));
  };

  useEffect(() => {
    handleDetail();
  }, []);

  return (
    <div>
      <div>
        <img src={detail.avatar} alt="" />
        <p>{detail.first_name + " " + detail.last_name}</p>
        <p>{detail.email}</p>
      </div>
    </div>
  );
};

export default DetailUser;
