// import React from "react";
import moment from "moment";
import "moment/locale/id";
import "moment/locale/en-sg";

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
					className="rounded-3xl border-2 bg-white shadow-md outline-gray-500 text-center p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4">
					<i className={`text-4xl p-2 ${item.icon}`} />
					<h5 className="font-bold uppercase">{item.name}</h5>
				</div>
			</div>
		</>
	);
}

export function WideCard(item) {
	moment.locale("en");
	return (
		<div
			key={item.id}
			className="flex flex-col md:flex-row p-2 gap-2 border-2 rounded-lg">
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

export function TimeSlots({ selectedTime, setSelectedTime }) {
	moment.locale("id");
	const startTime = moment().startOf("day").add(8, "hours");
	const endTime = moment().startOf("day").add(23, "hours");
	return (
		<div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
			{[...Array(endTime.diff(startTime, "hours") + 1)].map((_, i) => {
				const time = moment(startTime).add(i, "hours");
				const extraTime = moment(startTime).add(i + 1, "hours");
				return (
					<button
						id={`time-${time.format("HH:mm")}`}
						className={`text-center border py-5 rounded-lg lg:shadow-md ${
							selectedTime === time.format("LT")
								? "bg-teal-500 text-white"
								: "bg-white"
						}`}
						key={i}
						onClick={() => setSelectedTime(time.format("LT"))}>
						<h5 className="font-semibold text-lg xl:hidden">
							{time.format("LT")}
						</h5>
						<h5 className="font-semibold text-lg hidden xl:block">
							{time.format("LT")} - {extraTime.format("LT")}
						</h5>
					</button>
				);
			})}
		</div>
	);
}

export function DaySlots({ selectedDay, setSelectedDay }) {
	moment.locale("en");
	const today = moment().startOf("day");
	const week = moment(today).add(6, "days");
	return (
		<div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4">
			{[...Array(week.diff(today, "days") + 1)].map((_, i) => {
				const day = moment(today).add(i, "days");
				return (
					<button
						id={`day-${i + 1}`}
						className={`text-center border py-5 rounded-lg lg:shadow-md ${
							selectedDay.date === day.format("LL")
								? "bg-teal-500 text-white"
								: "bg-white"
						}`}
						key={i}
						onClick={() => {
							setSelectedDay({
								day: day.format("dddd"),
								date: day.format("LL"),
							});
						}}>
						<h6 className="font-semibold md:text-lg uppercase">
							{day.format("dddd")}
						</h6>
						<h3 className="font-bold text-4xl">
							{day.format("D")}
						</h3>
						<h5 className="text-xl font-semibold">
							{day.format("MMMM")}
						</h5>
					</button>
				);
			})}
		</div>
	);
}

export function DisplayBooking({ selectedDay, selectedTime, price }) {
	moment.locale("en");
	return (
		<div className="my-3 border rounded-lg py-5 px-10 shadow-sm bg-white">
			<h4 className="text-xl font-bold text-center lg:text-left capitalize border-b-2">
				Booking status
			</h4>
			<div className="font-semibold flex justify-between ">
				<div className="text-left text-lg">
					<h4 className="hidden lg:block">Date :</h4>
					<h4 className="hidden lg:block">Booking Time :</h4>
					<h4 className="hidden lg:block">Price :</h4>
				</div>
				<div className="text-right text-lg">
					<h4 className="">
						{`${selectedDay.day}, ${moment(selectedDay.date).format(
							"DD MMMM YYYY"
						)}`}
					</h4>
					<h4 className="">
						{selectedTime !== "00:00"
							? `${selectedTime} (1 hour)`
							: ""}
					</h4>
					<h4 className="">
						{selectedTime !== "00:00"
							? `Rp. ${price.toLocaleString()}`
							: ""}
					</h4>
				</div>
			</div>
		</div>
	);
}
