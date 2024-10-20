import AddUser from "../pages/AddUser";
import DetailUser from "../pages/DetailUser";
import EditUser from "../pages/EditUser";
import HomePage from "../pages/HomePage";
import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";

export const route = [
  { path: "/", element: <HomePage /> },
  {
    path: "/list-user",
    element: (
      <ProtectedRoutes>
        <ListUser />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/detail-user/:id",
    element: (
      <ProtectedRoutes>
        <DetailUser />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/edit-user/:id",
    element: (
      <ProtectedRoutes>
        <EditUser />
      </ProtectedRoutes>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/add-user",
    element: (
      <ProtectedRoutes>
        <AddUser />
      </ProtectedRoutes>
    ),
  },
];
