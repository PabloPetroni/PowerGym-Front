import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HomeAct = () => {
	return (
		<div>
			<div className='container-fluid'>
				<h2 className='title-plan'>NUESTRAS ACTIVIDADES Y CLASES</h2>
				<Carousel fade interval={2500} controls={false} indicators={false}>
					<Carousel.Item className='itemcarousel'>
						<div className='icocarousel'>
							<Link to='/actividades'>
								<img
									className='imgcarousel'
									src='/BOXEO.jpg'
									alt='imagen boxeo'
								/>
							</Link>
							<p className='text-center pimgcarousel'>Boxeo</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'>Alta</span>{' '}
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'>45 Minutos</span>
							</i>
						</div>
						<div className='icocarousel'>
							<Link to='/actividades'>
								<img
									className='imgcarousel'
									src='/FUNCIONAL.jpg'
									alt='imagen funcional'
								/>
							</Link>
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
							<Link to='/actividades'>
								<img
									className='imgcarousel'
									src='/YOGA.jpg'
									alt='imagen yoga'
								/>
							</Link>
							<p className='text-center pimgcarousel'>Yoga</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Baja</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 75 Minutos</span>
							</i>
						</div>
						<div className='icocarousel'>
							<Link to='/actividades'>
								<img
									className='imgcarousel'
									src='/CROSSFIT.jpg'
									alt='imagen crossfit'
								/>
							</Link>
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
							<Link to='/actividades'>
								<img
									className='imgcarousel'
									src='/MUSCULACION.jpg'
									alt='imagen musculacion'
								/>
							</Link>
							<p className='text-center pimgcarousel'>Musculacion</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Alta</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 60 Minutos</span>
							</i>
						</div>
						<div className='icocarousel'>
							<Link to='/actividades'>
								<img
									className='imgcarousel'
									src='/LOW-SPINNING.jpg'
									alt='imagen lowspinning'
								/>
							</Link>
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
							<Link to='/actividades'>
								<img
									className='imgcarousel'
									src='/ZUMBA.jpg'
									alt='imagen zumba'
								/>
							</Link>
							<p className='text-center pimgcarousel'>Zumba</p>
							<i className='fa-solid fa-bolt mb-3 text-danger'>
								<span className='intact'> Media</span>
							</i>
							<i className='fa-solid fa-clock text-danger'>
								<span className='intact'> 60 Minutos</span>
							</i>
						</div>
						<div className='icocarousel'>
							<Link to='/actividades'>
								<img
									className='imgcarousel'
									src='/YOGA.jpg'
									alt='imagen yoga'
								/>
							</Link>
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
		</div>
	);
};
