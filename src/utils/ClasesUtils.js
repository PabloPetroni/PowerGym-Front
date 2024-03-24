import { apiURL } from '/api/apiURL.js';

export const getClases = async () => {
	try {
		const res = await apiURL.get('/api/clases', );
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getClase = async (id) => {
	try {
		const res = await apiURL.get(`/api/clases/${id}`, { withCredentials: true });
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateDisponibilidad = async (id, disponibilidad) => {
	try {
		const res = await apiURL.put(`/api/clases/${id}`, disponibilidad, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
