import axios from 'axios';
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Buttons";
import {
	IconCard,
	DaySlots,
	TimeSlots,
	DisplayBooking,
	IconLoading,
} from "../components/Card";
import Layout from "../components/Layout";
import { errorMessage, successMessage } from "../functions/Alert";
import { statusLogin } from "../services/Users";
import "../styles/App.css";
import { API } from "../services/Users";

export default function Venue() {
	const params = useParams();
	const [venues, setVenues] = useState([]);
	const [operational, setOperational] = useState([]);
	const [open, setOpen] = useState("");
	const [close, setClose] = useState("");
	const [facilities, setFacilities] = useState([]);
	const [price, setPrice] = useState(0);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [skeleton] = useState([1, 2, 3, 4]);
	// const [linkPayment, setLinkPayment] = useState("");

	const [selectedDay, setSelectedDay] = useState({
		day: moment().format("dddd"),
		date: moment().format("LL"),
	});
	const [selectedTime, setSelectedTime] = useState(
		moment().startOf("day").format("LT")
	);

	useEffect(() => {
		fetchVenues();
		// eslint-disable-next-line
	}, []);
	const fetchVenues = async () => {
		setLoading(true);
		const { venue_id } = params;
		await axios
			.get(`${API}/venues/${venue_id}`)
			.then((res) => {
				setLoading(false);
				setVenues(res.data.data);
				setOperational(res.data.data.operational_hours);
				setFacilities(res.data.data.facility);
				setPrice(operational[0].price);
				setOpen(parseInt(operational[0].open_hour));
				setClose(parseInt(operational[0].close_hour));
				document.title = `Hobiku | ${res.data.data.name}`;
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	};

	const bookNow = async (e) => {
		e.preventDefault();
		const token = statusLogin();
		const startTime = moment(selectedTime, "HH:mm").clone();
		const endTime = moment(selectedTime, "HH:mm").clone().add(1, "hours");
		const booking = {
			venue_id: venues.id,
			price: price,
			status: "pending",
			start_date: startTime,
			end_date: endTime,
		};
		await axios
			.post(`${API}/booking`, booking, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				successMessage(res);
				console.log(res);
				// nunggu response res.link (or anyhing else)
				// window.location.href = res.data.data.link;
				navigate("/");
			})
			.catch((err) => {
				errorMessage(err);
			});
	};
	return (
		<Layout>
			<div
				className="h-32 md:h-48 lg:h-72 rounded-xl bg-no-repeat bg-cover bg-center"
				style={{
					backgroundImage: `url(${venues.image})`,
				}}>
				<div className="cover h-32 md:h-48 lg:h-72">
					<div className="h-full grid gap-4 content-center"></div>
				</div>
			</div>

			<div className="w-full capitalize border-b-2 my-5">
				<h3 className="text-3xl font-semibold">{venues.name}</h3>
				<h4 className="text-lg text-teal-500">{venues.city}</h4>
			</div>
			<div className="flex mb-4 flex-col lg:flex-row">
				<div className="basis-8/12">
					<div className="my-3">
						<h4 className="text-xl font-bold">Description</h4>
						<p>
							{venues.description
								? venues.description
								: "No Description"}
						</p>
					</div>
				</div>
				<div className="basis-4/12">
					<div className="my-3">
						<h4 className="text-xl font-bold">Operational Hours</h4>
						<table className="table-fixed w-full my-3">
							<thead className="bg-teal-500 text-white">
								<tr>
									<th className="px-4 py-2">Day</th>
									<th className="px-4 py-2">Hour</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{operational.map((item, index) => (
									<tr
										className="border capitalize"
										key={index}>
										<td className="px-4 py-2">
											{item.day}
										</td>
										<td className="px-4 py-2">{`${item.open_hour} - ${item.close_hour}`}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="my-3">
						<h4 className="text-xl font-bold">Address</h4>
						<h6 className="text-lg my-1">{venues.address}</h6>
					</div>
				</div>
			</div>

			<div className="w-full my-5">
				<div className="my-3">
					<h4 className="text-xl font-bold">Facility</h4>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 my-2">
						{loading
							? skeleton.map((item) => <IconLoading key={item} />)
							: facilities.map((item, index) => (
									<div key={index}>
										<IconCard
											icon={item.icon_name}
											name={item.name}
										/>
									</div>
							  ))}
					</div>
				</div>
			</div>

			<div className="w-full my-5">
				<div className="my-3 space-y-5">
					<div className="space-y-2">
						<h4 className="text-xl font-bold">Booking Schedule</h4>
						<h5 className="text-lg">
							( Please select the date and time you want to book )
						</h5>
					</div>
					<DaySlots
						selectedDay={selectedDay}
						setSelectedDay={setSelectedDay}
					/>
					<div className="border-y-2 py-5">
						<TimeSlots
							selectedTime={selectedTime}
							setSelectedTime={setSelectedTime}
							open_hour={open ? open : 10}
							close_hour={close ? close : 23}
						/>
					</div>
					<DisplayBooking
						selectedDay={selectedDay}
						selectedTime={selectedTime}
						price={price}
					/>
				</div>

				<div className="flex justify-center">
					<Button
						variant="solid"
						id="booking-button"
						className="text-center"
						onClick={(e) => bookNow(e)}>
						Book Now
					</Button>
				</div>
			</div>
		</Layout>
	);
}