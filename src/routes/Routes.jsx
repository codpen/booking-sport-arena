import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminOwnerList from "../pages/admin/AdminOwnerList";
import AdminUserList from "../pages/admin/AdminUserList";
import AdminOwnerRequest from "../pages/admin/AdminOwnerRequest";
import AdminSetting from "../pages/admin/AdminSetting";
import App from "../pages/App";
import Venue from "../pages/Detail";
import Login from "../pages/Login";
import CreateArena from "../pages/owner/AddArena";
import AddServices from "../pages/owner/AddServices";
import Transaction from "../pages/owner/History";
import Owner from "../pages/owner/Owner";
import Register from "../pages/Register";
import User from "../pages/User";
import BookingHistory from "../pages/user/History";
import Payment from "../pages/user/Payment";
import Verify from "../pages/user/Verify";

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/user" element={<User />} />
				<Route path="/verify" element={<Verify />} />
				<Route path="/venues/:venue_id" element={<Venue />} />
				<Route path="/admin" element={<AdminOwnerRequest />} />
				<Route path="/user/history" element={<BookingHistory />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/admin/setting" element={<AdminSetting />} />
				<Route path="/admin/list-user" element={<AdminUserList />} />
				<Route path="/admin/list-owner" element={<AdminOwnerList />} />
				<Route path="/owner" element={<Owner />} />
				<Route path="/owner/create" element={<CreateArena />} />
				<Route path="/owner/edit/:venue_id" element={<CreateArena />} />
				<Route path="/owner/services" element={<AddServices />} />
				<Route
					path="/owner/edit/:venue_id/services"
					element={<AddServices />}
				/>
				<Route path="/owner/transaction" element={<Transaction />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
