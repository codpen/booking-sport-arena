import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;

export const Venues = ({ venues, loading }) => {
	const navigate = useNavigate();
	if (loading) {
		return <h3>Loading...</h3>;
	}

	return (
		<>
			{venues.map((venue) => (
				<div
					key={venue.id}
					className="grid grid-cols-4 gap-10 my-10"
					onClick={() => {
						navigate(`/venues/${venue.id}`);
					}}>
					<div className="rounded-2xl">
						<img
							className="rounded-t-xl"
							src={
								venue.image.length < 10
									? 'https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
									: venue.image
							}
							alt=""
						/>
						<div className="text-left m-2">
							<h3 className="text-xl font-bold capitalize">
								{' '}
								{venue.venue_name}
							</h3>
							<h6 className="">{venue.location}</h6>

							<h2 className="text-amber-500 text-xl font-semibold">
								Rp. {venue.price.toLocaleString()}
							</h2>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export function ListVenue() {
	const [venues, setVenues] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [venuesPerPage, setVenuesPerPage] = useState(12);

	useEffect(() => {
		fetchVenues();
	}, []);

	const fetchVenues = async () => {
		setLoading(true);
		await axios
			// `${API}/venues?page=${currentPage}&limit=${venuesPerPage}`
			.get(`${API}/venues`)
			.then((res) => {
				setVenues(res.data.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const indexOfLastVenue = currentPage * venuesPerPage;
	const indexOfFirstVenue = indexOfLastVenue - venuesPerPage;
	const currentVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue);

	return (
		<>
			<h4 className="uppercase text-2xl my-8 text-teal-500 font-bold text-center">
				LIST ARENA
			</h4>
			<Venues venues={currentVenues} loading={loading} />
		</>
	);
}
