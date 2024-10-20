import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const DataHomePage = (props) => {
  const { dataHero } = props;
  return (
    <>
      <Navbar />
      <section className="relative mx-auto">
        <div className="absolute w-full h-full -z-10">
          <img
            src="./img/hero.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-16 pt-5 pb-20">
          <div className="max-w-6xl mx-auto">
            <img src="./img/reqres.webp" alt="" className="w-52" />
          </div>
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl text-center text-white">
              Test Your Front-end Against Real API
            </h1>
          </div>
          <div className="grid max-w-xs grid-cols-1 gap-4 mx-auto md:gap-5 md:grid-cols-2 md:max-w-2xl lg:max-w-6xl lg:grid-cols-3">
            {dataHero.map((data) => (
              <div
                key={data.judul}
                className="flex flex-col gap-3 px-3 py-4 overflow-hidden text-center rounded-md shadow-sm shadow-slate-600 bg-slate-100/50 backdrop-blur-sm md:px-4 h-80"
              >
                <img
                  src={data.img}
                  alt=""
                  className="w-12 mx-auto aspect-square"
                />
                <h3 className="text-lg font-medium">{data.judul}</h3>
                <p className="font-light leading-relaxed">{data.ket}</p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <a
              href="https://reqres.in/"
              target="_blank"
              className="px-4 py-2 font-medium text-white uppercase duration-100 ease-in rounded-sm hover:bg-rose-600 bg-rose-500"
            >
              Support Reqres
            </a>
          </div>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl text-white">
              A hosted REST-API ready to respond to your AJAX requests.
            </h2>
          </div>
        </div>
      </section>

      <main className="">
        <section className="container max-w-sm py-5 mx-auto mt-16 md:max-w-2xl lg:max-w-6xl">
          <div className="flex flex-col gap-10 mx-auto">
            <h2 className="text-xl text-center lg:text-2xl">
              It's All in the Details
            </h2>
            <hr className="max-w-6xl" />

            <div className="flex flex-col max-w-xs gap-5 mx-auto lg:gap-20 md:gap-10 md:flex-row md:max-w-lg lg:max-w-xl">
              <div className="flex flex-col gap-3 px-3 py-2 text-center rounded-md">
                <img src="./img/cloud.png" alt="" className="w-12 mx-auto" />
                <h4 className="font-medium">Hosted on Heroku</h4>
                <p>
                  Which means 99.99% Uptime SLA. All you need is the base URL,
                  and you're away:
                </p>
                <span className="px-2 mx-auto my-3 border rounded-md w-fit">
                  https://reqres.in/api/
                </span>
                <p>
                  The API is CORS enabled, so you can make requests right from
                  the browser, no matter what domain, or even from somewhere
                  like JSFiddle or JSBin.
                </p>
              </div>

              <div className="flex flex-col gap-3 px-3 py-2 text-center rounded-md">
                <img src="./img/code.png" alt="" className="w-12 mx-auto" />
                <h4 className="font-medium">Language agnostic</h4>
                <p>
                  A generic API that conforms to REST principles and accepts a
                  content type of
                </p>
                <span className="px-2 mx-auto my-3 border rounded-md w-fit">
                  application/json
                </span>
                <p>
                  Any endpoint that contains "resource" can be substituted with
                  anything you supply, ie. "products", "accounts", etc..the API
                  will just respond with various Pantone colours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DataHomePage;
