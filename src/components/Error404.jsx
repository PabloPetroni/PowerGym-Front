import React from 'react';
import '../css/Error404.css';
import { Link } from 'react-router-dom';
import { Whatsapp } from './Whatsapp';

export const Error404 = () => {
	return (
		<div className='position-relative text-center'>
			<Whatsapp />
			<div className='body404'>
				<h4 className='title404'>ERROR 404!</h4>
				<h3 className='subtitle404'>Pagina en construccion</h3>
			</div>
			<div className='button-container'>
				<Link className='boton404' to='/home'>
					<i className='iconavbar fa-solid fa-house'></i>
					Volver a Home
				</Link>
			</div>
		</div>
	);
};
