import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminListOwner from "../pages/admin/AdminListOwner";
import AdminListUser from "../pages/admin/AdminListUser";
import AdminOwnerRequest from "../pages/admin/AdminOwnerRequest";

import AdminSetting from "../pages/admin/AdminSetting";
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
        <Route path="/admin" element={<AdminOwnerRequest />} />
        <Route path="/admin/setting" element={<AdminSetting />} />
        <Route path="/admin/list-user" element={<AdminListUser />} />
        <Route path="/admin/list-owner" element={<AdminListOwner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
