import React, { useState, useEffect, useMemo } from 'react';
import { createTurno, getTurnos } from '../utils/TurnosUtils.js';
import { getUser } from '../utils/UsersUtils.js';
import {
	updateDisponibilidad,
	getClase,
	getClases,
	deleteClase,
} from '../utils/ClasesUtils.js';
import Swal from 'sweetalert2';
import '../css/ListadoClases.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
	MaterialReactTable,
	useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { useAuth } from '../context/AuthContext.jsx';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
dayjs().format();

export const ListadoClases = ({ fechaSeleccionada }) => {
	const [data, setData] = useState([]);
	const { currentUser } = useAuth();
	const displayName = currentUser.displayName;
	const user = currentUser.id;
	const navigate = useNavigate();

	const cargarClases = async () => {
		try {
			if (!fechaSeleccionada.fecha) {
				// Si no hay fecha seleccionada, establece la fecha de hoy como default
				const today = new Date();
				const year = today.getFullYear();
				const month = String(today.getMonth() + 1).padStart(2, '0');
				const day = String(today.getDate()).padStart(2, '0');
				fechaSeleccionada.fecha = `${day}/${month}/${year}`;
			}
			// Trae todas las clases
			const loadClases = await getClases();
			// Filtra las clases por fecha
			let clasesFiltradas = loadClases.filter((clase) => {
				return clase.fecha === fechaSeleccionada.fecha;
			});
			// Filtra las clases por actividad, si se ha seleccionado alguna
			if (fechaSeleccionada.actividad) {
				clasesFiltradas = clasesFiltradas.filter(
					(turno) => turno.actividad === fechaSeleccionada.actividad
				);
			}
			setData(clasesFiltradas);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		cargarClases();
	}, [fechaSeleccionada]);

	// funcion para confirmar el turno
	const reservarTurno = async (idClase, disponibilidad, user) => {
		try {
			const estaRegistrado = await verificarReservaUsuario(idClase, user);
			if (estaRegistrado) {
				Swal.fire({
					icon: 'error',
					title: 'Ya estas registrado en esta clase!',
					showConfirmButton: false,
					timer: 2500,
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
					timer: 2500,
				});
			}
			cargarClases();
		} catch (error) {
			console.error('Error al confirmar el turno:', error);
		}
	};

	// Funcion para verificar reserva de clases
	const verificarReservaUsuario = async (idClase, user) => {
		try {
			const usuario = await getUser(user);
			const idUser = usuario._id;
			const turnos = await getTurnos();
			// Itera sobre los turnos para verificar si el usuario ya está registrado en la clase seleccionada
			const turnoRegistrado = turnos.find(
				(turno) => turno.idClase === idClase && turno.idUser === idUser
			);
			return turnoRegistrado !== undefined;
		} catch (error) {
			console.error('Error al verificar reserva del usuario:', error);
		}
	};

	// Funcion para crear turno con fecha y actividad seleccionada
	const crearTurno = async (idClase) => {
		const claseSeleccionada = await getClase(idClase);
		await createTurno(claseSeleccionada, user);
	};

	// funcion para eliminar gastos
	async function borrarClase(id) {
		try {
			const result = await Swal.fire({
				title: '¿Estás seguro?',
				text: 'Confirmas la eliminacion de la clase',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#8f8e8b',
				confirmButtonText: 'Sí, eliminar',
				cancelButtonText: 'Cancelar',
			});
			if (result.isConfirmed) {
				await deleteClase(id);
				Swal.fire({
					icon: 'success',
					title: 'Gasto eliminado correctamente',
					showConfirmButton: false,
					timer: 1500,
				});

				//consutar Oscar
				//setData((prevData) => prevData.filter((gasto) => gasto._id !== id));
			}
		} catch (error) {
			console.error('Error al eliminar el gasto:', error);
		}
	}

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

	// Carga tabla
	const table = useMaterialReactTable({
		columns,
		data,
		enableColumnFilterModes: true,
		enableColumnOrdering: true,
		enableGlobalFilterModes: true,
		enableColumnPinning: true,
		enableRowActions: true,
		enableGrouping: true,
		paginationDisplayMode: 'pages',
		positionToolbarAlertBanner: 'bottom',
		localization: MRT_Localization_ES,
		muiSearchTextFieldProps: {
			size: 'medium',
			variant: 'outlined',
		},
		muiPaginationProps: {
			color: 'primary',
			rowsPerPageOptions: [5, 10, 20, 30],
			shape: 'rounded',
			variant: 'outlined',
		},
		renderRowActions: ({ row, table }) => (
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'nowrap',
					gap: '3px',
				}}>
				{/* botones de acciones - Michel */}
				<button
					className='btnreservar'
					color='primary'
					onClick={() => {
						navigate(`/editarclases/${row.original._id}`);
					}}>
					<i className='iconavbarCl fa fa-pencil' aria-hidden='true'></i>
				</button>

				<button
					className='btnreservar'
					color='primary'
					//llamado a la funcion
					onClick={() => borrarClase(row.original._id)}>
					<i className='iconavbarCl fa fa-trash-o' aria-hidden='true'></i>
				</button>
			</Box>
		),
	});
	const lightTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});

	return (
		<div>
			<div className='table-responsive'>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<MaterialReactTable table={table} />
				</ThemeProvider>
				<hr />
			</div>
		</div>
	);
};
