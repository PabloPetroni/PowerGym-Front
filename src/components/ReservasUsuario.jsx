import React, { useState, useEffect, useMemo } from 'react';
import { getTurnos, deleteTurno } from '../utils/TurnosUtils.js';
import { updateDisponibilidad, getClase } from '../utils/ClasesUtils.js';
import Swal from 'sweetalert2';
import { FaCalendarTimes } from 'react-icons/fa';
import '../css/ListadoTurnos.css';
import { useAuth } from '../context/AuthContext.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dayjs from 'dayjs';
import { Tabla } from './Tabla.jsx';

export const ReservasUsuario = () => {
	const [data, setData] = useState([]);
	const { currentUser } = useAuth();
	const userId = currentUser.id;

	// Trae turnos y los filtra por usuario y fecha
	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedTurnos = await getTurnos();
				const today = dayjs(new Date()).format('DD/MM/YYYY');
				const turnosFiltrados = fetchedTurnos.filter(
					(turno) => userId === turno.idUser && turno.fecha >= today
				);
				setData(turnosFiltrados);
			} catch (error) {
				console.error('Error al obtener turnos', error);
			}
		};
		fetchData();
	}, []);

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
		],
		[]
	);

	const actions = [
		{
			text: 'Cancelar',
			icon: <FaCalendarTimes />,
			onClick: (row) => {
				borrarTurno(row.original._id);
			},
		},
	];

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	// funcion para borrar turno
	async function borrarTurno(id) {
		const result = await Swal.fire({
			title: 'Confirmas la cancelacion del turno?',
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
				setData((prevData) => prevData.filter((turno) => turno._id !== id));
			} catch (error) {
				console.error('Error al anular el turno:', error);
			}
		}
	}

	return (
		<div className='container-lg '>
			<div>
				<h2 className='titleagusu'>Mis Turnos Reservados </h2>
				<div className='table-responsive'>
					<ThemeProvider theme={darkTheme}>
						<CssBaseline />
						<Tabla columns={columns} data={data} actions={actions} />
					</ThemeProvider>
				</div>
			</div>
		</div>
	);
};
