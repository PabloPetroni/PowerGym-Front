import React from 'react';
import { Link } from 'react-router-dom';

export const HomeServ = () => {
	return (
		<div>
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
							className='img-secserv'
							src='/PERSONAL-TRAINING.jpg'
							alt='imagen atencion personalizada'
						/>
						<Link to='/servicios'>
							<p className='psecserv position-absolute bottom-0 start-50 translate-middle-x'>
								VER MAS
							</p>
						</Link>
					</div>
				</div>
				<div className='subdivsecserv ms-2 mt-5 animate-on-scroll animate-from-right'>
					<div className='w-50 d-flex justify-content-center align-items-center position-relative'>
						<img
							className='img-secserv '
							src='/ZONA-CARDIOVASCULAR.jpg'
							alt='imagen cardio'
						/>
						<Link to='/servicios' className='text-center'>
							<p className='psecserv position-absolute bottom-0 start-50 translate-middle-x'>
								VER MAS
							</p>
						</Link>
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
							className='img-secserv'
							src='/SALA-DE-PES-LLIURE.jpg'
							alt='imagen peso libre'
						/>
						<Link to='/servicios'>
							<p className='psecserv position-absolute bottom-0 start-50 translate-middle-x'>
								VER MAS
							</p>
						</Link>
					</div>
				</div>
				<div className='subdivsecserv ms-2 mt-5 animate-on-scroll animate-from-right'>
					<div className='w-50 d-flex justify-content-center align-items-center position-relative'>
						<img
							className='img-secserv'
							src='/NUTRICION.jpeg'
							alt='imagen nutricion'
						/>
						<Link to='/servicios'>
							<p className='psecserv position-absolute bottom-0 start-50 translate-middle-x'>
								VER MAS
							</p>
						</Link>
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
							className='img-secserv'
							src='/ACTIVIDADES_DIRIGIDAS.jpg'
							alt='imagen actividad'
						/>
						<Link to='/servicios'>
							<p className='psecserv position-absolute bottom-0 start-50 translate-middle-x'>
								VER MAS
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
