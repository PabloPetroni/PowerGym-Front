import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/Pagos.css';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { getUser } from '../utils/UsersUtils.js';
import { createPago } from '../utils/UsersUtils.js';
import { useAuth } from '../context/AuthContext';

export const GenerarPago = () => {
	const [showModal, setShowModal] = useState(true);
	const [userp, setUserp] = useState();
	const [precioPlan, setPrecioPlan] = useState(0);
	const navigate = useNavigate();
	const { currentUser } = useAuth({});
	const userlogin = currentUser.displayname;
	const user = currentUser._id;
	console.log(userlogin);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userPago = await getUser(user);
				setUserp(userPago);
			} catch (error) {
				console.error('Error al obtener pagos', error);
			}
		};
		fetchData();
	}, []);

	const handlePlanChange = (event) => {
		const selectedPlan = event.target.value;
		if (selectedPlan === 'Power') {
			setPrecioPlan(17000);
		} else if (selectedPlan === 'Muscle') {
			setPrecioPlan(15000);
		} else if (selectedPlan === 'Classic') {
			setPrecioPlan(12000);
		}
	};

	// Función para cerrar el modal
	const handleCloseModal = () => {
		setShowModal(false);
		navigate('/panelusuarios');
	};

	const onSubmit = handleSubmit(async (values, id) => {
		try {
			const fechaActual = new Date();
			// Calcular la fecha de vencimiento sumando 30 días a la fecha actual
			const fechaVencimiento = new Date(fechaActual);
			fechaVencimiento.setDate(fechaVencimiento.getDate() + 30);
			const dia = String(fechaVencimiento.getDate()).padStart(2, '0');
			const mes = String(fechaVencimiento.getMonth() + 1).padStart(2, '0');
			const anio = fechaVencimiento.getFullYear();
			const fechaVencimientoFormateada = `${dia}/${mes}/${anio}`;

			const diaact = String(fechaActual.getDate()).padStart(2, '0');
			const mesact = String(fechaActual.getMonth() + 1).padStart(2, '0');
			const anioact = fechaActual.getFullYear();
			const fechaActualFormateada = `${diaact}/${mesact}/${anioact}`;

			console.log(fechaVencimientoFormateada);
			const id = userp._id;
			const plan = values.plan;
			const pago = {
				plan: plan,
				estado: 'Abonado',
				fechapago: fechaActualFormateada,
				fechavenc: fechaVencimientoFormateada,
			};
			await createPago(pago, id);
			handleCloseModal();
		} catch (error) {
			console.error(error);
		}
	});

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
							<Form.Label className='labelreg'>
								Usuario:{' '}
								<span className=''>
									{' '}
									{/* {userp.nombre} {userp.apellido} */}
								</span>
							</Form.Label>
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
								})}
								onChange={handlePlanChange}>
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
						<Form.Label className='labelreg'>
							Monto a pagar: ${precioPlan}
						</Form.Label>
						<Form.Label className=' text-center labelreg'>
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
								onClick={onSubmit}>
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
