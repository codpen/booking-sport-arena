import axios from 'axios';
// v2
const API =
	// 'https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0/users';
	`https://haudhi.site`;

export const fetchUser = async (props) => {
	const getToken = localStorage.getItem('user-info');
	const token = Object.values(JSON.parse(getToken)).toString();

	await axios
		.get(`${API}/users/profile`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			const profile = res.data.data;
			props.setFullName(profile.fullname);
			props.setUsername(profile.username);
			props.setEmail(profile.email);
			props.setPhoneNumber(profile.phone_number);
			props.setBusinessName(profile.business_name);
			props.setImage(profile.image);
			props.setUserId(profile.id);
		})
		.catch((err) => {
			console.log(err);
		});
};
