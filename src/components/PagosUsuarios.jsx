import React, { useState, useEffect, useMemo } from 'react';
import { getPagos } from '../utils/PagosUtils.js';
import { getUser } from '../utils/UsersUtils.js';
import Swal from 'sweetalert2';
import '../css/ListadoTurnos.css';
import {
	MaterialReactTable,
	useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { GenerarPago } from './GenerarPago.jsx';

export const PagosUsuarios = () => {
	const [data, setData] = useState([]);
	const [user, setUser] = useState([]);
	// const { currentUser, logout } = useAuth({});
	const displayName = 'Oscar Frias Viñals';
	const id = '65e249fae8b1f6e5b59c4461';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedPagos = await getPagos();
				const pagosFiltrados = fetchedPagos.filter(
					(pago) => id === pago.idUser
				);
				setData(pagosFiltrados);
				const user = await getUser(id);
				setUser(user);
			} catch (error) {
				console.error('Error al obtener pagos', error);
			}
		};
		fetchData();
	}, []);

	const columns = useMemo(
		() => [
			{
				header: 'Fecha de Vencimiento',
				accessorKey: 'fechavenc',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Plan',
				accessorKey: 'plan',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Estado',
				accessorKey: 'estado',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Fecha Pago',
				accessorKey: 'fechapago',
				enableColumnOrdering: false,
				size: 50,
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

		renderRowActions: ({ row, table }) => {
			if (row.original.estado === 'pendiente') {
				return (
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'nowrap',
							gap: '3px',
						}}>
						<Link className='btnreservar' to='/GenerarPago'>
							Pagar
						</Link>
					</Box>
				);
			} else {
				return null;
			}
		},
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
				<h3 className='subtitleadusu'>Panel de Pagos</h3>
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
				<h2 className='titleagusu'>Mis Pagos </h2>
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
