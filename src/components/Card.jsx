import React from "react";

export function CardLoading(item) {
	return (
		<>
			<div key={item.id} className="">
				<div className="rounded-2xl animate-pulse">
					<div className="h-40 bg-gray-400 rounded-md"></div>
					<div className="text-left m-2">
						<div className="w-2/3 bg-gray-400 h-6 rounded-md space-y-3 my-2">
							{' '}
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
				<div className="rounded-3xl border-2 outline-gray-500 text-center p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4">
					<i className={`text-4xl p-2 ${item.icon}`} />
					<h5 className="font-bold uppercase">{item.name}</h5>
				</div>
			</div>
		</>
	);
}