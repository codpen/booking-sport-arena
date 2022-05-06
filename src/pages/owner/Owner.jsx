import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { ResponsiveDrawer } from "../../components/Drawer";
import { fetchBookingData } from "../../services/Owner";
import moment from "moment";

export default function Owner() {
	const [bookingData, setBookingData] = useState([]);
	const [status, setStatus] = useState("booked");
	document.title = "Hobiku | Owner Dashboard";

	const dashboardColumns = [
		{ field: "day", headerName: "Day", width: 150 },
		{
			field: "date",
			headerName: "Date",
			type: "date",
			width: 150,
		},
		{
			field: "booking",
			headerName: "Booking Time",
			width: 200,
		},
		{
			field: "user",
			headerName: "Booked by",
			width: 300,
		},
		{
			field: "status",
			headerName: "Status",
			width: 100,
			editable: true,
		},
	];
	useEffect(() => {
		fetchBookingData(setBookingData);
	}, []);

	return (
		<ResponsiveDrawer>
			<p className="text-xl my-2 font-semibold">Owner Dashboard</p>
			{bookingData.map((data) => {
				return (
					<DataTable
						key={data.id}
						columns={dashboardColumns}
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
	);
}