import { apiURL } from '/api/apiURL.js';

export const getTurnos = async () => {
	try {
		const token =localStorage.getItem("token")
		const res = await apiURL.get('/api/turnos', {
			headers:{"x-token":token}
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const createTurno = async (turnoSeleccionado, user) => {
	const datosSolicitud = {
		turnoSeleccionado,
		user,
	};
	try {
		const token =localStorage.getItem("token")
		const res = await apiURL.post('/api/turnos', datosSolicitud, {
			headers:{"x-token":token}
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteTurno = async (id) => {
	try {
		const token =localStorage.getItem("token")
		const res = await apiURL.delete(`/api/turnos/${id}`, {
			headers:{"x-token":token}
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
