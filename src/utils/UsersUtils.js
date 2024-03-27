import { apiURL } from '/api/apiURL.js';

export const getUser = async (id) => {
	try {
		const token =localStorage.getItem("token")
		const res = await apiURL.get(`/api/users/${id}`, {
			headers:{"x-token":token}
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getUsers = async (id) => {
	try {
		const token =localStorage.getItem("token")
		console.log(token)
		const res = await apiURL.get(`/api/users`, {
			headers:{"x-token":token}
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateUser = async (id, values) => {
	try {
		const token =localStorage.getItem("token")
		const res = await apiURL.put(`/api/users/${id}`, values, {
			headers:{"x-token":token}
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteUser = async (id) => {
	try {
		const token =localStorage.getItem("token")
		const res = await apiURL.delete(`/api/users/${id}`, {
			headers:{"x-token":token}
		});
		console.log(res)
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const createPago = async (pago, id) => {
	try {
		const token =localStorage.getItem("token")
		const response = await apiURL.post(`/api/users/${id}/pagos`, pago, {
			headers:{"x-token":token}
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
