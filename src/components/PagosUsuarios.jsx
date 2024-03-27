import React, { useState, useEffect, useMemo } from 'react';
import { getUser } from '../utils/UsersUtils.js';
import '../css/ListadoTurnos.css';
import { useAuth } from '../context/AuthContext.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import { Tabla } from './Tabla.jsx';

export const PagosUsuarios = () => {
	const [data, setData] = useState([]);
	const [user, setUser] = useState([]);
	const { currentUser } = useAuth();
	const userlogin = currentUser.displayname;
	const id = currentUser.id;
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const user = await getUser(id);
				setData(user.pagos);
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
				header: 'Fecha Pago',
				accessorKey: 'fechapago',
				enableColumnOrdering: false,
				size: 50,
			},
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
		<div className='container-lg '>
			<div>
				<h2 className='titleagusu'>Mis Pagos </h2>
				<div className='table-responsive'>
					<ThemeProvider theme={darkTheme}>
						<CssBaseline />
						<Tabla columns={columns} data={data} actions={actions} />
					</ThemeProvider>
				</div>
				<div className='d-flex align-items-center justify-content-center'>
					<Link className='botonadm' to={`/generarpago/${user._id}`}>
						<i className='iconavbar fa-solid fa-money-check-dollar'></i>
						PAGAR CUOTA MENSUAL
					</Link>
				</div>
			</div>

		</div>
	);
};
