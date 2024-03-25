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

export const getUsers = async (id) => {
	try {
		const res = await apiURL.get(`/api/users`, {
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

export const deleteUser = async (id) => {
	try {
		const res = await apiURL.delete(`/api/users/${id}`, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const createPago = async (pago, id) => {
	try {
		const response = await apiURL.post(`/api/users/${id}/pagos`, pago, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
