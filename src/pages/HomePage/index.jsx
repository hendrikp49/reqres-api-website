import DataHomePage from "./DataHomePage";

const HomePage = () => {
  const dataHero = [
    {
      judul: "Reqres is Real API",
      ket: "Reqres simulates real application scenarios. If you want to test a user authentication system, Reqres will respond to a successful login/register request with a token for you to identify a sample user, or with a 403 forbidden response to an unsuccessful login/registration attempt.",
      img: "./img/rocket.png",
    },
    {
      judul: "Technical demos and tutorials",
      ket: "If you're trying to demonstrate a front-end (JavaScript-based) concept, you don't really want the hassle of setting up an API, or even a server (especially during a live workshop or demo).",
      img: "./img/tutorial.png",
    },
    {
      judul: "Rapid prototyping of interfaces",
      ket: "When prototyping a new interface, you just want an API there, with minimal setup effort involved. Normally, I'd point people, who aren't too familiar with backend programming, to Sailsjs which can auto-generate a REST-API for you from the command line.",
      img: "./img/programming.png",
    },
  ];
  return <DataHomePage dataHero={dataHero} />;
};

export default HomePage;
