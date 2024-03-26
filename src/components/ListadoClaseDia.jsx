import React, { useState, useEffect, useMemo } from 'react';
import '../css/ListadoTurnos.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth } from '../context/AuthContext.jsx';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
dayjs().format();
import { Tabla } from './Tabla.jsx';
import { getTurnos } from '../utils/TurnosUtils.js';
import { useNavigate } from 'react-router-dom';

export const ListadoClaseDia = () => {
	const [data, setData] = useState([]);
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const user = currentUser.id;
	const displayName = currentUser.displayName;

	const cargarClases = async () => {
		try {
			const today = new Date();
			const year = today.getFullYear();
			const month = String(today.getMonth() + 1).padStart(2, '0');
			const day = String(today.getDate()).padStart(2, '0');
			const fechaActual = `${day}/${month}/${year}`;

			const loadTurnos = await getTurnos();

			const turnosAgrupados = {};
			loadTurnos.forEach((turno) => {
				if (!turnosAgrupados[turno.id]) {
					turnosAgrupados[turno.id] = [];
				}
				turnosAgrupados[turno.id].push(turno);
			});
			const dataFormatted = Object.values(turnosAgrupados).map((turnos) => {
				const turnosHoy = turnos.filter(
					(turno) => turno.fecha === fechaActual
				);
				return {
					fecha: turnosHoy[0].fecha,
					hora: turnosHoy[0].hora,
					actividad: turnosHoy[0].actividad,
					inscriptos: turnosHoy.length,
				};
			});

			setData(dataFormatted);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		cargarClases();
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
				header: 'Cantidad Inscriptos',
				accessorKey: 'inscriptos',
				enableColumnOrdering: false,
				size: 50,
			},
		],
		[]
	);

	const actions = [];

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	return (
		<div>
			<div className='container-lg '>
				<div className='main px-3 bodyadmin'>
					<h4 className='titlead'>Bienvenido, {displayName} </h4>
					<h3 className='subtitleadusu'>
						Panel de Administracion de Clases
					</h3>
				</div>

				<hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>

				<div className='botonesadm'>
					<button
						className='botonadm'
						onClick={() => {
							navigate(`/administrador`);
						}}>
						<i className='iconavbar fa-solid fa-arrow-rotate-left'></i>
						Volver
					</button>
				</div>
				<hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>
				<h2 className='titleagusu'>Clases del Dia</h2>
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
