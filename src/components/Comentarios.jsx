import React, { useRef, useState, useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { createComentario, getComentarios } from '../utils/ComentariosUtils';
import Swal from 'sweetalert2';

export const Comentarios = () => {
	const [comentarios, setComentarios] = useState([]);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const form = useRef();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const comentarios = await getComentarios();
				setComentarios(comentarios);
			} catch (error) {
				console.error('Error al obtener comentarios:', error);
			}
		};
		fetchData();
	}, []);

	const onSubmit = handleSubmit(async (values) => {
		try {
			await createComentario(values);
			reset();
			Swal.fire({
				icon: 'success',
				title: 'Comentario Registrado!',
				showConfirmButton: false,
				timer: 2500,
			});
		} catch (error) {
			console.error('Error al registrar:', error);
			Swal.fire({
				icon: 'error',
				title: 'Error de registro',
				text: 'Hubo un error en el registro de tu comentario. Intenta nuevamente!',
				showConfirmButton: false,
				timer: 2500,
			});
		}
	});

	return (
		<div>
			<h1 className='title-plan'>
				COMENTARIOS DE <span className='power-text'>NUESTROS CLIENTES</span>
			</h1>
			<div className='benef container-fluid'>
				<Carousel fade indicators={false} controls={false}>
					{comentarios.map((comentario, index) => (
						<Carousel.Item className='itemcarouselcom' key={index}>
							<div className='position-relative'>
								<img
									className='imgcont'
									src='/nubechat.png'
									alt='imagen chat'
								/>
								<div className='icocarousel'>
									<div className='text-container'>
										<p className='comentp'>{comentario.comentario}</p>
										<p className='nombrecomentp'>
											{comentario.nombre}
										</p>
									</div>
								</div>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</div>

			<div>
				<Form
					id='Formreg'
					className='Formcoment container'
					onSubmit={onSubmit}
					ref={form}>
					<div className=''>
						<div className=''>
							<h2 className='subtitle-com'>Dejanos Tu Comentario</h2>
							<Form.Group className='text-center d-flex justify-content-center mb-3' id='inputname'>
								<Form.Control
									className='inputcoment'
									placeholder='Tu nombre...'
									type='text'
									id='nombre'
									name='nombre'
									{...register('nombre', {
										required: {
											value: true,
											message: 'Tu nombre es requerido',
										},
									})}
								/>
								{errors.nombre && (
									<span className='error-message'>
										{errors.nombre.message}
									</span>
								)}
							</Form.Group>
							<Form.Group className='text-center d-flex justify-content-center  mb-3' id='inputname'>
								<Form.Control
									className='inputcoment'
									placeholder='Tu comentario....'
									as='textarea'
                           rows={4}
									id='comentario'
									name='comentario'
									{...register('comentario', {
										required: {
											value: true,
											message: 'Debes escribir un comentario',
										},
										minLength: {
											value: 10,
											message:
												'El comentario debe ser mayor a 10 caracteres',
										},
                              maxLength: {
											value: 75,
											message:
												'El comentario debe ser menor a 75 caracteres',
										},
									})}
								/>
								{errors.comentario && (
									<span className='error-message'>
										{errors.comentario.message}
									</span>
								)}
							</Form.Group>
						</div>
					</div>
					<Form.Group className='mb-3 botonesreg'>
						<Button className='btncoment' type='submit'>
							<i className='iconavbar fa-solid fa-comments'></i> Enviar
							comentario
						</Button>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};
