import axios from 'axios';

export const getOurDogs = () => {
	return axios.post(`http://localhost:3000/api/getOurDogs`);
};
