import { apiURL } from '/api/apiURL.js';

export const getUser = async (id) => {
	try {
		const res = await apiURL.get(`/api/users/${id}`, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateUser = async (id, values) => {
	try {
		const res = await apiURL.put(`/api/users/${id}`, values, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};


