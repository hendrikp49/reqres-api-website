import InputDataAdd from "./InputDataAdd";

const AddUser = () => {
  const dataInput = [
    { judul: "Username", tipe: "text", nama: "username" },
    { judul: "Email", tipe: "email", nama: "email" },
    { judul: "Tanggal Lahir", tipe: "date", nama: "date" },
  ];

  return <InputDataAdd dataInput={dataInput} />;
};

export default AddUser;
