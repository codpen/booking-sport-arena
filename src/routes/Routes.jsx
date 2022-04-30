import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import App from "../pages/App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import Verify from "../pages/Verify";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
