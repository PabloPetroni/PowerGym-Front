import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import '../css/BarraNav.css';
import { useAuth } from '../context/AuthContext.jsx';
import Swal from 'sweetalert2';

function BarraNav() {
	const [estadoLogin, setEstadoLogin] = useState('');
	const { currentUser, isAuthenticated, logout } = useAuth();
	const [expanded, setExpanded] = useState(false);
	const user = currentUser ? currentUser.email : null;

	const closeNavbar = () => {
		setExpanded(false);
	};

	useEffect(() => {
		if (!user) {
			setEstadoLogin('No hay usuario logueado');
		} else {
			setEstadoLogin(user);
		}
	}, [user]);

	const handleLogOut = async () => {
		await logout();
		Swal.fire({
			icon: 'success',
			title: 'Su sesion fue cerrada!',
			showConfirmButton: false,
			timer: 1500,
		});
	};

	return (
		<>
			<Navbar expand='lg' className='navbar' expanded={expanded}>
				<Container>
					<Navbar.Brand href='/'>
						<img
							src='https://i.postimg.cc/XY51w3dy/Logo-fondo-transparente-Photoroom-png-Photoroom.png'
							alt='Logo2'
							className='rounded-4 logo'
						/>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls='responsive-navbar-nav'
						style={{ color: '#bac7d6ff', border: 'white' }}
						onClick={() => setExpanded(!expanded)}
					/>
					<Navbar.Collapse id='responsive-navbar-nav' className='menu'>
						<Nav className='ms-auto d-flex align-items-center'>
							<NavLink
								className='nav-link link m-3'
								to='/servicios'
								onClick={closeNavbar}>
								Servicios
							</NavLink>
							<NavLink
								className='nav-link link m-3'
								to='/actividades'
								onClick={closeNavbar}>
								Actividades
							</NavLink>
							<NavLink
								className='nav-link link m-3'
								to='/planes'
								onClick={closeNavbar}>
								Planes
							</NavLink>
							<NavLink
								className='nav-link link m-3'
								to='/productos'
								onClick={closeNavbar}>
								Productos
							</NavLink>
							<NavLink
								className='nav-link link m-3'
								to='/nosotros'
								onClick={closeNavbar}>
								Nosotros
							</NavLink>
							<NavLink
								className='nav-link link m-3'
								to='/contacto'
								onClick={closeNavbar}>
								Contacto
							</NavLink>

							{isAuthenticated &&
								currentUser?.email === 'admin@gmail.com' && (
									<NavLink
										className='nav-link link m-3'
										to='/administrador'
										onClick={closeNavbar}>
										Panel de Administrador
									</NavLink>
								)}
							{isAuthenticated && (
								<NavLink
									className='nav-link link m-3'
									to='/panelusuarios'
									onClick={closeNavbar}>
									Panel de Usuarios
								</NavLink>
							)}

							<div className='botones'>
								<p className='estadolog'>
									Estas logueado como: {estadoLogin}
								</p>
								{user ? (
									<button
										onClick={(e) => {
											closeNavbar();
											handleLogOut();
										}}
										className='logout'>
										<i className='iconavbarbar fa-solid fa-right-from-bracket'></i>{' '}
										Cerrar Sesión
									</button>
								) : (
									<>
										<Link
											to='/login'
											onClick={closeNavbar}
											className='ingresar'>
											<i className='iconavbarbar fa-solid fa-right-to-bracket'></i>
											Iniciar Sesión
										</Link>
										<Link
											to='/registro'
											className='registro'
											onClick={(e) => {
												closeNavbar();
											}}>
											<i className='iconavbarbar fa-solid fa-registered'></i>
											Registrarme
										</Link>
									</>
								)}
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default BarraNav;
