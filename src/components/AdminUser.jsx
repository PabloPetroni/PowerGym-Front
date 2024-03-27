import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import '../css/AdminUser.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apiURL } from '/api/apiURL.js';
import { useAuth } from '../context/AuthContext';
import '../css/PanelUsuario.css';
import Swal from 'sweetalert2';
import { DatosUsuario } from './DatosUsuario';
import { deleteUser, getUsers } from '../utils/UsersUtils';

export const AdminUser = () => {
	const [cargarUsuarios, setCargarUsuarios] = useState([]);
	const [search, setSearch] = useState('');
	const { currentUser } = useAuth();
	const displayName = currentUser.displayName;
	const [selectedComponent, setSelectedComponent] = useState('');
	const [userId, setUserId] = useState('');
	const [showModal, setShowModal] = useState(false);

	const handleComponentChange = (componentName, userId) => {
		setSelectedComponent(componentName);
		setUserId(userId);
		setShowModal(true);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const users = await getUsers();
				// setData(users);
				setCargarUsuarios(users);
			} catch (error) {
				console.error('Error al obtener usuarios', error);
			}
		};
		fetchData();
	}, []);

	const borrarUsuario = async (id) => {
		try {
			const result = await Swal.fire({
				title: '¿Estás seguro?',
				text: 'Confirmas la eliminacion del usuario?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#8f8e8b',
				confirmButtonText: 'Sí, eliminar',
				cancelButtonText: 'Cancelar',
			});
			if (result.isConfirmed) {
				await deleteUser(id);
				Swal.close();
				Swal.fire({
					icon: 'success',
					title: 'Usuario eliminado correctamente',
					showConfirmButton: false,
					timer: 1500,
				});
				setCargarUsuarios((prevData) =>
					prevData.filter((user) => user._id !== id)
				);
			}
		} catch (error) {
			console.error('Error al eliminar el usuario:', error);
		}
	};

	return (
		<div>
			<div className='main px-3 bodyadmin'>
				<h4 className='titlead'>Bienvenido, {displayName} </h4>
				<h3 className='subtitleadusu'>
					Panel de Administracion de Usuarios
				</h3>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='botonesadm'>
				<Link className='botonadm' to='/panelclases'>
					<i className='iconavbar fa-solid fa-person-chalkboard'></i>
					Administrar Clases
				</Link>
				<Link className='botonadm' to='/administrador'>
					<i className='iconavbar fa-solid fa-arrow-rotate-left'></i>
					Volver
				</Link>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>
			<div className='d-flex justify-content-around m-5 p-2'>
				<h3 className='titulo'>Listado de Usuarios</h3>
				<Form>
					<Row>
						<Col xs='auto'>
							<Form.Control
								type='text'
								placeholder='Buscar usuario'
								className='mr-sm-2 border border-dark'
								onChange={(e) => setSearch(e.target.value)}
							/>
						</Col>
					</Row>
				</Form>
			</div>
			<div className='tabla-usuarios'>
				<Table bordered hover responsive variant="dark">
					<thead>
						<tr>

							<th>Nombre</th>
							<th>Email</th>
							<th>Telefono</th>
							<th>Acciones</th>
						</tr>
					</thead>

					{cargarUsuarios
						.filter((usuario) => {
							return search.toLowerCase() === ''
								? usuario
								: usuario.apellido.toLowerCase().includes(search);
						})
						.map((usuario) => {
							return (
								<tbody key={usuario._id}>
									<tr>
										<td>
											{usuario.apellido},{usuario.nombre}
										</td>
										<td>{usuario.email}</td>
										<td>{usuario.celular}</td>
										<td className='botonesadmuser'>
											{usuario.email !== 'admin@gmail.com' && (
												<>
													<Button
													className='me-2'
														onClick={() =>
															borrarUsuario(usuario._id)
														}
														variant='danger'>
														<i className='fa-solid fa-user-xmark'></i>
													</Button>
													<Button
														onClick={() =>
															handleComponentChange(
																'actualizarDatos',
																usuario._id
															)
														}>
														<i className="fa-solid fa-user-pen"></i>
													</Button>
												</>
											)}
										</td>
									</tr>
								</tbody>
							);
						})}
				</Table>
			</div>
			<div>
				{selectedComponent === 'actualizarDatos' && (
					<DatosUsuario userId={userId} showModal={showModal} setShowModal={setShowModal} />
				)}
			</div>
		</div>
	);
};
