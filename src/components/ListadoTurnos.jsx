import React, { useState, useEffect, useMemo } from 'react';
import { createTurno, getTurnos } from '../utils/TurnosUtils.js';
import { getUser } from '../utils/UsersUtils.js';
import { FaCalendarCheck } from 'react-icons/fa';
import {
	updateDisponibilidad,
	getClase,
	getClases,
} from '../utils/ClasesUtils.js';
import Swal from 'sweetalert2';
import '../css/ListadoTurnos.css';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth } from '../context/AuthContext.jsx';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
dayjs().format();
import { Tabla } from './Tabla.jsx';

export const ListadoTurnos = () => {
	const [data, setData] = useState([]);
	const { register, handleSubmit } = useForm();
	const [turnoData, setTurnoData] = useState(new Date());
	const { currentUser } = useAuth();
	const user = currentUser.id;
	const [fecha, setFecha] = useState(new Date());

	const cargarClases = async () => {
		try {
			if (!turnoData.fecha) {
				// Si no hay fecha seleccionada, establece la fecha de hoy como default
				const today = new Date();
				const year = today.getFullYear();
				const month = String(today.getMonth() + 1).padStart(2, '0');
				const day = String(today.getDate()).padStart(2, '0');
				turnoData.fecha = `${day}/${month}/${year}`;
			}
			// Trae todas las clases
			const loadClases = await getClases();
			// Filtra las clases por fecha
			let clasesFiltradas = loadClases.filter((clase) => {
				return clase.fecha === turnoData.fecha;
			});
			// Filtra las clases por actividad, si se ha seleccionado alguna
			if (turnoData.actividad) {
				clasesFiltradas = clasesFiltradas.filter(
					(turno) => turno.actividad === turnoData.actividad
				);
			}
			setData(clasesFiltradas);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		cargarClases();
	}, [turnoData]);

	// Modificar los datos para mostrar "Cupo completo" en lugar de 0 en la columna disponibilidad
	const modifiedData = data.map((item) => ({
		...item,
		disponibilidad:
			item.disponibilidad === 0 ? 'Cupo completo' : item.disponibilidad,
	}));

	const columns = useMemo(
		() => [
			{
				header: 'Fecha',
				accessorKey: 'fecha',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Hora',
				accessorKey: 'hora',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Actividad',
				accessorKey: 'actividad',
				enableColumnOrdering: false,
				size: 100,
			},
			{
				header: 'Sede',
				accessorKey: 'sede',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Disponibilidad',
				accessorKey: 'disponibilidad',
				enableColumnOrdering: false,
				size: 50,
			},
		],
		[]
	);

	const actions = [
		{
			text: 'Reservar',
			icon: <FaCalendarCheck />,
			onClick: (row) => {
				if (row.original.disponibilidad > 0) {
					reservarTurno(
						row.original._id,
						row.original.disponibilidad,
						user
					);
				}
			},
		},
	];

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	const onSubmit = handleSubmit(async (values) => {
		try {
			const fechaSeleccionada = new Date(fecha);
			const dia = fechaSeleccionada.getDate();
			const mes = fechaSeleccionada.getMonth() + 1;
			const anio = fechaSeleccionada.getFullYear();
			const fechaFormateada = `${dia < 10 ? '0' + dia : dia}/${
				mes < 10 ? '0' + mes : mes
			}/${anio}`;
			const turnoData = {
				fecha: fechaFormateada,
				actividad: values.actividad,
			};
			setTurnoData(turnoData);
		} catch (error) {
			console.error(error);
		}
	});

	// funcion para confirmar el turno
	const reservarTurno = async (idClase, disponibilidad, user) => {
		try {
			const estaRegistrado = await verificarReservaUsuario(idClase, user);
			if (estaRegistrado) {
				Swal.fire({
					icon: 'error',
					title: 'Ya estas registrado en esta clase!',
					showConfirmButton: false,
					timer: 3000,
				});
				return;
			}
			const estaPagado = await verificarPagoUsuario(user);
			if (estaPagado === false) {
				Swal.fire({
					icon: 'error',
					title: 'Tienes cuotas impagas!. Debes estar al dia para reservar turnos',
					showConfirmButton: false,
					timer: 3000,
				});
				return;
			}
			const planaut = await verificarPlanUsuario(user);
			if (planaut === false) {
				Swal.fire({
					icon: 'error',
					title: 'El usuario no tiene abonado ninguno de los planes habilitados para clases digiridas',
					showConfirmButton: false,
					timer: 3000,
				});
				return;
			}

			const result = await Swal.fire({
				title: 'Confirmas la reserva del turno?',
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Sí, confirmar',
				cancelButtonText: 'Cancelar',
			});
			if (result.isConfirmed) {
				await crearTurno(idClase);
				await actualizarDisponibilidad(idClase, disponibilidad);
				Swal.fire({
					icon: 'success',
					title: 'Turno confirmado!. Te esperamos!',
					showConfirmButton: false,
					timer: 3000,
				});
			}
			cargarClases();
		} catch (error) {
			console.error('Error al confirmar el turno:', error);
		}
	};

	// Funcion para verificar si el usuario tiene cuotas adeudadas
	const verificarPagoUsuario = async (user) => {
		try {
			const usuario = await getUser(user);
			const pagosUsuario = usuario.pagos;
			const fechaActual = new Date();
			// Busca algun pago inferior a 31 dias
			const pagoReciente = pagosUsuario.some((pago) => {
				// Parsea la fecha de pago en el formato "dd/mm/yyyy" a un objeto Date
				const partesFecha = pago.fechapago.split('/');
				const dia = parseInt(partesFecha[0], 10);
				const mes = parseInt(partesFecha[1], 10) - 1;
				const anio = parseInt(partesFecha[2], 10);
				const fechaPago = new Date(anio, mes, dia);
				// Calcula la diferencia en milisegundos
				const diferenciaMilisegundos =
					fechaActual.getTime() - fechaPago.getTime();
				// Convierte la diferencia a días
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

	// Funcion para verificar si el usuario ya está registrado en la clase seleccionada
	const verificarReservaUsuario = async (idClase, user) => {
		try {
			const usuario = await getUser(user);
			const idUser = usuario._id;
			const turnos = await getTurnos();
			// Itera sobre los turnos
			const turnoRegistrado = turnos.find(
				(turno) => turno.idClase === idClase && turno.idUser === idUser
			);
			return turnoRegistrado !== undefined;
		} catch (error) {
			console.error('Error al verificar reserva del usuario:', error);
		}
	};

	const verificarPlanUsuario = async (user) => {
		try {
			const usuario = await getUser(user);
			// Verificar si se encontraron datos del usuario
			if (!usuario.pagos) {
				return false;
			}
			const planesDeseados = ['Power', 'Classic'];
			// Verificar si el ultimo pago tiene uno de los planes autorizados
			const ultimoPago = usuario.pagos[usuario.pagos.length - 1];
			const tienePlanDeseado = planesDeseados.includes(ultimoPago.plan);
			if (!tienePlanDeseado) {
				return false;
			}
			return true;
		} catch (error) {
			console.error('Error al verificar el plan del usuario:', error);
			return false;
		}
	};

	// Funcion para crear turno con fecha y actividad seleccionada
	const crearTurno = async (idClase) => {
		const claseSeleccionada = await getClase(idClase);
		await createTurno(claseSeleccionada, user);
	};

	// Función para actualizar la disponibilidad de la clase
	const actualizarDisponibilidad = async (idClase, disponibilidad) => {
		try {
			const nuevaDisponibilidad = disponibilidad - 1;
			await updateDisponibilidad(idClase, {
				disponibilidad: nuevaDisponibilidad,
			});
		} catch (error) {
			console.error('Error al actualizar la disponibilidad:', error);
		}
	};

	return (
		<div>
			<div className='busqueda'>
				<h2 className='titleagusu'>
					Busca tu clase por fecha y/o actividad
				</h2>
				<Form
					className='Formcarga'
					onSubmit={onSubmit}
					method='post'
					encType='multipart/form-data'>
					<Form.Group id='fecha'>
						<LocalizationProvider
							dateAdapter={AdapterDayjs}
							adapterLocale='es-mx'>
							<DemoContainer components={['DatePicker']}>
								<DatePicker
									className='compdatepicker'
									defaultValue={dayjs()}
									label='Selecciona la fecha...'
									inputFormat='DD/MM/YYYY'
									formatDensity='spacious'
									disablePast={true}
									selected={fecha}
									onChange={(fecha) => setFecha(fecha)}
								/>
							</DemoContainer>
						</LocalizationProvider>
					</Form.Group>

					<Form.Group id='actividad'>
						<select
							className='inputcarga'
							aria-label='Default select'
							{...register('actividad')}>
							<option value=''>Selecciona una actividad...</option>
							<option value='Crossfit'>Crossfit</option>
							<option value='Funcional'>Funcional</option>
							<option value='Boxeo'>Boxeo</option>
							<option value='Yoga'>Yoga</option>
							<option value='Spinning'>Spinning</option>
							<option value='Zumba'>Zumba</option>
							<option value='Musculacion'>Musculacion</option>
						</select>
					</Form.Group>

					<Form.Group className='botonescarga' id='input'>
						<button className='botonbusqueda' type='submit'>
							<i className='iconavbar fa-brands fa-searchengin'></i>
							Buscar
						</button>
					</Form.Group>
				</Form>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='table-responsive'>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Tabla
						columns={columns}
						data={modifiedData}
						actions={actions}
						reservarTurno={reservarTurno}
						user={user}
					/>
				</ThemeProvider>
			</div>
		</div>
	);
};
