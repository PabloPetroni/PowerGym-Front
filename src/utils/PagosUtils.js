import { apiURL } from '/api/apiURL.js';

export const getPagos = async () => {
	try {
		const res = await apiURL.get('/api/pagos', { withCredentials: true });
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getPago = async (id) => {
	try {
		const res = await apiURL.get(`/api/pagos/${id}`, { withCredentials: true });
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

