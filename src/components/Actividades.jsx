import React from 'react';
import '../css/Actividades.css';
import { Whatsapp } from './Whatsapp';
import { Profesores } from './Profesores';

export const Actividades = () => {
	return (
		<>
			<div className='container-fluid'>
				<Whatsapp />
				<h2 className='title-act'>ACTIVIDADES Y CLASES DIRIGIDAS</h2>
				<h3 className='subtitle-act'>
					INTENSIDAD<span className='titint'> BAJA</span>
				</h3>
				<div className='div-act'>
					<div className='flip-container'>
						<div className='flipper'>
							<div className='front'>
								<img
									className='flip-image'
									src='/pilates.jpg'
									alt='pilates'
								/>
								<h4 className='tit-img'>Pilates</h4>
							</div>
							<div className='back'>
								<h4 className='tact'>Pilates</h4>
								<p className='pact'>
									Aumenta la resistencia, la concentración y la
									flexibilidad muscular. Movimientos fluidos, lentos y
									al ritmo de una respiración adecuada
								</p>
								<p className='duract'>
									<span className='durtact '>Duracion:</span> 60
									Minutos
								</p>
								<p className='durtacttrain'>
									<span className='durtact'>Trainer:</span> Alejandra
									Morel
								</p>
							</div>
						</div>
					</div>

					<div className='div-act'>
						<div className=' text-center flip-container'>
							<div className='flipper'>
								<div className='front'>
									<img
										className='flip-image'
										src='/YOGA.jpg'
										alt='yoga'
									/>
									<h4 className='tit-img'>Yoga</h4>
								</div>
								<div className='back'>
									<h4 className='tact'>Yoga</h4>
									<p className='pact'>
										Encuentra la harmonia entre cuerpo y mente,
										tonificando tu cuerpo a través de las posturas
										(asanas) y la respiración
									</p>
									<p className='duract'>
										<span className='durtact'>Duracion:</span> 70
										Minutos
									</p>
									<p className='durtacttrain'>
										<span className='durtact'>Trainer:</span>{' '}
										Alejandra Morel
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h3 className='subtitle-act'>
					INTENSIDAD <span className='titint'>MEDIA</span>
				</h3>
				<div className='div-act'>
					<div className='flip-container'>
						<div className='flipper'>
							<div className='front'>
								<img
									className='flip-image'
									src='/CROSSFIT.jpg'
									alt='crossfit'
								/>
								<h4 className='tit-img'>Crossfit</h4>
							</div>
							<div className='back'>
								<h4 className='tact'>Crossfit</h4>
								<p className='pact'>
									Reduce el dolor de espalda, mejora la postura
									corporal y evita lesiones reforzando la pared
									abdominal. Sesión completa de ejercicios abdominales
								</p>
								<p className='duract'>
									<span className='durtact'>Duracion:</span> 45 Minutos
								</p>
								<p className='durtacttrain'>
									<span className='durtact'>Trainer:</span> Melisa
									Sanchez
								</p>
							</div>
						</div>
					</div>

					<div className='d-flex justify-content-center align-items-center'>
						<div className=' text-center flip-container'>
							<div className='flipper'>
								<div className='front'>
									<img
										className='flip-image'
										src='/LOW-SPINNING.jpg'
										alt='spinnig'
									/>
									<h4 className='tit-img'>Spinning</h4>
								</div>
								<div className='back'>
									<h4 className='tact'>Spinning</h4>
									<p className='pact'>
										Reduce el % de grasa y refuerza las
										articulaciones. Ejercicio cardiovascular con
										bicicleta estática al ritmo de la música
									</p>
									<p className='duract'>
										<span className='durtact'>Duracion:</span> 50
										Minutos
									</p>
									<p className='durtacttrain'>
										<span className='durtact'>Trainer:</span>Julieta
										Roldan
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='d-flex justify-content-center align-items-center'>
						<div className=' text-center flip-container'>
							<div className='flipper'>
								<div className='front'>
									<img
										className='flip-image'
										src='/zumba.png'
										alt='zumba'
									/>
									<h4 className='tit-img'>Zumba</h4>
								</div>
								<div className='back'>
									<h4 className='tact'>Zumba</h4>
									<p className='pact'>
										Método de entrenamiento revolucionario que ayuda
										en el mantenimiento del estado físico. Combina
										ritmo y coreografías de diferentes partes del
										mundo
									</p>
									<p className='duract'>
										<span className='durtact'>Duracion:</span> 45
										Minutos
									</p>
									<p className='durtacttrain'>
										<span className='durtact'>Trainer:</span> Karina
										Navarro
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h3 className='subtitle-act'>
					INTENSIDAD<span className='titint'> ALTA</span>
				</h3>
				<div className='div-act'>
					<div className='flip-container'>
						<div className='flipper'>
							<div className='front'>
								<img
									className='flip-image'
									src='/boxeo.jpeg'
									alt='boxeo'
								/>
								<h4 className='tit-img'>Boxeo</h4>
							</div>
							<div className='back'>
								<h4 className='tact'>Boxeo</h4>
								<p className='pact'>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Culpa recusandae ipsam quibusdam beatae
									laudantium aperiam minus quod, corrupti commodi
								</p>
								<p className='duract'>
									<span className='durtact'>Duracion:</span> 60 Minutos
								</p>
								<p className='durtacttrain'>
									<span className='durtact'>Trainer:</span>Axel Gines
								</p>
							</div>
						</div>
					</div>
					<div className='div-act'>
						<div className='flip-container'>
							<div className='flipper'>
								<div className='front'>
									<img
										className='flip-image'
										src='/FUNCIONAL.jpg'
										alt='funcional'
									/>
									<h4 className='tit-img'>Funcional</h4>
								</div>
								<div className='back'>
									<h4 className='tact'>Funcional</h4>
									<p className='pact'>
										Actividad física variante del aeróbic que consiste
										en la realización de una secuencia de ejercicios
										sobre un escalón, denominado step
									</p>
									<p className='duract'>
										<span className='durtact'>Duracion:</span> 45
										Minutos
									</p>
									<p className='durtacttrain'>
										<span className='durtact'>Trainer:</span> Melisa
										Sanchez
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='divbtnserv'>
					<Link to='/login'>
						<button className='btnturnoserv'>
							<i className='iconavbar fa-solid fa-id-card'></i>Reserva tu
							Clase!
						</button>
					</Link>
				</div>
				<Profesores />
			</div>
		</>
	);
};
