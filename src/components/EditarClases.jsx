import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { getClase, updateClase } from '../utils/ClasesUtils';
import '../css/CrudClase.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
dayjs().format();

export const EditarClases = ({}) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { register, handleSubmit, setValue, watch } = useForm();
	const [showModal, setShowModal] = useState(false);

	// Función para abrir el modal
	const handleOpenModal = () => setShowModal(true);

	// Función para cerrar el modal
	const handleCloseModal = () => {
		setShowModal(false);
		navigate('/PanelClases');
	};

	useEffect(() => {
		async function loadClase() {
			try {
				const claseData = await getClase(id);
				setValue('fecha', claseData.fecha);
				setValue('hora', claseData.hora);
				setValue('actividad', claseData.actividad);
				setValue('disponibilidad', claseData.disponibilidad);
				handleOpenModal();
			} catch (error) {
				console.error('Error al cargar la Clase', error);
			}
		}
		loadClase();
	}, []);

	const onSubmit = handleSubmit(async (values) => {
		try {
			let fechaFormateada = values.fecha;
			// Verificar si values.fecha es un objeto Day.js
			if (dayjs.isDayjs(values.fecha)) {
				// Si es un objeto Day.js, formatear la fecha
				fechaFormateada = values.fecha.format('DD/MM/YYYY');
			}

			const claseData = {
				fecha: fechaFormateada,
				hora: values.hora,
				actividad: values.actividad,
				disponibilidad: values.disponibilidad,
			};

			await updateClase(id, claseData);

			Swal.fire({
				icon: 'success',
				title: 'Clase editada correctamente',
				showConfirmButton: false,
				timer: 1500,
			});
			handleCloseModal();
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: 'error',
				title: 'Error al editar la clase. Intente nuevamente!',
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
						<Modal.Title className='titlemodal'>Editar Clase</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form className='formedit' onSubmit={onSubmit}>
							<Form.Group className='mb-3' id='fecha'>
								<Form.Label className='labeledit'>Fecha</Form.Label>

								<LocalizationProvider
									dateAdapter={AdapterDayjs}
									adapterLocale='es-mx'>
									<DemoContainer components={['DatePicker']}>
										<DatePicker
											className='compdatepicker'
											defaultValue={dayjs()}
											//label='Selecciona la fecha...'
											inputFormat='DD/MM/YYYY'
											formatDensity='spacious'
											disablePast={true}
											{...register('fecha')}
											onChange={(fecha) => setValue('fecha', fecha)}
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

							<Form.Group className='mb-3' id='inputconcepto'>
								<Form.Label className='labeledit'>Actividad</Form.Label>
								<select
									className='inputcarga'
									aria-label='Default select'
									{...register('actividad')}>
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
								<Form.Label className='labeledit'>Cupos</Form.Label>
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
