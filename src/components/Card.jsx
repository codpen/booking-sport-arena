import React from "react";
import moment from "moment";

export function CardLoading(item) {
	return (
		<>
			<div key={item.id} className="">
				<div className="rounded-2xl animate-pulse">
					<div className="h-40 bg-gray-400 rounded-md"></div>
					<div className="text-left m-2">
						<div className="w-2/3 bg-gray-400 h-6 rounded-md space-y-3 my-2">
							{" "}
							{item.venue_name}
						</div>
						<div className="w-1/3 bg-gray-400 h-6 rounded-md my-2">
							{item.location}
						</div>
						<h2 className="w-full bg-gray-400 h-6 rounded-md my-2">
							{item.price}
						</h2>
					</div>
				</div>
			</div>
		</>
	);
}

export function IconCard(item) {
	return (
		<>
			<div key={item.id} className="">
				<div
					id={`category-${item.id}`}
					className="rounded-3xl border-2 outline-gray-500 text-center p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4">
					<i className={`text-4xl p-2 ${item.icon}`} />
					<h5 className="font-bold uppercase">{item.name}</h5>
				</div>
			</div>
		</>
	);
}

export function WideCard(item) {
	return (
		<div
			className="flex flex-col md:flex-row p-2 gap-2 border-2 rounded-lg"
			id={item.id}>
			<div className="md:w-3/12 w-fit">
				<img className="rounded-md" src={item.image} alt="" />
			</div>
			<div className="flex md:w-9/12 flex-wrap justify-between">
				<div className="md:w-7/12 rounded-md py-2 px-2 md:px-5 flex flex-col my-auto lg:space-y-5 capitalize">
					<h4 className="text-2xl font-semibold">{item.name}</h4>
					<p className="text-lg">{item.location}</p>
					<p className="text-xl font-bold text-amber-500">{`Rp. ${item.price.toLocaleString()}`}</p>
				</div>
				<div className="md:w-5/12 rounded-md px-2 md:px-5 py-3 md:text-right flex flex-col space-y-2 capitalize">
					<p className="text-lg font-bold">
						{moment(item.date).format("LL")}
					</p>
					<p className=" font-semibold">{item.time}</p>
					<div className="">
						<button className="bg-gray-500 font-semibold text-white pointer-events-none rounded-md px-5 py-2">
							{item.status}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}