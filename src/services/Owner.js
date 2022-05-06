import axios from "axios";

export const fetchBookingData = async (setBookingData) => {
	const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;
	await axios
		.get(`${API}/owner/history`)
		.then((res) => {
			setBookingData(res.data.data);
		})
		.catch((err) => {
			console.log(err);
		});
};
