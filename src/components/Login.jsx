import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import '../css/Login.css';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const Login = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);
	const { currentUser, isAuthenticated, login } = useAuth();
	const toggleShowPassword = () => setShowPassword(!showPassword);

	const onSubmit = handleSubmit(async (values) => {
		try {
			console.log(values)
			const user = await login(values);
			Swal.fire({
				icon: 'success',
				title: 'Inicio de sesión exitoso!',
				showConfirmButton: false,
				timer: 2000,
			});

			if (
				user.email === 'admin@gmail.com'
			
			) {
				navigate('/admin', { replace: true });
			} else {
				navigate('/panelusuarios', { replace: true });
			}
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Ingreso rechazado',
				text: 'El usuario y/o contraseña no son correctos!',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	});

	useEffect(() => {
		if (isAuthenticated) {
			const user = currentUser?.email;
			if (user === 'admin@gmail.com') {
				navigate('/admin');
			} else {
				navigate('/panelusuarios');
			}
		}
	}, [isAuthenticated, currentUser, navigate]);

	return (
		<section className='login container-lg'>
			<Form id='loginForm' className='logform' onSubmit={onSubmit}>
				<h2 className='titulolog'>Ingreso a Mi cuenta</h2>
				<Form.Group className='d-flex flex-column' controlId='inputemail'>
					<Form.Label className='labellog' id='email'>
						Email
					</Form.Label>
					<input
						className='inputlog'
						type='email'
						id='email'
						name='email'
						{...register('email', {
							required: {
								value: true,
								message: 'El email es requerido',
							},
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
								message: 'Email no válido',
							},
						})}
					/>
					{errors.email && (
						<span className='error-message'>{errors.email.message}</span>
					)}
				</Form.Group>

				<Form.Group
					className='d-flex flex-column'
					controlId='inputpassword'>
					<Form.Label className='labellog'>Contraseña</Form.Label>
					<div className='d-flex flex-row justify-content-center'>
						<input
							className='inputlogpass ms-4 '
							type={showPassword ? 'text' : 'password'}
							autoComplete='current-password'
							{...register('password', {
								required: {
									value: true,
									message: 'La contraseña es requerida',
								},
								minLength: {
									value: 7,
									message:
										'La contraseña debe ser mayor a 7 caracteres',
								},
							})}
						/>

						<button
							type='button'
							onClick={toggleShowPassword}
							id='vercontrasena'
							className='btncontrasena'>
							<i
								className={`far ${
									showPassword ? 'fa-eye-slash' : 'fa-eye'
								}`}></i>
						</button>
					</div>
					{errors.password && (
						<span className='error-message'>
							{errors.password.message}
						</span>
					)}
				</Form.Group>

				<Form.Group>
					<Link
						className='parrafolog text-center text-decoration-underline'
						to='/recuperar'>
						¿ Olvidaste tu contraseña ?
					</Link>
				</Form.Group>

				<Form.Group className='botoneslogin' controlId='inputpassword'>
					<Button className='input-submitlog' type='submit'>
						<i className='iconavbar fa-solid fa-right-to-bracket'></i>
						Ingresar
					</Button>
				</Form.Group>

				<p className='parrafolog text-center'>
					No tienes una cuenta?<br></br>
					<Link
						className='parrafolog text-decoration-underline'
						to='/registro'>
						Registrarme ahora
					</Link>
				</p>
			</Form>
		</section>
	);
};
