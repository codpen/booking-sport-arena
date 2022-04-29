import axios from 'axios';
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IconCard } from "../components/Card";
import Layout from "../components/Layout";
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

	useEffect(() => {
		fetchVenue();
		// eslint-disable-next-line
	}, []);

	const fetchVenue = async () => {
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
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
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
						{/* description */}
						<div className="my-3">
							<h4 className="text-xl font-bold">Description</h4>
							<p>
								{description ? description : "No description"}
							</p>
						</div>
						{/* facility */}
						<div className="my-3">
							<h4 className="text-xl font-bold">Facility</h4>
							{facility.map((item) => (
								<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-2">
									<IconCard
										icon={item.icon_name}
										name={item.name}
									/>
								</div>
							))}
						</div>
					</div>
					{/* Schedule */}
					{/* maybe MUI Table */}
					<div className="basis-4/12">
						{/* Operational */}
						<div className="my-3">
							<h4 className="text-xl font-bold">
								Operational Hours
							</h4>
							{/* table */}
							<table className="table-fixed w-full my-3">
								<thead className="bg-teal-500 text-white">
									<tr>
										<th className="px-4 py-2">Day</th>
										<th className="px-4 py-2">Hour</th>
									</tr>
								</thead>
								<tbody className="text-center">
									<tr>
										<td className="border px-4 py-2">
											Monday
										</td>
										<td className="border px-4 py-2">
											{moment(openHour).format("H:mm")} -{" "}
											{moment(closeHour).format("H:mm")}
										</td>
									</tr>
								</tbody>
							</table>
							<h6 className="text-lg my-1">
								Rp. {price.toLocaleString()} / Hour
							</h6>
						</div>
						{/* Information */}
						<div className="my-3">
							<h4 className="text-xl font-bold">Information</h4>
							<h6 className="text-lg my-1">{address}</h6>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
