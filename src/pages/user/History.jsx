import axios from "axios";
import React, { useEffect, useState } from "react";
import { WideCard } from "../../components/Card";
import Layout from "../../components/Layout";
import { errorMessage } from "../../functions/Alert";
import { API, statusLogin } from "../../services/Users";
import moment from "moment";
import "moment/locale/id";
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
					{histories.length > 0 ? (
						histories.map((history) => {
							return (
								<WideCard
									key={history.id}
									name={history.venue.name}
									location={history.venue.location}
									image={history.venue.image}
									price={history.venue.price}
									date={moment(history.venue.day).format(
										"DD MMMM YYYY"
									)}
									start={moment
										.utc(history.venue.start_date)
										.format("HH:mm")}
									end={moment
										.utc(history.venue.end_date)
										.format("HH:mm")}
									status={history.venue.status}
								/>
							);
						})
					) : (
						<div className="text-center">
							<p className="text-xl font-semibold">
								You don't have any booking history
							</p>
						</div>
					)}
				</div>
			</Layout>
		</>
	);
}
