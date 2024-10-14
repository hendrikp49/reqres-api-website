import axios from "axios";
import { useState } from "react";

const AddUser = () => {
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
      name: add.email,
      job: add.password,
    };

    axios
      .post("https://reqres.in/api/users", payload)
      .then((res) => console.log(res))
      .catch((err) => console.error(err.response.data.error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          onChange={handleInput}
          type="text"
          name="email"
          className="border"
        />
        <label htmlFor="">Job</label>
        <input
          onChange={handleInput}
          type="text"
          name="password"
          className="border"
        />
        <button type="submit" className="border">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
