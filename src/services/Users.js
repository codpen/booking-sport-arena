// import * as api from '../config/api';
import axios from 'axios';

// const API = 'https://haudhi.site/users';

// export function checkAuth(token) {
// 	return api.get(`${API}/profile`, null, {
// 		Authorization: `Bearer ${token}`,
// 	});
// }

// v2
const API =
	'https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0/users';

export const fetchUser = async (props) => {
	await axios
		.get(`${API}/profile`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('user-info')}`,
			},
		})
		.then((res) => {
			const profile = res.data.data_user;
			props.setFullName(profile.fullname);
			props.setUsername(profile.username);
			props.setEmail(profile.email);
			props.setPhoneNumber(profile.phone_number);
			props.setBusinessName(profile.business_name);
			props.setProfileImage(profile.image);
			props.setUserId(profile.id);
		})
		.catch((err) => {
			console.log(err);
		});
};
