import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Venue() {
	const params = useParams();
	const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;
	const [venueName, setVenueName] = useState('');
	const [venueImage, setVenueImage] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [facility, setFacility] = useState([]);
	const [category, setCategory] = useState([]);
	const [operational, setOperational] = useState({});

	useEffect(() => {
		fetchVenue();
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
				setCity(venue.city);
				setFacility(venue.facility);
				setCategory(venue.category);
				setOperational(venue.operational);
				document.title = venue.name;
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<Layout>{address}</Layout>
		</div>
	);
}
