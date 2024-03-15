import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import '../css/PanelUsuario.css';
import { ListadoTurnos} from './ListadoTurnos';
import { ReservasUsuario} from './ReservasUsuario';
import { PagosUsuarios} from './PagosUsuarios';
import { DatosUsuario} from './DatosUsuario';

import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
dayjs().format();

export const PanelUsuarios = () => {
	// const { currentUser, logout } = useAuth({});
	const navigate = useNavigate();
	const params = useParams();
	const user = '65e215ee04166531ce18a8e3';
	const displayName = 'Oscar Frias Viñals';
	const [selectedComponent, setSelectedComponent] = useState('listadoTurnos');

	const handleComponentChange = (componentName) => {
		setSelectedComponent(componentName);
	};

	return (
		<>
			<div className='container-lg '>
				<div className='main px-3 bodyadmin'>
					<h4 className='titlead'>Bienvenido, {displayName} </h4>
					<h3 className='subtitleadusu'>Panel de Usuarios</h3>
				</div>

				<hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>

				<div className='botonesadm'>
					<button
						className='botonadm'
						onClick={() => handleComponentChange('listadoTurnos')}>
						<i className='iconavbar fa-solid fa-calendar-check'></i>
						Reservar Turnos
					</button>
					<button
						className='botonadm'
						onClick={() => handleComponentChange('misReservas')}>
						<i className='iconavbar fa-solid fa-calendar-days'></i>
						Mis Reservas
					</button>
					<button
						className='botonadm'
						onClick={() => handleComponentChange('pagos')}>
						<i className='iconavbar fa-solid fa-money-bill-wave'></i>
						Pagos
					</button>
					<button
						className='botonadm'
						onClick={() => handleComponentChange('actualizarDatos')}>
						<i className='iconavbar fa-solid fa-user-pen'></i>
						Actualizar Mis Datos
					</button>
				</div>

				<hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>

				<div>
					{selectedComponent === 'listadoTurnos' && <ListadoTurnos />}
					{selectedComponent === 'misReservas' && <ReservasUsuario />}
					{selectedComponent === 'pagos' && <PagosUsuarios />}
					{selectedComponent === 'actualizarDatos' && <DatosUsuario />}
				</div>
			</div>
		</>
	);
};
