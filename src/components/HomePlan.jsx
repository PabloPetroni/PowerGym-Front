import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HomePlan = () => {
	return (
		<div>
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
							<a className='text-decoration-none' href='/planes'>
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
							<a className='text-decoration-none' href='/planes'>
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
							<a className='text-decoration-none' href='/planes'>
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
		</div>
	);
};
