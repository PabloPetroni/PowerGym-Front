import React from 'react';
import '../css/Whatsapp.css';

export const Whatsapp = () => {
	return (
		<div>
			<a
				href='https://api.whatsapp.com/send?phone=+543814581382&text=Hola!%20Quiero%20consultar%20por%20servicios%20de%20asesoramiento%20legal.%20'
				className='float'
				target='_blank'>
				<i className='fa fa-whatsapp my-float'></i>
			</a>
		</div>
	);
};
