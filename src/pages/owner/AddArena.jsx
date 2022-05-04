import React, { useState } from "react";
import { ResponsiveDrawer } from "../../components/Drawer";
import { InputText } from "../../components/InputText";

export default function CreateArena() {
	const [venueName, setVenueName] = useState("");
	const [details, setDetails] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");

	return (
		<>
			<ResponsiveDrawer>
				<form>
					<div className="flex flex-wrap mx-3 mb-6">
						<div className="w-full px-3 lg:px-10">
							<h6 className="my-3">Venue Name</h6>
							<InputText
								id="input-arena-name"
								type="text"
								placeholder="Enter venue name"
								value={venueName}
								onChange={(e) => setVenueName(e.target.value)}
							/>
						</div>
						<div className="w-full px-3 lg:px-10">
							<h6 className="my-3">Detail Venue</h6>
							<textarea
								className="border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
								type="text"
								id="input-business-description"
								placeholder="Business Description"
								value={details}
								onChange={(e) => setDetails(e.target.value)}
								cols="30"
								rows="5"
							/>
						</div>
						<div className="w-full px-3 lg:px-10">
							<h6 className="my-3">Address</h6>
							<div className="flex md:flex-wrap flex-col gap-y-2 md:flex-row md:gap-0">
								<InputText
									id="input-arena-address"
									type="text"
									className="md:w-6/12 px-3"
									placeholder="Jln. "
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
								<div className="md:w-1/12 px-3"></div>
								<InputText
									id="input-arena-city"
									type="text"
									className="md:w-5/12 px-3"
									placeholder="City name"
									value={city}
									onChange={(e) => setCity(e.target.value)}
								/>
							</div>
						</div>
						<div className="w-full px-3 lg:px-10">
							<h6 className="my-3">Categories</h6>
						</div>
					</div>
				</form>
			</ResponsiveDrawer>
		</>
	);
}
