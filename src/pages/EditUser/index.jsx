import InputData from "./InputData";

const EditUser = () => {
  const dataInput = [
    { nama: "DoB", value: "25 October 1985" },
    { nama: "National", value: "Indonesia" },
    { nama: "Np. HP", value: "08123456789" },
    { nama: "Address", value: "Jakarta" },
    { nama: "NIK", value: "3212010203040009" },
    { nama: "Job", value: "Frontend Developer" },
  ];
  return(
    <InputData dataInput={dataInput} />
  )
};

export default EditUser;
