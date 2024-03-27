import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HomeMarcas = () => {
	return (
		<div>
			<div className='benef container-fluid'>
				<h3 className='textcarousel'>
					Marcas y productos con descuentos unicos! Encontralas en todas
					nuestras sedes
				</h3>
				<Carousel fade indicators={false} controls={false}>
					<Carousel.Item className='itemcarousel'>
						<div className='d-flex flex-column align-items-center justify-content-center'>
							<Link
								className='text-decoration-none d-flex flex-column align-items-center justify-content-center'
								to='https://kanpai.com.ar/'
								target='_blank'>
								<img
									src='/benficio(1).jpeg'
									alt='beneficio1'
									className='imagebenefit'
								/>
								<p className='pbenefit'>
									15% desc en Kanpai - Productos Alimenticios
								</p>
							</Link>
						</div>
					</Carousel.Item>
					<Carousel.Item className='itemcarousel'>
						<div className='d-flex flex-column align-item-center justify-content-center'>
							<Link
								className='text-decoration-none d-flex flex-column align-items-center justify-content-center'
								to='https://www.oxigenoropadeportiva.com/'
								target='_blank'>
								<img
									src='/beneficio(2).jpeg'
									alt='beneficio2'
									className='imagebenefit'
								/>
								<p className='pbenefit'>
									25% desc en Oxigeno - Ropa Deportiva
								</p>
							</Link>
						</div>
					</Carousel.Item>
					<Carousel.Item className='itemcarousel'>
						<div className='d-flex flex-column align-item-center justify-content-center'>
							<Link
								className='text-decoration-none d-flex flex-column align-items-center justify-content-center'
								to='https://www.instagram.com/shark.suplementos/?hl=es'
								target='_blank'>
								<img
									src='/beneficio(3).jpeg'
									alt='beneficio2'
									className='imagebenefit'
								/>
								<p className='pbenefit'>
									15 % desc en Shark - Suplementos Deportivos
								</p>
							</Link>
						</div>
					</Carousel.Item>
					<Carousel.Item className='itemcarousel'>
						<div className='d-flex flex-column align-item-center justify-content-center'>
							<Link
								className='text-decoration-none d-flex flex-column align-items-center justify-content-center'
								to='/productos'>
								<img
									src='/tienda.jpeg'
									alt='beneficio2'
									className='imagebenefit'
								/>
								<p className='pbenefit'>
									Ingresa ACA y conoce Nuestra Tienda de Productos
								</p>
							</Link>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};
