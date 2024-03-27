import React, { useEffect } from 'react';
import { Clima } from '../components/Clima.jsx';
import '../css/Home.css';
import { Whatsapp } from './Whatsapp.jsx';
import { Comentarios } from './Comentarios.jsx';
import { HomeServ } from './HomeServ.jsx';
import { HomeAct } from './HomeAct.jsx';
import { HomeSedes } from './HomeSedes.jsx';
import { HomePlan } from './HomePlan.jsx';
import { HomeMarcas } from './HomeMarcas.jsx';

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
			<Whatsapp />
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

			<HomeMarcas />

			<div className='cont3'>
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
				className='mx-5 my-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<HomePlan />

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<HomeAct />

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<HomeServ />

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

			<Comentarios />

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<HomeSedes />
		</div>
	);
};
