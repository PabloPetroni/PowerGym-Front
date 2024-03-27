import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import '../css/PanelUsuario.css';
import { ListadoTurnos } from './ListadoTurnos';
import { ReservasUsuario } from './ReservasUsuario';
import { PagosUsuarios } from './PagosUsuarios';
import { DatosUsuario } from './DatosUsuario';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
dayjs().format();

export const PanelUsuarios = () => {
	const { currentUser } = useAuth();
	const [showModal, setShowModal] = useState(false);
	const displayName = currentUser ? currentUser.displayName : 'Usuario';
	const userId = currentUser ? currentUser.id : '';
	const userMail = currentUser.email;
	const [selectedComponent, setSelectedComponent] = useState('listadoTurnos');

	const handleComponentChange = (componentName) => {
		if (
			componentName === 'actualizarDatos' &&
			userMail === 'admin@gmail.com'
		) {
			alert(
				'Acceso denegado. No tienes permiso para actualizar datos como administrador.'
			);
			return;
		}
		setSelectedComponent(componentName);
		setShowModal(true);
	};
	// Verificar si currentUser está definido antes de renderizar el componente
	if (!currentUser) {
		return <div>Cargando...</div>;
	}

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
					{selectedComponent === 'listadoTurnos' && (
						<ListadoTurnos userId={userId} />
					)}
					{selectedComponent === 'misReservas' && (
						<ReservasUsuario userId={userId} />
					)}
					{selectedComponent === 'pagos' && (
						<PagosUsuarios userId={userId} />
					)}
					{selectedComponent === 'actualizarDatos' && (
						<DatosUsuario
							userId={userId}
							showModal={showModal}
							setShowModal={setShowModal}
						/>
					)}
				</div>
			</div>
		</>
	);
};
