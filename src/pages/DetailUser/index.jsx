import InputDetailUser from "./InputDetailUser";

const DetailUser = () => {
  const inputDetail = [
    { name: "DoB", value: "25 October 1985" },
    { name: "Nationall", value: "Indonesia" },
    { name: "No. HP", value: "08123456789" },
    { name: "Address", value: "Jakarta" },
    { name: "NIK", value: "3212010203040009" },
    { name: "Job", value: "Frontend Developer" },
  ];
  return <InputDetailUser inputDetail={inputDetail} />;
};

export default DetailUser;
