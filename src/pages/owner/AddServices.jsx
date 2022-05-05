import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	AddFacilities,
	CheckDay,
	InputText,
	PickTime,
} from "../../components/InputText";
import { LayoutOwner } from "../../components/Layout";
import Button from "../../components/Buttons";
import moment from "moment";
import axios from "axios";
import {
	minimumFacility,
	notForFree,
	minimumDay,
	timeError,
	successMessage,
	errorMessage,
} from "../../functions/Alert";
import { statusLogin } from "../../services/Users";

export default function AddServices() {
	document.title = "Create Arena";
	const [days, setDays] = useState([]);
	const [open, setOpen] = useState(new Date());
	const [close, setClose] = useState(new Date());
	const [price, setPrice] = useState(0);
	const [facilities, setFacilities] = useState([]);
	// venue id ?
	const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;
	const token = statusLogin();
	const navigate = useNavigate();

	const submitButton = (e) => {
		e.preventDefault();
		if (price === 0 || price === "" || price === "0") {
			notForFree();
		} else if (price < 0) {
			notForFree();
		} else if (close < open) {
			timeError();
		} else if (days.length === 0) {
			minimumDay();
		} else if (facilities.length === 0) {
			minimumFacility();
		} else if (days && open && close && price && facilities) {
			const operationalNotes = {
				// venue_id: "",
				days: days,
				open_hours: moment(open).format("HH:mm"),
				close_hours: moment(close).format("HH:mm"),
				price: parseInt(price),
				facility: facilities,
			};
			axios
				.post(`${API}/venues/step2`, operationalNotes, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					successMessage(res);
					navigate("/owner");
				})
				.catch((err) => {
					errorMessage(err);
				});
		}
	};

	return (
		<LayoutOwner>
			<form>
				<div className="flex flex-wrap mx-3 mb-6">
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Operational Hours (
							<strong className="text-amber-500">*</strong>)
						</h6>
						<div className="border-2 w-auto rounded-md px-3 py-1 md:py-2 md:px-5">
							<CheckDay value={days} setValue={setDays} />
						</div>
						<div className="w-auto flex flex-col md:flex-row rounded-md my-3">
							<div className="basis-1/2 md:border-2 md:mr-2 md:rounded-md flex justify-between">
								<h6 className="basis-3/4 capitalize my-auto md:px-5">
									Open:
								</h6>
								<PickTime value={open} setValue={setOpen} />
							</div>
							<div className="basis-1/2 md:border-2 md:ml-2 md:rounded-md flex justify-between">
								<h6 className="basis-3/4 capitalize my-auto md:px-5">
									Closes:
								</h6>
								<PickTime value={close} setValue={setClose} />
							</div>
						</div>
						<div className="lg:w-1/2 w-full flex flex-row md:border-y-2 md:border-l-2 md:rounded-l-md md:mr-2 md:pr-2 my-3">
							<h6 className="w-1/2 my-auto py-1 md:py-2 lg:px-5">
								Booking Price (
								<strong className="text-amber-500">*</strong>) :
							</h6>
							<InputText
								id="price-per-hour"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
								className="text-right w-1/2"
								type="number"
								placeholder="20.000"
							/>
						</div>
					</div>
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Facilities (
							<strong className="text-amber-500">*</strong>)
						</h6>
						<div className="border-2 w-auto rounded-md px-3 py-1 md:py-2 md:px-5">
							<AddFacilities
								value={facilities}
								setValue={setFacilities}
							/>
						</div>
					</div>
					<div className="w-full flex justify-center md:justify-end my-2 lg:mx-10">
						<Button
							className="w-full md:w-28 md:px-10"
							onClick={(e) => submitButton(e)}
							variant="solid"
							type="submit"
							id="submit-button">
							Next
						</Button>
					</div>
				</div>
			</form>
		</LayoutOwner>
	);
}
