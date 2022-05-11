import React, { useEffect, useState } from "react";
import { ResponsiveDrawer } from "../../components/Drawer";
import { fetchBookingData } from "../../services/Owner";
import DataTable from "../../components/DataTable";
import moment from "moment";

export default function Transaction() {
	const [bookingData, setBookingData] = useState([]);
	document.title = "Transaction History";

	useEffect(() => {
		fetchBookingData(setBookingData);
	}, []);
	const historyColumns = [
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
			width: 250,
		},
		{
			field: "price",
			headerName: "Price",
			type: "number",
			width: 200,
		},
	];
	function countTotal() {
		let total = 0;
		for (let i = 0; i < bookingData.length; i++) {
			total += bookingData[i].payment.total_price;
		}
		return total;
	}

	return (
		<ResponsiveDrawer>
			<p className="text-xl my-2 font-semibold">Transaction History</p>
			{bookingData.length > 0 ? (
				<DataTable
					key={bookingData.id}
					columns={historyColumns}
					rows={bookingData.map((data) => {
						return {
							id: data.id,
							day: moment(data.payment.date).format("dddd"),
							date: moment(data.payment.date).format(
								"DD MMMM YYYY"
							),
							booking: `${data.payment.start_date} - ${data.payment.end_date}`,
							user: data.payment[0].user.fullname,
							price: data.payment.total_price,
						};
					})}
				/>
			) : (
				<div className="flex justify-center border-2 rounded-md">
					<p className="text-xl my-2 font-semibold p-2">
						No Transaction History
					</p>
				</div>
			)}
			<div className="flex justify-between my-5">
				<p className="text-xl font-semibold">Total:</p>
				<p className="text-xl font-semibold">
					Rp. {countTotal().toLocaleString()}
				</p>
			</div>
		</ResponsiveDrawer>
	);
}
