import { Navigate, Outlet } from "react-router-dom";

const LoginRoute = () => {
  return localStorage.getItem("token") ? <Navigate to="/" /> : <Outlet />
}
export default LoginRoute;
