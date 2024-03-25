import { apiURL } from '/api/apiURL.js';

export const getComentarios = async () => {
	try {
		const res = await apiURL.get('/api/comentarios', {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const createComentario = async (values) => {
	try {
		const res = await apiURL.post('/api/comentarios', values, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
