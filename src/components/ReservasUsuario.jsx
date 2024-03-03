import React, { useState, useEffect, useMemo } from 'react';
import { getTurnos, deleteTurno } from '../utils/TurnosUtils.js';
import { updateDisponibilidad, getClase } from '../utils/ClasesUtils.js';
import Swal from 'sweetalert2';
import '../css/ListadoTurnos.css';
import {
	MaterialReactTable,
	useMaterialReactTable,
} from 'material-react-table';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { Link, useParams } from 'react-router-dom';

export const ReservasUsuario = () => {
	const [data, setData] = useState([]);
	// const { currentUser, logout } = useAuth({});
	const userId = '65e215ee04166531ce18a8e3';
	const displayName = 'Oscar Frias Viñals';
	const params = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedTurnos = await getTurnos();
				const turnosFiltrados = fetchedTurnos.filter(
					(turno) => userId === turno.idUser
				);
				setData(turnosFiltrados);
			} catch (error) {
				console.error('Error al obtener turnos', error);
			}
		};
		fetchData();
	}, []);

	// funcion para borrar turno
	async function borrarTurno(id) {
		const result = await Swal.fire({
			title: '¿Estás seguro?',
			text: 'Confirmas la cancelacion del turno?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#8f8e8b',
			confirmButtonText: 'Sí, confirmar',
			cancelButtonText: 'Cancelar',
		});
		if (result.isConfirmed) {
			try {
				await deleteTurno(id);
				const turno = data.find((turno) => turno._id === id);
				const idClase = turno.idClase;
				const clase = await getClase(idClase);
				const nuevaDisponibilidad = clase.disponibilidad + 1;
				await updateDisponibilidad(clase._id, {
					disponibilidad: nuevaDisponibilidad,
				});
				Swal.fire({
					icon: 'success',
					title: 'Turno cancelado correctamente',
					showConfirmButton: false,
					timer: 2500,
				});
				window.location.reload();
			} catch (error) {
				console.error('Error al anular el turno:', error);
			}
		}
	}

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
				size: 300,
			},
		],
		[]
	);

	// Funcion para cargar tabla
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
				<IconButton
					color='secondary'
					onClick={() => borrarTurno(row.original._id)}>
					<DeleteIcon />
				</IconButton>
			</Box>
		),
	});

	const lightTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});

	return (
		<div className='container-lg '>
			<div className='main px-3 bodyadmin'>
				<h4 className='titlead'>Bienvenido, {displayName} </h4>
				<h3 className='subtitleadusu'>Panel de Reservas Registradas</h3>
			</div>

			<hr />

			<div className='botonesadm'>
				<Link className='botonadm' to='/panelusuarios'>
					<i className='iconavbar bi bi-people-fill'></i>
					Reservar Turnos
				</Link>
				<Link className='botonadm' to='/reservasusuario'>
					<i className='iconavbar bi bi-people-fill'></i>
					Mis Reservas
				</Link>
				<Link className='botonadm' to='/pagosusuarios'>
					<i className='iconavbar bi bi-archive-fill'></i>
					Pagos
				</Link>
				<Link className='botonadm' to='/datosusuario'>
					<i className='iconavbar bi bi-calendar-check'></i>
					Mis Datos
				</Link>
			</div>
			<hr />
			<div>
				<h2 className='titleagusu'>Mis Turnos Reservados </h2>
				<div className='table-responsive'>
					<ThemeProvider theme={lightTheme}>
						<CssBaseline />
						<MaterialReactTable table={table} />
					</ThemeProvider>
					<hr />
				</div>
			</div>
		</div>
	);
};
