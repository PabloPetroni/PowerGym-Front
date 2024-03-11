import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../css/Contacto.css';

export const Contacto = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_iew5q2g',
				'template_qar0tof',
				form.current,
				'saMzvd5sdlHj2BhYr'
			)
			.then(
				(result) => {
					Swal.fire({
						icon: 'success',
						title: 'Mensaje enviado correctamente! Te responderemos a la brevedad posible!',
						showConfirmButton: false,
						timer: 3000,
					});
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className='container-lg bodycontact'>
			<div className=''>
				<h1 className='titulocont text-center'>¡Contactanos!</h1>
				<p className='text-center Parrafo2'>
					Por cualquier duda, comentario o sugerencia puedes contactarnos y
					nos comunicaremos a la brevedad posible.
				</p>
			</div>
			<div className='contcontact'>
				<div>
					<h2 className='title-plan'>FORMULARIO DE CONTACTO</h2>
					<form className='cajaForm' ref={form} onSubmit={sendEmail}>
						<label className='labelcontact'>Tu Nombre</label>
						<input
							className='inputcontactemail'
							type='text'
							name='user_name'
							required
						/>
						<label
							className='labelcontact'
							placeholder='Ingrese su email..'>
							Email
						</label>
						<input
							className='inputcontactemail'
							type='email'
							name='user_email'
							required
						/>
						<label
							className='labelcontact'
							placeholder='Ingrese su mensaje..'>
							Mensaje
						</label>
						<textarea
							className='inputcontactcoment'
							name='message'
							required
						/>
						<input className='botonadm' type='submit' value='Enviar Formulario' />
					</form>
				</div>
				<div>
					<h2 className='title-plan'>NUESTRAS SEDES</h2>
					<div className='divsede'>
						<p className='titlesede'>San Miguel de Tucuman</p>
						<div className='subdivsede'>
							<div className='d-flex flex-column align-items-center'>
								<i className='fa-solid fa-location-dot text-danger'></i>
								<p className='psede'>24 de Setiembre Nº 547</p>
								<i className='fa-brands fa-whatsapp text-danger'></i>
								<p className='psede'>381-4586594</p>
							</div>
							<div className='mapcont'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.1508288181763!2d-65.2082882289677!3d-26.830356131534288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1052b727d5%3A0x79d7cb767a9685ce!2sEl%20Molino!5e0!3m2!1ses-419!2sar!4v1709837627692!5m2!1ses-419!2sar'
									width='50%'
									height='50%'
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'></iframe>{' '}
							</div>
						</div>
					</div>
					<div className='divsede'>
						<p className='titlesede'>Tafi Viejo</p>
						<div className='subdivsede'>
							<div className='d-flex flex-column align-items-center'>
								<i className='fa-solid fa-location-dot text-danger'></i>
								<p className='psede'>Av. Alem Nº 157</p>
								<i className='fa-brands fa-whatsapp text-danger'></i>
								<p className='psede'>381-5683656</p>
							</div>
							<div className='mapcont'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12336.23246493682!2d-65.2516622964466!3d-26.738789974894118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1709837767132!5m2!1ses-419!2sar'
									width='50%'
									height='50%'
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'></iframe>
							</div>
						</div>
					</div>
					<div className='divsede'>
						<p className='titlesede'>Yerba Buena</p>
						<div className='subdivsede'>
							<div className='d-flex flex-column align-items-center'>
								<i className='fa-solid fa-location-dot text-danger'></i>
								<p className='psede'>Av. Aconquija Nº 3546</p>
								<i className='fa-brands fa-whatsapp text-danger'></i>
								<p className='psede'>381-4586156</p>
							</div>
							<div className='mapcont'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9784.785940906213!2d-65.2872661762399!3d-26.81405614075515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1709837731524!5m2!1ses-419!2sar'
									width='50%'
									height='50%'
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
