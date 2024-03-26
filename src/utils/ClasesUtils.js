import { apiURL } from '/api/apiURL.js';

export const getClases = async () => {
	try {
		const res = await apiURL.get('/api/clases', {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getClase = async (id) => {
	try {
		const res = await apiURL.get(`/api/clases/${id}`, {
			withCredentials: true,
		});
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

export const deleteClase = async (id) => {

	try {
		const res = await apiURL.delete(`/api/clases/${id}`, {
			withCredentials: true,
		});
		console.log(res)
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

//se altera la ruta para el update de la clase /update - falta prueba
export const updateClase = async (id, values) => {
	try {
		const res = await apiURL.put(`/api/clases/update/${id}`, values, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

//crear clase

export const createClase = async (values) => {
	try {
		const res = await apiURL.post('/api/clases', values, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
