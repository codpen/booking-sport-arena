import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { ResponsiveDrawer } from "../../components/Drawer";
import axios from "axios";
import moment from "moment";

export default function Owner() {
	const [bookingData, setBookingData] = useState([]);
	const [status, setStatus] = useState("booked");
	const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;

	const fetchBookingData = async () => {
		axios
			.get(`${API}/owner/history`)
			.then((res) => {
				setBookingData(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetchBookingData();
	}, []);

	return (
		<>
			<ResponsiveDrawer>
				<p className="text-xl my-2 font-semibold">Owner Dashboard</p>
				{bookingData.map((data) => {
					return (
						<DataTable
							key={data.id}
							rows={[
								{
									id: data.id,
									day: moment(data.venue.date).format("dddd"),
									date: moment(data.venue.date).format(
										"DD MMMM YYYY"
									),
									booking: data.venue.hours,
									user: data.user.fullname,
									// status: data.status,
									// status: data.status === "booked" ? "Booked" : "Cancelled",
									status: status,
								},
							]}
						/>
					);
				})}
			</ResponsiveDrawer>
		</>
	);
}
