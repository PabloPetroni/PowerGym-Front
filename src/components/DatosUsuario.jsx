import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../context/AuthContext.jsx';
import { getUser, updateUser } from '../utils/UsersUtils.js';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const DatosUsuario = () => {
	const [user, setUser] = useState([]);
	const id = '65e249fae8b1f6e5b59c4461';
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const { currentUser} = useAuth({});
	const userlogin=currentUser.displayname
	
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		setMessage
	} = useForm();

	const handleCancel = () => {
		setShowModal(false);
		navigate('/panelusuarios');
	};

	useEffect(() => {
		async function loadUsuario() {
			try {
				const usuario = await getUser(id);
				setValue('nombre', usuario.nombre);
				setValue('apellido', usuario.apellido);
				setValue('email', usuario.email);
				setValue('dni', usuario.dni);
				setValue('domicilio', usuario.domicilio);
				setValue('celular', usuario.celular);
				setUser(usuario);
				setShowModal(true);
			} catch (error) {
				console.error('Error al cargar los datos del usuario', error);
			}
		}
		loadUsuario();
	}, []);

	const onSubmit = handleSubmit(async (values) => {
		try {
			await updateUser(id, values);
			Swal.fire({
				icon: 'success',
				title: 'Tus datos han sido editados correctamente',
				showConfirmButton: false,
				timer: 1500,
			});
			handleCancel();
		} catch (error) {
			console.error('Error al editar los datos del usuario:', error);
			Swal.fire({
				icon: 'error',
				title: 'Error al editar los datos del usuario. Intente nuevamente!',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	});

	return (
		<div>
			<Modal show={showModal} onHide={handleCancel}>
				<Modal.Header closeButton className='modalbg'>
					<Modal.Title className='titlemodal'>
						Actualizar Mis Datos
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='modalbg'>
					<Form onSubmit={onSubmit}>
						<div className='formedit'>
							<Form.Group className='mb-3' id='nombreEditarUsuario'>
								<Form.Label className='labelmodal'>Nombre</Form.Label>
								<Form.Control
									className='inputreg'
									type='text'
									id='name'
									{...register('nombre', {
										required: {
											value: true,
											message: 'El nombre es requerido',
										},
									})}
								/>
								{errors.nombre && (
									<Form.Text className='messerror'>
										{errors.nombre.message}
									</Form.Text>
								)}
							</Form.Group>

							<Form.Group className='mb-3' id='apellidoEditarUsuario'>
								<Form.Label className='labelmodal'>Apellido</Form.Label>
								<Form.Control
									className='inputreg'
									type='text'
									id='subname'
									{...register('apellido', {
										required: {
											value: true,
											message: 'El apellido es requerido.',
										},
									})}
								/>
								{errors.apellido && (
									<Form.Text className='messerror'>
										{errors.apellido.message}
									</Form.Text>
								)}
							</Form.Group>

							<Form.Group className='mb-3' id='dniEditarUsuario'>
								<Form.Label className='labelmodal'>DNI</Form.Label>
								<Form.Control
									className='inputreg'
									type='number'
									id='dni'
									{...register('dni', {
										required: {
											value: true,
											message: 'El DNI es requerido.',
										},
										minLength: {
											value: 7,
											message:
												'El DNI debe contenter entre 7 y 8 digitos.',
										},
										maxLength: {
											value: 8,
											message:
												'El DNI debe contenter entre 7 y 8 digitos.',
										},
									})}
								/>
								{errors.dni && (
									<Form.Text className='messerror'>
										{errors.dni.message}
									</Form.Text>
								)}
							</Form.Group>

							<Form.Group className='mb-3' id='domicilioEditarUsuario'>
								<Form.Label className='labelmodal'>
									Domicilio
								</Form.Label>
								<Form.Control
									className='inputreg'
									type='text'
									id='domic'
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

							<Form.Group className='mb-3' id='celularEditarUsuario'>
								<Form.Label className='labelmodal'>Celular</Form.Label>
								<Form.Control
									className='inputreg'
									type='text'
									id='cel'
									{...register('celular', {
										required: {
											value: true,
											message: 'El celular es requerido',
										},
										minLength: {
											value: 10,
											message:
												'El celular debe contenter 10 digitos',
										},
										maxLength: {
											value: 10,
											message:
												'El celular debe contenter 10 digitos',
										},
									})}
								/>
								{errors.celular && (
									<Form.Text className='messerror'>
										{errors.celular.message}
									</Form.Text>
								)}
							</Form.Group>

							<Form.Group className='modalbg botonesedit'>
								<button className='btneditusu px-2' type='submit'>
									<i className='iconavbar fa-solid fa-floppy-disk'></i>
									Guardar cambios
								</button>
								<button
									type='button'
									className='btncancmodal'
									onClick={handleCancel}>
									<i className='iconavbar fa-solid fa-circle-xmark'></i>
									Volver
								</button>
							</Form.Group>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};
