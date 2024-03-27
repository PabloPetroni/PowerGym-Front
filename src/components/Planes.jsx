import React, { useRef, useState } from 'react';
import '../css/Planes.css';
import { Whatsapp } from './Whatsapp';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const Planes = () => {
	const form = useRef();
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [mensaje, setMensaje] = useState('');

	const validarFormContacto = (e) => {
		e.preventDefault();
		const validarEmail = /^[\w+.-]+@\w+([.-]?\w+)*(\.\w{2,})+$/;
		const resultadoValidacionEmail = validarEmail.test(email);

		const validarNombre = /^[a-zA-Z]+$/;
		const resultadoValidacionNombre = validarNombre.test(nombre);

		if (nombre === '' || email === '' || mensaje === '') {
			mostrarError('*Todos los campos son obligatorios*');
		} else if (!resultadoValidacionEmail) {
			mostrarError('*Ingrese un Email valido*');
		} else if (!resultadoValidacionNombre) {
			mostrarError(
				'*Ingrese un nombre que no contenga signos, numeros ni caracteres especiales*'
			);
		} else if (mensaje.length > 300) {
			mostrarError('*El texto no puede superar los 300 caracteres*');
		} else {
			sendEmail(e);
		}
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_qzvax0v',
				// 'template_qar0tof',
				'template_fgl8bsq',
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

	const mostrarError = (mensaje) => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: mensaje,
		});
	};

	return (
		<>
			<div className='container-fluid'>
				<Whatsapp />
				<h2 className='title-act'>NUESTROS PLANES MENSUALES </h2>
				<h3 className='subtitle-plan mt-5'>
					Todos nusestros planes incluyen acceso ilimitado a nuestras areas
					de cardio, peso integrado, peso libre y profesores de piso para
					ayudarte con tus rutinas de entrenamiento!.
				</h3>
				<div className='containerplan'>
					<div>
						<h3 className='subtitle-act'>
							Plan<span className='titint'> POWER!</span>
						</h3>
						<div className='div-plan'>
							<div className='flip-container'>
								<div className='flipper'>
									<div className='front'>
										<img
											className='flip-imageplan'
											src='/pilates.jpg'
											alt='power'
										/>
										<h4 className='tit-img'>POWER!</h4>
									</div>
									<div className='back'>
										<h4 className='tact'>POWER!</h4>
										<ul className='pact'>
											<li>
												Invita hasta 5 amigos al mes a entrenar.
											</li>
											<li>
												Club de benefecios y descuentos en marcas
												asociadas.
											</li>
											<li>Salas de relax y masajes.</li>
											<li>
												Acceso ilimitado a todas nuestras sedes.
											</li>
											<li>
												Acceso a todas nuestras clases y
												actividades.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h3 className='subtitle-act'>
							Plan <span className='titint'>CLASSIC</span>
						</h3>
						<div className='div-act'>
							<div className='d-flex justify-content-center align-items-center'>
								<div className=' text-center flip-container'>
									<div className='flipper'>
										<div className='front'>
											<img
												className='flip-imageplan'
												src='/LOW-SPINNING.jpg'
												alt='classic'
											/>
											<h4 className='tit-img'>CLASSIC</h4>
										</div>
										<div className='back'>
											<h4 className='tact'>CLASSIC</h4>
											<ul className='pact'>
												<li>
													Club de benefecios y descuentos en marcas
													asociadas.
												</li>
												<li>
													Acceso ilimitado a todas nuestras sedes.
												</li>
												<li>
													Acceso a todas nuestras clases y
													actividades, hasta 3 veces por semana.
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h3 className='subtitle-act'>
							Plan<span className='titint'> MUSCLE</span>
						</h3>
						<div className='div-act'>
							<div className='div-act'>
								<div className='flip-container'>
									<div className='flipper'>
										<div className='front'>
											<img
												className='flip-imageplan'
												src='/FUNCIONAL.jpg'
												alt='muscle'
											/>
											<h4 className='tit-img'>MUSCLE</h4>
										</div>
										<div className='back'>
											<h4 className='tact'>MUSCLE</h4>
											<ul className='pact'>
												<li>
													Club de benefecios y descuentos en marcas
													asociadas.
												</li>
												<li>
													Acceso ilimitado a todas nuestras sedes.
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='divbtnserv'>
					<a href='/login'>
						<button className='btnturnoserv mt-4'>
							<i className='iconavbar fa-solid fa-id-card'></i>
							Inscribite YA!
						</button>
					</a>
				</div>

				<hr
					className='mx-5 my-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>

				<div>
					<h2 className='title-plan'>FORMULARIO DE CONSULTA</h2>
					<h3 className='subtitle-plan'>
						Si tenes alguna duda o consulta sobre nuestros planes,
						escribinos y te respondemos a la brevedad!
					</h3>
					<div className='d-flex justify-content-center'>
						<form
							className='cajaFormplan'
							ref={form}
							onSubmit={sendEmail}>
							<label className='labelcontact'>Tu Nombre</label>
							<input
								className='inputcontactemail'
								type='text'
								name='user_name'
								onChange={(e) => setNombre(e.target.value)}
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
								onChange={(e) => setEmail(e.target.value)}
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
								onChange={(e) => setMensaje(e.target.value)}
								required
							/>
							<button
								className='btncont'
								type='submit'
								value='Enviar Formulario'
								onClick={validarFormContacto}>
								<i className='iconavbar fa-solid fa-share-from-square'></i>
								Enviar Formulario
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
