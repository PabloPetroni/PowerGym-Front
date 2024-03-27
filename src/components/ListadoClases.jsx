import React, { useState, useEffect, useMemo } from 'react';
import { getClases, deleteClase } from '../utils/ClasesUtils.js';
import Swal from 'sweetalert2';
import '../css/ListadoClases.css';
import { useNavigate } from 'react-router-dom';
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
import '../css/Tabla.css'
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
					title: 'Clase eliminada correctamente',
					showConfirmButton: false,
					timer: 1500,
				});

				setData((prevData) => prevData.filter((clase) => clase._id !== id));
			}
		} catch (error) {
			console.error('Error al eliminar la clase:', error);
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

		const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	return (
		<div>
			<div className='table-responsive'>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<MaterialReactTable table={table} />
				</ThemeProvider>
				<hr />
			</div>
		</div>
	);
};
