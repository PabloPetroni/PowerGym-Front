import React, { useEffect } from 'react';
import { Clima } from '../components/Clima.jsx';
import '../css/Home.css';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Whatsapp } from './Whatsapp.jsx';

export const Home = () => {
	useEffect(() => {
		function startCountAnimation(targetId, endValue) {
			let current = 0;
			let interval;

			// Función que incrementa el valor
			function updateValue() {
				current += increment;
				if (current >= endValue) {
					current = endValue;
					clearInterval(interval);
				}
				target.textContent = '+' + current.toLocaleString();
			}

			const target = document.getElementById(targetId);
			const increment = Math.ceil(endValue / 100); // Divide el valor final por 100 para obtener un incremento gradual

			// Función para verificar si el elemento está en el viewport
			function isInViewport(element) {
				const rect = element.getBoundingClientRect();
				return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <=
						(window.innerHeight ||
							document.documentElement.clientHeight) &&
					rect.right <=
						(window.innerWidth || document.documentElement.clientWidth)
				);
			}

			// Función para reiniciar la animación cuando el elemento está en el viewport
			function restartAnimation() {
				if (isInViewport(target)) {
					current = 0; // Reinicia el valor actual
					clearInterval(interval); // Limpia el intervalo anterior
					interval = setInterval(updateValue, 40); // Inicia la animación nuevamente
				}
			}

			// Agrega un listener para el evento scroll
			window.addEventListener('scroll', restartAnimation);
			restartAnimation(); // Llama a la función al inicio para verificar si el elemento está en el viewport
		}

		startCountAnimation('promo1-value', 70);
		startCountAnimation('promo2-value', 45);
		startCountAnimation('promo3-value', 500);
		startCountAnimation('promo4-value', 700);
		// Función para agregar animación cuando los elementos entran en el viewport
		function animateOnScroll() {
			const elements = document.querySelectorAll('.animate-on-scroll');

			function isInViewport(element) {
				const rect = element.getBoundingClientRect();
				return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <=
						(window.innerHeight ||
							document.documentElement.clientHeight) &&
					rect.right <=
						(window.innerWidth || document.documentElement.clientWidth)
				);
			}
			elements.forEach((element) => {
				if (isInViewport(element)) {
					// Si el elemento está en el viewport, agrega la clase de animación correspondiente
					if (element.classList.contains('animate-from-left')) {
						element.classList.add('animated-slide-from-left');
					} else if (element.classList.contains('animate-from-right')) {
						element.classList.add('animated-slide-from-right');
					}
				} else {
					// Si el elemento no está en el viewport, elimina la clase de animación
					element.classList.remove('animated-slide-from-left');
					element.classList.remove('animated-slide-from-right');
				}
			});
		}
		window.addEventListener('scroll', animateOnScroll);
		animateOnScroll();
	}, []);

	return (
	
		<div className='container-fluid'>
				<Whatsapp/>
			<div>
				<Clima />
			</div>

			<div className='video-container my-1'>
				<h2 className='video-title'>
					Somos el <span className='power-text'>Centro Fitness</span> mas
					grande de Tucuman!
				</h2>
				<p className='video-subtitle'>
					Instalaciones renovadas, aforo limitado y atención personalizada.
					Además, disponemos de un servicio propio de nutricion y
					fisioterapia. ¡Tenemos todo lo que buscas y mucho más!
				</p>
				<video className='video' width='100%' height='auto' autoPlay loop>
					<source src='/VIDEO-ENTRADA-PROVISIONAL.mp4' type='video/mp4' />
				</video>
			</div>

			<h2 className='title-secsrev backg container-fluid'>
				Disfruta todos los beneficios de ser
				<span className='power-text'> POWER</span>!
			</h2>
			<div className='benef container-fluid'>
				<h3 className='textcarousel'>
					Marcas y productos con descuentos unicos! Encontralas en todas
					nuestras sedes
				</h3>
				<Carousel fade indicators={false}>
					<Carousel.Item className='itemcarousel'>
						<div>
							<img
								src='/benficio(1).jpeg'
								alt='beneficio1'
								className='imagebenefit'
							/>
						</div>
					</Carousel.Item>
					<Carousel.Item className='itemcarousel'>
						<div>
							<img
								src='/beneficio(2).jpeg'
								alt='beneficio2'
								className='imagebenefit'
							/>
						</div>
					</Carousel.Item>
					<Carousel.Item className='itemcarousel'>
						<div>
							<img
								src='/beneficio(3).jpeg'
								alt='beneficio2'
								className='imagebenefit'
							/>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className='cont3 container-fluid'>
				<div className='promo1'>
					<p id='promo1-value' className='title-promo'>
						+0
					</p>
					<p id='promo2-value' className='title-promo'>
						+0
					</p>
					<p id='promo3-value' className='title-promo'>
						+0
					</p>
					<p id='promo4-value' className='title-promo'>
						+0
					</p>
				</div>
				<div className='promo2'>
					<p className='subtitle-promo '>Maquinas Fitness y Cardio</p>
					<p className='subtitle-promo '>Clases dirigidas por semana</p>
					<p className='subtitle-promo '>m2 de Instalac</p>
					<p className='subtitle-promo '>Socios activos</p>
				</div>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='cont4 container'>
				<h2 className='title-plan'>
					ELEGI EL{' '}
					<span className='power-text'>PLAN QUE MAS TE CONVENGA</span>
				</h2>
				<h4 className='subtitle-plan'>
					Entrena con nosotros elegiendo nuestros planes acorde a tus
					necesidades. Todos incluyen acceso a areas de cardio , peso
					integrado , peso libre, funcional, profesores de piso para
					creacion de rutinas , vestidores y mas!
				</h4>
				<div className='subcont4'>
					<div className='cont-plan'>
						<p className='item-plan marginplant'>
							Area de peso libre, peso integrado y clases grupales
						</p>
						<p className='item-plan'>
							5 pases al mes. Invita a tus amigos a entrenar
						</p>
						<p className='item-plan'>Club de beneficios</p>
						<p className='item-plan'>
							Salas de relax y sillones de masajes
						</p>
						<p className='item-plan mt-4'>
							Acceso ilimitado a todas las sedes
						</p>
					</div>
					<div className='cont-plan2'>
						<div className='divplan'>
							<a href='/planes.jsx'>
								<p className='listplan'>Plan Power</p>
								<Card className='cardplan'>
									<Card.Body className='checkplan'>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-check icoplan'></i>
									</Card.Body>
								</Card>
							</a>
						</div>
						<div className='divplan'>
							<a href='/planes'>
								<p className='listplan'>Plan Classic</p>
								<Card className='cardplan'>
									<Card.Body className='checkplan'>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-xmark icoplan'></i>
										<i className='fa-regular fa-circle-xmark icoplan'></i>
									</Card.Body>
								</Card>
							</a>
						</div>
						<div className='divplan'>
							<a href='/planes'>
								<p className='listplan'>Plan Muscle</p>
								<Card className='cardplan'>
									<Card.Body className='checkplan'>
										<i className='fa-regular fa-circle-xmark icoplan'></i>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-check icoplan'></i>
										<i className='fa-regular fa-circle-xmark icoplan'></i>
										<i className='fa-regular fa-circle-xmark icoplan'></i>
									</Card.Body>
								</Card>
							</a>
						</div>
					</div>
				</div>
				<div className='divbtninscrip'>
					<Link to='/registro' className='btninscrip'>
						<i className='iconavbar fa-solid fa-id-card'></i>Inscribite
						Ahora!
					</Link>
				</div>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='container-fluid'>
				<h2 className='title-plan'>NUESTRAS ACTIVIDADES Y CLASES</h2>
				<Carousel fade interval={2500} controls={false} indicators={false}>
					<Carousel.Item className='itemcarousel'>
						<div className='icocarousel'>
							<a href='/actividades'>
								<img
									className='imgcarousel'
									src='/BOXEO.jpg'
									alt='imagen boxeo'
								/>
							</a>
							<p className='text-center pimgcarousel'>Boxeo</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'>Alta</span>{' '}
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'>45 Minutos</span>
							</i>
						</div>
						<div className='icocarousel'>
							<a href='/actividades'>
								<img
									className='imgcarousel'
									src='/FUNCIONAL.jpg'
									alt='imagen funcional'
								/>
							</a>
							<p className='text-center pimgcarousel'>Funcional</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Media/Alta</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 45 Minutos</span>
							</i>
						</div>
					</Carousel.Item>
					<Carousel.Item className='itemcarousel'>
						<div className='icocarousel'>
							<a href='/actividades'>
								<img
									className='imgcarousel'
									src='/YOGA.jpg'
									alt='imagen yoga'
								/>
							</a>
							<p className='text-center pimgcarousel'>Yoga</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Baja</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 75 Minutos</span>
							</i>
						</div>
						<div className='icocarousel'>
							<a href='/actividades'>
								<img
									className='imgcarousel'
									src='/CROSSFIT.jpg'
									alt='imagen crossfit'
								/>
							</a>
							<p className='text-center pimgcarousel'>Crossfit</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Media/Alta</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 60 Minutos</span>
							</i>
						</div>
					</Carousel.Item>
					<Carousel.Item className='itemcarousel'>
						<div className='icocarousel'>
							<a href='/actividades'>
								<img
									className='imgcarousel'
									src='/MUSCULACION.jpg'
									alt='imagen musculacion'
								/>
							</a>
							<p className='text-center pimgcarousel'>Musculacion</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Alta</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 60 Minutos</span>
							</i>
						</div>
						<div className='icocarousel'>
							<a href='/actividades'>
								<img
									className='imgcarousel'
									src='/LOW-SPINNING.jpg'
									alt='imagen lowspinning'
								/>
							</a>
							<p className='text-center pimgcarousel'>Spinning</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Media</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 45 Minutos</span>
							</i>
						</div>
					</Carousel.Item>
					<Carousel.Item className='itemcarousel'>
						<div className='icocarousel'>
							<a href='/actividades'>
								<img
									className='imgcarousel'
									src='/ZUMBA.jpg'
									alt='imagen zumba'
								/>
							</a>
							<p className='text-center pimgcarousel'>Zumba</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Media</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 60 Minutos</span>
							</i>
						</div>
						<div className='icocarousel'>
							<a href='/actividades'>
								<img
									className='imgcarousel'
									src='/YOGA.jpg'
									alt='imagen yoga'
								/>
							</a>
							<p className='text-center pimgcarousel'>Yoga</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								{' '}
								<span className='intact'> Baja</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 75 Minutos</span>
							</i>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='secserv container'>
				<h2 className='title-secsrev'>NUESTROS ESPACIOS Y SERVICIOS</h2>
				<div className='subdivsecserv animate-on-scroll animate-from-left'>
					<div className='div-secserv'>
						<h4 className='subtitle-secsrev'>ATENCION PERSONALIZADA</h4>
						<p className='text-secserv'>
							Optimiza los resultados y minimiza el riesgo de lesión
							siguiendo las instrucciones de nuestros entrenadores.
						</p>
					</div>
					<div className='w-50 d-flex justify-content-center align-items-center position-relative'>
						<img
							className='img-secserv mb-sm-4'
							src='/PERSONAL-TRAINING.jpg'
							alt='imagen atencion personalizada'
						/>
						<a href='/servicios'>
							<p className='psecserv'>VER MAS</p>
						</a>
					</div>
				</div>
				<div className='subdivsecserv ms-2 mt-5 animate-on-scroll animate-from-right'>
					<div className='w-50 d-flex justify-content-center align-items-center position-relative'>
						<img
							className='img-secserv mb-sm-4'
							src='/ZONA-CARDIOVASCULAR.jpg'
							alt='imagen cardio'
						/>
						<a href='/servicios'>
							<p className='psecserv'>VER MAS</p>
						</a>
					</div>
					<div className='div-secserv'>
						<h4 className='subtitle-secsrev'>ZONA CARDIO</h4>
						<p className='text-secserv'>
							Pierde el peso de más en nuestras cintas, elípticas y
							bicicletas de última generación en un ambiente amplio y
							relajado
						</p>
					</div>
				</div>
				<div className='subdivsecserv animate-on-scroll animate-from-left'>
					<div className='div-secserv'>
						<h4 className='subtitle-secsrev'>SALAS DE PESO LIBRE</h4>
						<p className='text-secserv'>
							Aumenta tu fuerza y gana volumen entrenando en nuestra sala
							de peso libre donde encontrarás todo lo que necesitas para
							llegar al límite de tus posibilidades
						</p>
					</div>
					<div className='w-50 d-flex justify-content-center align-items-center position-relative'>
						<img
							className='img-secserv mb-sm-4'
							src='/SALA-DE-PES-LLIURE.jpg'
							alt='imagen peso libre'
						/>
						<a href='/servicios'>
							<p className='psecserv'>VER MAS</p>
						</a>
					</div>
				</div>
				<div className='subdivsecserv ms-2 mt-5 animate-on-scroll animate-from-right'>
					<div className='w-50 d-flex justify-content-center align-items-center position-relative'>
						<img
							className='img-secserv mb-sm-4'
							src='/NUTRICION.jpeg'
							alt='imagen nutricion'
						/>
						<a href='/servicios'>
							<p className='psecserv'>VER MAS</p>
						</a>
					</div>
					<div className='div-secserv'>
						<h4 className='subtitle-secsrev'>NUTRICION Y FISIO</h4>
						<p className='text-secserv'>
							Disponemos de un servicio propio de dietética y
							fisioterapia para ayudarte a lograr sin dilaciones tus
							objetivos con la máxima profesionalidad
						</p>
					</div>
				</div>
				<div className='subdivsecserv pb-5 animate-on-scroll animate-from-left'>
					<div className='div-secserv'>
						<h4 className='subtitle-secsrev'>ACTIVIDADES DIRIGIDAS</h4>
						<p className='text-secserv'>
							Pilates, zumba, tonificación y muchísimas actividades más
							que podrás disfrutar en compañía de otras personas dónde
							los principales objetivos son tonificar, mejorar la
							coordinación, la capacidad aeróbica y la flexibilidad
						</p>
					</div>
					<div className='w-50 d-flex justify-content-center align-items-center position-relative'>
						<img
							className='img-secserv mb-sm-4'
							src='/ACTIVIDADES_DIRIGIDAS.jpg'
							alt='imagen actividad'
						/>
						<a href='/servicios'>
							<p className='psecserv'>VER MAS</p>
						</a>
					</div>
				</div>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='video-container container-fluid'>
				<p className='p-secpromo'>
					Para que no tengas excusas a la hora de entrenar , estamos
					abierto todos los días, asi puedas disfrutar de un buen
					entrenamiento , de un espacio agradable y buena música!
				</p>
				<a href='/registro'>
					<button className='btninscripsecpromo'>
						<i className='iconavbar fa-solid fa-id-card'></i>Inscribite
						Ahora!
					</button>
				</a>
				<img
					className='img-secpromo'
					src='/risen-wang-20jX9b35r_M-unsplash.jpg'
					alt='imagen espacio'
				/>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='container-fluid'>
				<h2 className='title-plan'>NUESTRAS SEDES</h2>
				<div className='contsede'>
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
									width='95%'
									height='100%'
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
									width='95%'
									height='100%'
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
									width='95%'
									height='100%'
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
