import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { getUser } from '../utils/UsersUtils.js';
import { useNavigate, useParams } from 'react-router-dom';

export const DatosUsuario = () => {
	const [user, setUser] = useState([]);
	const id = '65e249fae8b1f6e5b59c4461';
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	const handleCancel = () => {
		setShowModal(false);
		navigate('/panelusuarios');
	};

	useEffect(() => {
		async function loadUsuario() {
			try {
				const usuario = await getUser(id);
				setUser(usuario);
				setShowModal(true);
			} catch (error) {
				console.error('Error al cargar el usuario', error);
			}
		}
		loadUsuario();
	}, []);

	return (
		<div>
			<Modal show={showModal} onHide={handleCancel}>
				<Modal.Header closeButton className='modalbg'>
					<Modal.Title className='titlemodal'>Ver Mis Datos</Modal.Title>
				</Modal.Header>
				<Modal.Body className='modalbg'>
					<Form>
						<Form.Group className='mb-3' id='nombre'>
							<Form.Label className='labelmodal'>
								<b>Nombre:</b> {user.nombre}
							</Form.Label>
						</Form.Group>
						<Form.Group className='mb-3' id='apellido'>
							<Form.Label className='labelmodal'>
								<b>Apellido:</b> {user.apellido}
							</Form.Label>
						</Form.Group>
						<Form.Group className='mb-3' id='dni'>
							<Form.Label className='labelmodal'>
								<b>DNI: </b> {user.dni}
							</Form.Label>
						</Form.Group>
						<Form.Group className='mb-3' id='celular'>
							<Form.Label className='labelmodal'>
								<b>Celular:</b> {user.celular}
							</Form.Label>
						</Form.Group>
						<Form.Group className='mb-3' id='email'>
							<Form.Label className='labelmodal'>
								<b>Email:</b> {user.email}
							</Form.Label>
						</Form.Group>
						<Form.Group className='mb-3' id='domicilio'>
							<Form.Label className='labelmodal'>
								<b>Domicilio:</b> {user.domicilio}
							</Form.Label>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer className='modalbg'>
					<button
						className='btneditgestion px-2'
						onClick={() => {
							handleCancel();
						}}>
						Volver
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
