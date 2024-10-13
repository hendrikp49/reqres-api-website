import DetailUser from "../pages/DetailUser";
import HomePage from "../pages/HomePage";

export const route = [
  { path: "/", element: <HomePage /> },
  { path: "/detail-user/:id", element: <DetailUser /> },
];
