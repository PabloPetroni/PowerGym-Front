import React from 'react';
import { ListadoTurnos } from './ListadoTurnos';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import '../css/ListadoTurnos.css';

export const AdminPrincipal = () => {
	const user = '65e215ee04166531ce18a8e3';
	const displayName = 'Oscar Frias Viñals';

	return (
		<div>
			<div className='main px-3 bodyadmin'>
				<h4 className='titlead'>Bienvenido, {displayName} </h4>
				<h3 className='subtitleadusu'>Panel de Administracion</h3>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='d-flex justify-content-around m-4 mb-5'>
				<Link className='botonadm' to='/admin-usuarios'>
					Administrar usuarios
				</Link>
				<Link className='botonadm' to='/admin-usuarios'>
					Administrar clases
				</Link>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<ListadoTurnos />
		</div>
	);
};
