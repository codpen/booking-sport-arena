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
import "../styles/App.css";

export default function Venue() {
	const params = useParams();
	const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;
	const [venueName, setVenueName] = useState("");
	const [description, setDescription] = useState("");
	const [venueImage, setVenueImage] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [facility, setFacility] = useState([]);
	const [openHour, setOpenHour] = useState("");
	const [closeHour, setCloseHour] = useState("");
	const [price, setPrice] = useState({});
	const [idVenue, setIdVenue] = useState("");
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [skeleton] = useState([1, 2, 3, 4]);

	const [selectedDay, setSelectedDay] = useState({
		day: moment().format("dddd"),
		date: moment().format("LL"),
	});
	const [selectedTime, setSelectedTime] = useState(
		moment().startOf("day").format("LT")
	);

	useEffect(() => {
		fetchVenue();
		// eslint-disable-next-line
	}, []);

	const fetchVenue = async () => {
		setLoading(true);
		const { venue_id } = params;
		await axios
			.get(`${API}/venues/${venue_id}`)
			.then((res) => {
				const venue = res.data.data;
				setVenueName(venue.name);
				setVenueImage(venue.image);
				setAddress(venue.address);
				setDescription(venue.description);
				setCity(venue.city);
				setFacility(venue.facility);
				setOpenHour(venue.operational_hours.open_hour);
				setCloseHour(venue.operational_hours.close_hour);
				setPrice(venue.operational_hours.price);
				document.title = venue.name;
				setIdVenue(venue.id);
				setLoading(false);
			})
			.catch((err) => {
				errorMessage(err);
			});
	};
	const bookNow = async (e) => {
		e.preventDefault();
		const getToken = localStorage.getItem("user-info");
		const token = Object.values(JSON.parse(getToken)).toString();
		const startTime = moment(selectedTime, "HH:mm").clone();
		const endTime = moment(selectedTime, "HH:mm").clone().add(1, "hours");
		const booking = {
			venue_id: idVenue,
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
				navigate("/payment");
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
					backgroundImage: `url(${venueImage})`,
				}}>
				<div className="cover h-32 md:h-48 lg:h-72">
					<div className="h-full grid gap-4 content-center"></div>
				</div>
			</div>

			<div className="w-full border-b-2 my-5">
				<h3 className="text-3xl capitalize font-semibold">
					{venueName}
				</h3>
				<h4 className="text-lg capitalize text-teal-500 indent-2">
					{city}
				</h4>
			</div>
			<div className="flex mb-4 flex-col lg:flex-row">
				<div className="basis-8/12">
					<div className="my-3">
						<h4 className="text-xl font-bold">Description</h4>
						<p>{description ? description : "No description"}</p>
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
								<tr>
									{/* jika ada datanya mungkin akan diganti ke map */}
									<td className="border px-4 py-2">
										{moment(openHour).format("dddd")}
									</td>
									<td className="border px-4 py-2">
										{moment(openHour).format("H:mm")} -{" "}
										{moment(closeHour).format("H:mm")}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="my-3">
						<h4 className="text-xl font-bold">Information</h4>
						<h6 className="text-lg my-1">{address}</h6>
					</div>
				</div>
			</div>

			<div className="w-full my-5">
				<div className="my-3">
					<h4 className="text-xl font-bold">Facility</h4>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 my-2">
						{loading
							? skeleton.map((item) => <IconLoading key={item} />)
							: facility.map((item) => (
									<div key={item.id}>
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
