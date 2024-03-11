import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "../components/forms/MuiLogin";
import Home from "../pages/Home";
import RegistrationForm from "../components/forms/Register";
import ProtectedRoute from "./protectedRoute";
import PageNotFound from "../pages/PageNotFound";
import LoginRoute from "./loginRoute";
import Admin from "../components/admin/Admin"


const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<LoginRoute />}>
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/register" element={<RegistrationForm />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/admin" exact element={<Admin />}></Route>
          </Route>
          <Route exact path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter;
