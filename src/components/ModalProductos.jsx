import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Productos.css';

export const ModalProductos = () => {
	const [showModal, setShowModal] = useState(true);
	const navigate = useNavigate();
	const handleCloseModal = () => {
		setShowModal(false);
		navigate('/productos');
	};

	return (
		<>
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header className='modalbg' closeButton>
					<Modal.Title className='titlemodal'>Pasta de Mani</Modal.Title>
				</Modal.Header>
				<Modal.Body className='modalbg'>
					<Form>
						<Form.Group className='mb-3 text-dark' controlId=''>
							<Form.Label>
								100% cacahuete tostado y triturado, sin azúcares, grasas
								ni sal añadidos. La Crema de Cacahuete aporta una gran
								cantidad de energía debido a su contenido en grasas
								vegetales, las cuales en su mayoría son poliinsaturadas
								y monoinsaturadas, siendo también una fuente natural de
								proteínas y minerales.
							</Form.Label>
							<Form.Label className='subtitlemodal'>
								Descripcion
							</Form.Label>
							<Form.Label className='text-dark'>
								La grasa monoinsaturada de la crema de cacahuete ayuda a
								la disminución del riesgo de desarrollar enfermedades
								cardiacas. Además, los cacahuetes contienen fibra y una
								dieta alta en fibra reduce el colesterol malo (LDL). La
								crema de cacahuete, también contiene vitamina E, que es
								un poderoso antioxidante asociado con los niveles más
								bajos de las enfermedades cardíacas. Desde un punto de
								vista nutricional, la crema de cacahuete es
								tremendamente rica en proteínas de buena calidad, además
								de grasas saludables. También aporta una cantidad
								interesante de hidratos de carbono, aunque en verdad su
								aporte proteico es muchísimo mayor.
							</Form.Label>
						</Form.Group>
						<Form.Group className='mb-3 text-dark' controlId=''>
							<Form.Label className='subtitlemodal'>
								Informacion Nutricional
							</Form.Label>
							<ul>
								<li>
									<b>ValorEnergetico:</b> 532kcal
								</li>
								<li>
									<b>Proteinas:</b> 24.20gr
								</li>
								<li>
									<b>Hidratos de Carbono:</b> 11gr
								</li>
								<li>
									<b>Azucares:</b> 0gr
								</li>
								<li>
									<b>Grasas:</b> 44.2gr
								</li>
								<li>
									<b>Fibras:</b> 8.6gr
								</li>
							</ul>
						</Form.Group>
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
