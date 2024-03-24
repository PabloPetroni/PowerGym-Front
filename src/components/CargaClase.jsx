import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { createClase } from '../utils/ClasesUtils';

import '../css/CrudClase.css';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export const CargaClase = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const [showModal, setShowModal] = useState(true);
	
	const [fecha, setFecha] = useState(new Date());

	//const [valorSeleccionado, setValorSeleccionado] = useState('');

	// const handleSelectChange = (event) => {
	// 	setValorSeleccionado(event.target.value);
	// };


	// Función para cerrar el modal
	const handleCloseModal = () => {
		setShowModal(false);
		navigate('/PanelClases');
	};

//si no funciona ek ckasedata.actividad, va el useState...
	const onSubmit = handleSubmit(async (values) => {
		
		
		console.log(values);
		console.log(fecha)
		try {

			console.log(values.fecha);

			const fechaSeleccionada = new Date(fecha);
			const dia = fechaSeleccionada.getDate();
			const mes = fechaSeleccionada.getMonth() + 1;
			const anio = fechaSeleccionada.getFullYear();
			const fechaFormateada = `${dia < 10 ? '0' + dia : dia}/${
				mes < 10 ? '0' + mes : mes
			}/${anio}`;

			const claseData = {
				fecha: fechaFormateada,
				hora: values.hora,
				actividad: values.actividad,
				disponibilidad: values.disponibilidad,
			};
			

			console.log(fechaFormateada);

			console.log(claseData);

			await createClase(claseData);

			Swal.fire({
				icon: 'success',
				title: 'Clase registrada correctamente',
				showConfirmButton: false,
				timer: 1500,
			});
			handleCloseModal();
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: 'error',
				title: 'Error al registrar la clase. Intente nuevamente!',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	});

	return (
		<>
			<div className='bodyedit'>
				<Modal show={showModal} onHide={handleCloseModal}>
					<Modal.Header closeButton>
						<Modal.Title className='titlemodal'>
							Crear Clase
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form className='formedit' onSubmit={onSubmit}>
							<Form.Group className='mb-3' id='inputname'>
								<Form.Label className='labeledit'>
									Fecha
								</Form.Label>

								<LocalizationProvider
									dateAdapter={AdapterDayjs}
									adapterLocale='es-mx'>
									<DemoContainer components={['DatePicker']}>
										<DatePicker
											className='compdatepicker'
											defaultValue={dayjs()}
											label='Selecciona la fecha...'
											inputFormat='DD/MM/YYYY'
											formatDensity='spacious'
											disablePast={true}
											selected={fecha}
											onChange={(fecha) => setFecha(fecha)}
										/>
									</DemoContainer>
								</LocalizationProvider>
							</Form.Group>



							<Form.Group className='' id='inputhora'>
								<Form.Label className='labeledit'>
									Horario
								</Form.Label>
								<Form.Control
									className='inputedit'
									type='string'
									
									{...register('hora')}
								/>
							</Form.Group>



							<Form.Group className='mb-3' id='inputconcepto'>
								<Form.Label className='labeledit'>
									Actividad
								</Form.Label>
								<select
									className='inputcarga'
									aria-label='Default select'
									{...register('actividad')}
									//onChange={handleSelectChange}
									>
									<option value=''>Selecciona una actividad...</option>
									<option value='crossfit'>Crossfit</option>
									<option value='funcional'>Funcional</option>
									<option value='boxeo'>Boxeo</option>
									<option value='yoga'>Yoga</option>
									<option value='spinning'>Spinning</option>
									<option value='zumba'>Zumba</option>
									<option value='musculacion'>Musculacion</option>
						
								</select>
							</Form.Group>

	
							<Form.Group className='' id='inputhora'>
								<Form.Label className='labeledit'>
									Cupos
								</Form.Label>
								<Form.Control
									className='inputedit'
									type='number'
									{...register('disponibilidad')}
								/>
							</Form.Group>

							<Form.Group className='botonesedit'>
								<button className='btncancmodal' type='submit'>
									<i className='iconavbar bi bi-check2-square'></i>
									Guardar
								</button>

								<button
									type='button'
									className='btncancmodal'
									onClick={handleCloseModal}>
									<i className='iconavbar bi bi-x-circle-fill'></i>
									Cancelar
								</button>
							</Form.Group>
						</Form>
					</Modal.Body>
				</Modal>
			</div>
		</>
	);
};