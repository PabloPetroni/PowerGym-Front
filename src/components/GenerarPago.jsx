import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Pagos.css';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { createPago } from '../utils/UsersUtils.js';
import { useAuth } from '../context/AuthContext';

export const GenerarPago = () => {
	const [showModal, setShowModal] = useState(true);
	const navigate = useNavigate();
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Función para cerrar el modal
	const handleCloseModal = () => {
		setShowModal(false);
		navigate('/panelusuarios');
	};

	const onSubmit = handleSubmit(async (values) => {
		try {
			await createPago({ ...movPago }, id);
			Swal.fire({
				icon: 'success',
				title: 'Pago realizado correctamente',
				showConfirmButton: false,
				timer: 1500,
			});
			handleCloseModal();
		} catch (error) {
			console.error(error);
		}
	});

	const generarPago = () => {};

	return (
		<>
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header className='modalbg' closeButton>
					<Modal.Title className='titlemodal'>
						Abonar Cuota Mensual
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='modalbg'>
					<Form onSubmit={onSubmit}>
						<Form.Group className='mb-3 text-dark' controlId=''>
							<Form.Label className='labelreg'>Usuario:</Form.Label>
						</Form.Group>
						<Form.Group
							className='mb-3 d-flex flex-column text-center align-items-center'
							id='inputplan'>
							<Form.Label className='w-50 labelreg'>
								Elegi tu Plan
							</Form.Label>
							<select
								className='w-50 inputreg'
								aria-label='Default select'
								{...register('plan', {
									required: {
										value: true,
										message: 'Debes seleccionar un plan',
									},
								})}>
								<option value=''>Selecciona tu plan..</option>
								<option value='Power'>Power</option>
								<option value='Muscle'>Muscle</option>
								<option value='Classic'>Classic</option>
							</select>
							{errors.plan && (
								<Form.Text className='messerror'>
									{errors.plan.message}
								</Form.Text>
							)}
						</Form.Group>
						<Form.Label className='labelreg'>Monto a pagar: $</Form.Label>
						<Form.Label className='labelreg'>
							Selecciona tu forma de pago
						</Form.Label>
						<div className='d-flex flex-row justify-content-around'>
							<button className='botonmp'>
								<a
									className='text-white text-decoration-none'
									href='https://link.mercadopago.com.ar/estudioposse'
									target='_blank'>
									<i className='pe-2 fa-solid fa-handshake-simple'></i>
									Boton de Pago
								</a>
							</button>
							<button
								className='btneditgestion bg-success'
								type='submit'
								onClick={generarPago()}>
								PAGAR
							</button>
						</div>
					</Form>
				</Modal.Body>
				<Modal.Footer className='modalbg'>
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
