import React from 'react';
import { ListadoTurnos } from './ListadoTurnos';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import '../css/ListadoTurnos.css';

export const AdminPrincipal = () => {
	const { currentUser } = useAuth();
	const displayName = currentUser.displayName;
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

			<div className='botonesadm'>
				<Link className='botonadm' to='/admin-usuarios'><i className="iconavbar fa-solid fa-users"></i>
					Administrar Usuarios
				</Link>
				<Link className='botonadm' to='/panelclases'><i className="iconavbar fa-solid fa-person-chalkboard"></i>
					Administrar Clases
				</Link>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>


		</div>
	);
};
