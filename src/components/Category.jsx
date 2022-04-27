import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;

export const Category = ({ categories }) => {
	return (
		<>
			{categories.map((category) => (
				<div
					key={category.id}
					className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
					<div className="rounded-3xl border-2 outline-gray-500 text-center p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4">
						{/* <i className={`text-6xl p-3 ${category.icon_name}`} /> */}
						<i className={`text-6xl p-3 fa-solid fa-basketball`} />
						<h5 className="text-lg">{category.name}</h5>
					</div>
				</div>
			))}
		</>
	);
};

export function ListCategory() {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		fetchCategory();
	}, []);

	const fetchCategory = async () => {
		await axios
			.get(`${API}/category`)
			.then((res) => {
				setCategory(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<h4 className="uppercase text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl  my-8 text-teal-500 font-bold text-center">
				Category
			</h4>
			<Category categories={category} />
		</>
	);
}
