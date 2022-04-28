import axios from "axios";
import React, { useEffect, useState } from "react";
import { WideCard } from "../../components/Card";
import Layout from "../../components/Layout";

const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;

export default function BookingHistory() {
	document.title = "Booking History";
	const [histories, setHistories] = useState([]);

	useEffect(() => {
		fetchBookingHistory();
	}, []);

	const fetchBookingHistory = async () => {
		await axios
			.get(`${API}/histories`)
			.then((res) => {
				setHistories(res.data.data);
				console.log(histories);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Layout>
				<h3 className="my-5 text-3xl font-semibold uppercase text-center lg:text-left">
					Booking History
				</h3>
				<div className="">
					{histories.map((item) => (
						<WideCard
							key={item.venue.id}
							name={item.venue.venue_name}
							location={item.venue.location}
							image={
								item.venue.image
									? "https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
									: item.venue.image
							}
							price={item.venue.price}
							date={item.venue.date}
							time={item.venue.hours}
							status={item.venue.status}
						/>
					))}
				</div>
			</Layout>
		</>
	);
}
