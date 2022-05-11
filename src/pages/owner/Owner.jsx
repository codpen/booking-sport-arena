import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { ResponsiveDrawer } from "../../components/Drawer";
import { fetchBookingData } from "../../services/Owner";
import moment from "moment";

export default function Owner() {
	const [bookingData, setBookingData] = useState([]);
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
			{bookingData.length > 0 ? (
				<DataTable
					key={bookingData.id}
					columns={dashboardColumns}
					rows={bookingData.map((data) => {
						return {
							id: data.id,
							day:
								data.payment !== null
									? moment(data.payment.date).format("dddd")
									: "",
							date:
								data.payment !== null
									? moment(data.payment.date).format(
											"DD MMMM YYYY"
									  )
									: "",
							booking:
								data.payment !== null
									? `${data.payment.start_date} - ${data.payment.end_date}`
									: "",
							user:
								data.payment !== null
									? data.payment[0].user.fullname
									: "",
							status:
								data.payment !== null
									? data.payment[0].status
									: "",
						};
					})}
				/>
			) : (
				<div className="flex justify-center border-2 rounded-md">
					<p className="text-xl my-2 font-semibold p-2">
						No booking data available
					</p>
				</div>
			)}
		</ResponsiveDrawer>
	);
}