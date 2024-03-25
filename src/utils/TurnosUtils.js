import { apiURL } from '/api/apiURL.js';

export const getTurnos = async () => {
	try {
		const res = await apiURL.get('/api/turnos', { withCredentials: true });
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
		const res = await apiURL.post('/api/turnos', datosSolicitud, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteTurno = async (id) => {
	try {
		const res = await apiURL.delete(`/api/turnos/${id}`, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
