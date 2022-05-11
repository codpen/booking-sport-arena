import axios from "axios";
import React, { useEffect, useState } from "react";
import { WideCard } from "../../components/Card";
import Layout from "../../components/Layout";
import { errorMessage } from "../../functions/Alert";
import { API, statusLogin } from "../../services/Users";
export default function BookingHistory() {
	document.title = "Booking History";
	const [histories, setHistories] = useState([]);

	useEffect(() => {
		fetchBookingHistory();
		// eslint-disable-next-line
	}, []);

	const fetchBookingHistory = async () => {
		const token = statusLogin();
		await axios
			.get(`${API}/histories`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				setHistories(res.data.data);
			})
			.catch((err) => {
				errorMessage(err);
			});
	};

	return (
		<>
			<Layout>
				<h3 className="my-5 text-3xl font-semibold uppercase text-center lg:text-left">
					Booking History
				</h3>
				<div className="grid grid-flow-row gap-5">
					{histories.map((item) => (
						<div key={item.id}>
							<WideCard
								name={item.venue.name}
								location={item.venue.location}
								image={item.venue.image}
								price={item.venue.price}
								date={item.venue.day}
								start={item.venue.start_date}
								end={item.venue.end_date}
								status={item.venue.status}
							/>
						</div>
					))}
				</div>
			</Layout>
		</>
	);
}
