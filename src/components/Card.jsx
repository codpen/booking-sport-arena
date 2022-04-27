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
