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

	// Función para cerrar el modal
	const handleCloseModal = () => {
		setShowModal(false);
		navigate('/PanelClases');
	};

	const onSubmit = handleSubmit(async (values) => {
		try {
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
				sede: values.sede
			};

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
						<Modal.Title className='titlemodal'>Crear Clase</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form className='formedit' onSubmit={onSubmit}>
							<Form.Group className='mb-3' id='inputfecha'>
								<Form.Label className='labeledit'>Fecha</Form.Label>

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
								<Form.Label className='labeledit'>Horario</Form.Label>
								<Form.Control
									className='inputedit'
									type='string'
									{...register('hora')}
								/>
							</Form.Group>

							<Form.Group className='mb-3' id='inputactividad'>
								<Form.Label className='labeledit'>Actividad</Form.Label>
								<select
									className='inputcarga'
									aria-label='Default select'
									{...register('actividad')}
								>
									<option value=''>Selecciona una actividad...</option>
									<option value='Crossfit'>Crossfit</option>
									<option value='Funcional'>Funcional</option>
									<option value='Boxeo'>Boxeo</option>
									<option value='Yoga'>Yoga</option>
									<option value='Spinning'>Spinning</option>
									<option value='Zumba'>Zumba</option>
									<option value='Musculacion'>Musculacion</option>
								</select>
							</Form.Group>

							<Form.Group className='' id='cupo'>
								<Form.Label className='labeledit'>Cupos</Form.Label>
								<Form.Control
									className='inputedit'
									type='number'
									{...register('disponibilidad')}
								/>
							</Form.Group>
							<Form.Group className='mb-3' id='sede'>
								<Form.Label className='labeledit'>Sede</Form.Label>
								<select
									className='inputcarga'
									aria-label='Default select'
									{...register('sede')}
								>
									<option value=''>Selecciona una sede...</option>
									<option value='Centro'>Centro</option>
									<option value='Yerba Buena'>Yerba Buena</option>
									<option value='Tafi Viejo'>Tafi Viejo</option>
								</select>
							</Form.Group>

							<Form.Group className='botonesedit mt-3'>
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
