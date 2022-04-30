import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from "../pages/AdminDashboard";
import App from "../pages/App";
import Venue from "../pages/Detail";
import Login from "../pages/Login";
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
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/user/history" element={<BookingHistory />} />
				<Route path="/payment" element={<Payment />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
