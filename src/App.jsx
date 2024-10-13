import { route } from "./route";
import { useRoutes } from "react-router-dom";

export default function App() {
  const element = useRoutes(route);
  return element;
}
