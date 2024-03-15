import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../css/Registro.css';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

export const Registro = () => {
	const { registro } = useAuth();
	const navigate = useNavigate();
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const form = useRef();
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword(!showPassword);

	const onSubmit = handleSubmit(async (values) => {
		try {
			await registro(values);
			Swal.fire({
				icon: 'success',
				title: 'Bienvenido! Registro de cuenta exitoso!',
				showConfirmButton: false,
				timer: 2500,
			});
		} catch (error) {
			console.error('Error al registrar:', error);
			Swal.fire({
				icon: 'error',
				title: 'Error de registro',
				text: 'Hubo un error en el registro de usuario. Intenta nuevamente!',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	});

	return (
		<section className='register container-lg'>
			<Form
				id='Formreg'
				className='Formreg container fluid'
				onSubmit={onSubmit}
				ref={form}>
				<h2 className='titlereg'>Crear Cuenta</h2>

				<div className='row'>
					<div className='col-md-6'>
						<Form.Group className='mb-3' id='inputname'>
							<Form.Label className='labelreg'>Nombre/s</Form.Label>
							<Form.Control
								className='inputreg'
								type='text'
								id='name'
								name='nombre'
								{...register('nombre', {
									required: {
										value: true,
										message: 'El nombre es requerido.',
									},
								})}
							/>
							{errors.nombre && (
								<Form.Text className='messerror'>
									{errors.nombre.message}
								</Form.Text>
							)}
						</Form.Group>

						<Form.Group className='mb-3' id='inputsubname'>
							<Form.Label className='labelreg'>Apellido/s</Form.Label>
							<Form.Control
								className='inputreg'
								type='text'
								id='subname'
								name='apellido'
								{...register('apellido', {
									required: {
										value: true,
										message: 'El apellido es requerido',
									},
								})}
							/>
							{errors.apellido && (
								<Form.Text className='messerror'>
									{errors.apellido.message}
								</Form.Text>
							)}
						</Form.Group>

						<Form.Group className='mb-3' id='inputdni'>
							<Form.Label className='labelreg'>DNI</Form.Label>
							<Form.Control
								className='inputreg'
								type='number'
								id='dni'
								name='dni'
								{...register('dni', {
									required: {
										value: true,
										message: 'El DNI es requerido.',
									},
									minLength: {
										value: 8,
										message: 'El DNI debe contenter 8 digitos.',
									},
									maxLength: {
										value: 12,
										message: 'El DNI debe contenter  8 digitos.',
									},
								})}
							/>
							{errors.dni && (
								<Form.Text className='messerror'>
									{errors.dni.message}
								</Form.Text>
							)}
						</Form.Group>

						<Form.Group className='mb-3' id='inputdomic'>
							<Form.Label className='labelreg'>Domicilio</Form.Label>
							<Form.Control
								className='inputreg'
								type='text'
								id='domic'
								name='domicilio'
								{...register('domicilio', {
									required: {
										value: true,
										message: 'El domicilio es requerido',
									},
								})}
							/>
							{errors.domicilio && (
								<Form.Text className='messerror'>
									{errors.domicilio.message}
								</Form.Text>
							)}
						</Form.Group>
					</div>
					<div className='col-md-6'>
						<Form.Group className='mb-3' id='inputcel'>
							<Form.Label className='labelreg'>Celular</Form.Label>
							<Form.Control
								className='inputreg'
								type='number'
								id='cel'
								name='cel'
								{...register('celular', {
									required: {
										value: true,
										message: 'El celular es requerido',
									},
									minLength: {
										value: 10,
										message: 'El celular debe contenter 10 digitos.',
									},
									maxLength: {
										value: 11,
										message: 'El celular debe contenter 10 digitos.',
									},
								})}
							/>
							{errors.celular && (
								<Form.Text className='messerror'>
									{errors.celular.message}
								</Form.Text>
							)}
						</Form.Group>

						<Form.Group className='mb-3' id='inputemail'>
							<Form.Label className='labelreg'>Email</Form.Label>
							<Form.Control
								className='inputreg'
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
										message:
											'Email no válido. Ingrese un email valido',
									},
								})}
							/>
							{errors.email && (
								<Form.Text className='messerror'>
									{errors.email.message}
								</Form.Text>
							)}
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label className='labelreg'>Contraseña</Form.Label>
							<Form.Control
								className='inputreg'
								type={showPassword ? 'text' : 'password'}
								id='password'
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
							{errors.password && (
								<Form.Text className='messerror'>
									{errors.password.message}
								</Form.Text>
							)}
						</Form.Group>

						<Form.Group className='mb-3 d-flex flex-column'>
							<Form.Label className='labelreg' id='inputconfirm'>
								Confirmar Contraseña
							</Form.Label>
							<div className='d-flex flex-row'>
								<Form.Control
									className='inputreg'
									type={showPassword ? 'text' : 'password'}
									id='copassword'
									{...register('copassword', {
										required: {
											value: true,
											message:
												'La confirmacion de contraseña es requerida',
										},
										minLength: {
											value: 7,
											message:
												'Confirmar contraseña debe ser mayor a 7 caracteres',
										},
										validate: (copassword) => {
											const { password } = getValues();
											return (
												copassword === password ||
												'Las contraseñas ingresadas no coinciden'
											);
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
							{errors.copassword && (
								<Form.Text className='messerror'>
									{errors.copassword.message}
								</Form.Text>
							)}
						</Form.Group>
					</div>
				</div>

				<Form.Group className='mb-3 botonesreg'>
					<Button className='input-submitreg' type='submit'>
						<i className='iconavbar fa-solid fa-registered'></i>
						Registrar cuenta
					</Button>

					<p className='parraforeg text-center'>
						Ya tienes una cuenta ?
						<Link className='parraforeg' to='/login'>
							Ingresar a mi cuenta
						</Link>
					</p>
				</Form.Group>
			</Form>
		</section>
	);
};
