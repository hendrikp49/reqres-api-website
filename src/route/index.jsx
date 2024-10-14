import AddUser from "../pages/AddUser";
import DetailUser from "../pages/DetailUser";
import EditUser from "../pages/EditUser";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const route = [
  { path: "/", element: <HomePage /> },
  { path: "/detail-user/:id", element: <DetailUser /> },
  { path: "/edit-user/:id", element: <EditUser /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/add-user", element: <AddUser /> },
];
