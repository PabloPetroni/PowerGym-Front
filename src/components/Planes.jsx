import React from 'react';
import '../css/Planes.css';
import { Whatsapp } from './Whatsapp';

export const Planes = () => {
	return (
		<>
			<div className='container-fluid'>
				<Whatsapp />
				<h2 className='title-act'>ELEGI EL PLAN DE TU PREFERENCIA </h2>
				<div className='d-flex flex-sm-column'>
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
									<p className='pact'>
										Aumenta la resistencia, la concentración y la
										flexibilidad muscular. Movimientos fluidos, lentos
										y al ritmo de una respiración adecuada
									</p>
								</div>
							</div>
						</div>
					</div>

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
										<p className='pact'>
											Reduce el % de grasa y refuerza las
											articulaciones. Ejercicio cardiovascular con
											bicicleta estática al ritmo de la música
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

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
										<p className='pact'>
											Actividad física variante del aeróbic que
											consiste en la realización de una secuencia de
											ejercicios sobre un escalón, denominado step
										</p>
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
			</div>
		</>
	);
};
