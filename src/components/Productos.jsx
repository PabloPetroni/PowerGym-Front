import React from 'react';
import Card from 'react-bootstrap/Card';
import { Whatsapp } from './Whatsapp';
import '../css/Productos.css';

export const Productos = () => {
	return (
		<div>
			<Whatsapp />
			<h1 className='title-serv'>SUPLEMENTACION DEPORTIVA</h1>
			<h2 className='subtitle-prod'>
				Encontra nuestros productos en todas nuestras sedes!
			</h2>
			<div className='d-flex row row-cols-sm-3  row-cols-lg-4 justify-content-center p-3'>
				<Card.Body className='cardaboutprod'>
					<Card.Img
						className='imgcardprod'
						variant='top'
						src='/peanut-butter.jpg'
					/>
					<Card.Title className='cardtitleaboutprod'>
						Pasta de Mani
					</Card.Title>
					<div className='d-flex justify-content-around mt-3 mb-4'>
						<a href='/modalproductos'>
							<i className='icoprod fa-solid fa-circle-info'></i>
						</a>
						<a href='/error404'>
							<i className='icoprod fa-solid fa-cart-shopping'></i>
						</a>
					</div>
				</Card.Body>

				<Card.Body className='cardaboutprod'>
					<Card.Img
						className='imgcardprod'
						variant='top'
						src='/creatina.jpg'
					/>
					<Card.Title className='cardtitleaboutprod'>Creatina </Card.Title>
					<div className='d-flex justify-content-around mt-3 mb-4'>
						<a href=''>
							<i className='icoprod fa-solid fa-circle-info'></i>
						</a>
						<a href='/error404'>
							<i className='icoprod fa-solid fa-cart-shopping'></i>
						</a>
					</div>
				</Card.Body>

				<Card.Body className='cardaboutprod'>
					<Card.Img
						className='imgcardprod'
						variant='top'
						src='/lcarnitina-liquida.jpg'
					/>
					<Card.Title className='cardtitleaboutprod'>
						Carnitina Liquida{' '}
					</Card.Title>
					<div className='d-flex justify-content-around mt-3 mb-4'>
						<a href=''>
							<i className='icoprod fa-solid fa-circle-info'></i>
						</a>
						<a href='/error404'>
							<i className='icoprod fa-solid fa-cart-shopping'></i>
						</a>
					</div>
				</Card.Body>

				<Card.Body className='cardaboutprod'>
					<Card.Img
						className='imgcardprod'
						variant='top'
						src='/fAminobol.jpg'
					/>
					<Card.Title className='cardtitleaboutprod'>
						F. Aminobol{' '}
					</Card.Title>
					<div className='d-flex justify-content-around mt-3 mb-4'>
						<a href=''>
							<i className='icoprod fa-solid fa-circle-info'></i>
						</a>
						<a href='/error404'>
							<i className='icoprod fa-solid fa-cart-shopping'></i>
						</a>
					</div>
				</Card.Body>
				<Card.Body className='cardaboutprod'>
					<Card.Img
						className='imgcardprod'
						variant='top'
						src='/l-glutamina.jpg'
					/>
					<Card.Title className='cardtitleaboutprod'>
						L. Glutamina{' '}
					</Card.Title>
					<div className='d-flex justify-content-around mt-3 mb-4'>
						<a href=''>
							<i className='icoprod fa-solid fa-circle-info'></i>
						</a>
						<a href='/error404'>
							<i className='icoprod fa-solid fa-cart-shopping'></i>
						</a>
					</div>
				</Card.Body>
				<Card.Body className='cardaboutprod'>
					<Card.Img
						className='imgcardprod'
						variant='top'
						src='/Amino-gainer3.jpg'
					/>
					<Card.Title className='cardtitleaboutprod'>
						Amino Gainer
					</Card.Title>
					<div className='d-flex justify-content-around mt-3 mb-4'>
						<a href=''>
							<i className='icoprod fa-solid fa-circle-info'></i>
						</a>
						<a href='/error404'>
							<i className='icoprod fa-solid fa-cart-shopping'></i>
						</a>
					</div>
				</Card.Body>
			</div>
		</div>
	);
};
