import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Pagos.css'
export const GenerarPago = () => {
	const [showModal, setShowModal] = useState(true);
	const navigate = useNavigate();
	// Función para cerrar el modal
	const handleCloseModal = () => {
		setShowModal(false);
		navigate('/pagosusuarios');
	};

	return (
		<>
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title className='text-white'>
						Abonar cuota/s pendiente/s
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3 text-white' controlId=''>
							<Form.Label>
								Puedes abonar tus cuotas pendientes con los siguientes
								medios de pago:
							</Form.Label>
							<Form.Label>Cuenta Banco Galicia : </Form.Label>
							<ul>
								<li>
									<b>Caja de Ahorro en Pesos</b>
								</li>
								<li>
									<b>Nro cuenta:</b> 40543804-8 089-0
								</li>
								<li>
									<b>CBU:</b> 00700894434004052804802
								</li>
								<li>
									<b>Alias:</b> powergym.galicia
								</li>
							</ul>
						</Form.Group>
						<Form.Group className='mb-3 text-white' controlId=''>
							<Form.Label>Cuenta Banco Macro : </Form.Label>
							<ul>
								<li>
									<b>Caja de Ahorro en Pesos</b>
								</li>
								<li>
									<b>Nro cuenta:</b> 463339528678896
								</li>
								<li>
									<b>CBU:</b> 2850628533335286788968
								</li>
								<li>
									<b>Alias:</b> powergym.macro
								</li>
							</ul>
						</Form.Group>
						<Form.Group
							className='mb-3 text-white d-flex flex-column'
							controlId=''>
							<Form.Label>Mercado Pago :</Form.Label>
							<button className='botonmp'>
								<a
									className='text-white text-decoration-none'
									href='https://link.mercadopago.com.ar/estudioposse'
									target='_blank'>
									<i className='pe-2 fa-solid fa-handshake-simple'></i>
									Boton de Pago
								</a>
							</button>{' '}
							<img
								className='mt-3 align-self-center'
								src='/qr-mp.png'
								alt='QR Mercado Pago'
								width={300}
							/>
						</Form.Group>
						<Form.Group
							className='mb-3 text-white d-flex flex-column'
							controlId=''>
							<Form.Label>Criptomonedas :</Form.Label>
							<img
								className='mt-3 align-self-center'
								src='/qr-binancec.png'
								alt='QR Mercado Pago'
								width={200}
							/>{' '}
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<button
						className='btneditgestion px-2'
						onClick={() => {
							handleCloseModal();
						}}>
						Volver
					</button>
				</Modal.Footer>
			</Modal>
			;
		</>
	);
};
