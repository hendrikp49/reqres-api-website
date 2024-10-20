import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token_user");
  // State untuk mengontrol apakah menu terbuka atau tidak
  const [open, setOpen] = useState(false);

  // Fungsi untuk toggle menu
  const handleToggle = () => setOpen(!open);

  const handleLogout = () => {
    localStorage.removeItem("token_user");
  };

  // Mengontrol body overflow saat menu terbuka atau tertutup
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open, token]);

  return (
    <div className="relative z-10 shadow-sm bg-rose-50 shadow-neutral-500">
      <div className="flex items-center justify-between w-full max-w-xs py-4 mx-auto duration-200 ease-out sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
        {/* Logo */}
        <Link to="/">
          <h3 className="text-xl font-bold hover:animate-pulse">Reqres</h3>
        </Link>

        {/* Tombol Hamburger */}
        <button
          onClick={handleToggle}
          className="block md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu untuk desktop */}
        <div className="hidden md:gap-8 md:flex md:items-center">
          <Link to="/list-user">
            <span className=" hover:text-rose-500">Users</span>
          </Link>
          {token ? (
            <Link to="/login">
              <span
                onClick={handleLogout}
                className="px-4 py-2 duration-200 ease-out border rounded-lg hover:text-white hover:bg-rose-500 border-rose-500"
              >
                Logout
              </span>
            </Link>
          ) : (
            <Link to="/login">
              <span className="px-4 py-2 duration-200 ease-out border rounded-lg hover:text-white hover:bg-rose-500 border-rose-500">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Overlay latar belakang */}
      {open && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={handleToggle}
        ></div>
      )}

      {/* Hamburger menu yang muncul dari samping */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-20 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-3 py-5 mt-10 ">
          <a
            href="/list-user"
            className="w-full py-1 text-center text-gray-700 hover:text-rose-500"
          >
            Users
          </a>
          <a
            href="/login"
            className="w-4/5 py-1 mx-auto text-center text-white duration-200 ease-out rounded-lg bg-rose-500 hover:bg-rose-600"
          >
            Login
          </a>
        </div>
        <button
          onClick={handleToggle}
          className="absolute text-xl font-semibold top-2 right-4"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Navbar;
