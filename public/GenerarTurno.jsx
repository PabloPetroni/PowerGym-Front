import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { createTurno, getTurnos } from '../src/utils/TurnosUtils.js';
import { getUser } from '../src/utils/UsersUtils.js';
import { updateDisponibilidad, getClase } from '../src/utils/ClasesUtils.js';

const GenerarTurno = () => {
	const [user, setUser] = useState('65e215ee04166531ce18a8e3');

	// Función para confirmar el turno
	const reservarTurno = async (idClase, disponibilidad, user) => {
		try {
			const estaRegistrado = await verificarReservaUsuario(idClase, user);
			if (estaRegistrado) {
				mostrarAlerta('error', 'Ya estás registrado en esta clase!');
				return;
			}
			const estaPagado = await verificarPagoUsuario(user);
			if (!estaPagado) {
				mostrarAlerta(
					'error',
					'Tienes cuotas impagas! Debes estar al día para reservar turnos'
				);
				return;
			}

			const result = await mostrarConfirmacion(
				'Confirmas la reserva del turno?'
			);
			if (result.isConfirmed) {
				await crearTurno(idClase);
				await actualizarDisponibilidad(idClase, disponibilidad);
				mostrarAlerta('success', 'Turno confirmado! Te esperamos!');
			}
			cargarClases();
		} catch (error) {
			console.error('Error al confirmar el turno:', error);
		}
	};

	// Función para verificar si el usuario tiene cuotas adeudadas
	const verificarPagoUsuario = async (user) => {
		try {
			const usuario = await getUser(user);
			const pagosUsuario = usuario.pagos;
			const fechaActual = new Date();
			const pagoReciente = pagosUsuario.some((pago) => {
				const partesFecha = pago.fechapago.split('/');
				const fechaPago = new Date(
					partesFecha[2],
					partesFecha[1] - 1,
					partesFecha[0]
				);
				const diferenciaMilisegundos =
					fechaActual.getTime() - fechaPago.getTime();
				const diferenciaDias = Math.floor(
					diferenciaMilisegundos / (1000 * 60 * 60 * 24)
				);
				return diferenciaDias <= 31;
			});
			return pagoReciente;
		} catch (error) {
			console.error('Error al verificar pagos del usuario:', error);
			return false;
		}
	};

	// Función para verificar si el usuario ya está registrado en la clase seleccionada
	const verificarReservaUsuario = async (idClase, user) => {
		try {
			const usuario = await getUser(user);
			const idUser = usuario._id;
			const turnos = await getTurnos();
			const turnoRegistrado = turnos.find(
				(turno) => turno.idClase === idClase && turno.idUser === idUser
			);
			return turnoRegistrado !== undefined;
		} catch (error) {
			console.error('Error al verificar reserva del usuario:', error);
		}
	};

	// Función para crear turno con fecha y actividad seleccionada
	const crearTurno = async (idClase) => {
		const claseSeleccionada = await getClase(idClase);
		await createTurno(claseSeleccionada, user);
	};

	// Función para mostrar alerta utilizando SweetAlert
	const mostrarAlerta = (icon, title) => {
		Swal.fire({
			icon: icon,
			title: title,
			showConfirmButton: false,
			timer: 3000,
		});
	};

	// Función para mostrar confirmación utilizando SweetAlert
	const mostrarConfirmacion = async (title) => {
		return await Swal.fire({
			title: title,
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Sí, confirmar',
			cancelButtonText: 'Cancelar',
		});
	};

	// Función para cargar las clases
	const cargarClases = async () => {
		// Implementar la lógica para cargar las clases
	};

	useEffect(() => {
		cargarClases();
	}, []);

	return null;
};

export default GenerarTurno;
