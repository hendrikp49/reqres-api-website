import { useState } from "react";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState();

  const handleEdit = () => {};

  return;
};

export default EditUser;
