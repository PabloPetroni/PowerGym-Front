import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../css/BarraNav.css';
import { useAuth } from '../context/AuthContext.jsx';

function BarraNav() {
	const { currentUser, isAuthenticated, logout } = useAuth();
	const [expanded, setExpanded] = useState(false);

	const closeNavbar = () => {
		setExpanded(false);
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
										Administrador
									</NavLink>
								)}

							{isAuthenticated && (
								<button className='btn logout m-3' onClick={logout}>
									<NavLink
										to='/login'
										className='linkIngresar'
										onClick={closeNavbar}>
										Cerrar sesión
									</NavLink>
								</button>
							)}

							{!isAuthenticated && (
								<>
									<button className='btn ingresar m-3'>
										<NavLink
											to='/login'
											className='linkIngresar'
											onClick={closeNavbar}>
											Ingresar
										</NavLink>
									</button>

									<button className='btn registro m-3'>
										<NavLink
											to='/registro'
											className='linkRegistro'
											onClick={closeNavbar}>
											Registrarse
										</NavLink>
									</button>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default BarraNav;
