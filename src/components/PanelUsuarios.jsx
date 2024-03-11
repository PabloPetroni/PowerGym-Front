import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
// import { useAuth } from '../context/AuthContext.jsx';
import '../css/PanelUsuario.css';
import { ListadoTurnos } from './ListadoTurnos';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { getClases } from '../utils/ClasesUtils';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
dayjs().format();

export const PanelUsuarios = () => {
	// const { currentUser, logout } = useAuth({});
	const navigate = useNavigate();
	const params = useParams();
	const user = '65e215ee04166531ce18a8e3';
	const displayName = 'Oscar Frias Viñals';
	const { register, handleSubmit } = useForm();
	const [turnoData, setTurnoData] = useState(new Date());
	const [fecha, setFecha] = useState(new Date());
	const [turnosFiltrados, setTurnosFiltrados] = useState();

	const onSubmit = handleSubmit(async (values) => {
		try {
			const fechaSeleccionada = new Date(fecha);
			const dia = fechaSeleccionada.getDate();
			const mes = fechaSeleccionada.getMonth() + 1;
			const anio = fechaSeleccionada.getFullYear();

			const fechaFormateada = `${dia < 10 ? '0' + dia : dia}/${
				mes < 10 ? '0' + mes : mes
			}/${anio}`;
			const turnoData = {
				fecha: fechaFormateada,
				actividad: values.actividad,
			};
			setTurnoData(turnoData);
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: 'error',
				title: 'Error al buscar turnos. Intente de nuevo',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	});

	return (
		<>
			<div className='container-lg '>
				<div className='main px-3 bodyadmin'>
					<h4 className='titlead'>Bienvenido, {displayName} </h4>
					<h3 className='subtitleadusu'>Panel de Usuarios</h3>
				</div>

				<hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>

				<div className='botonesadm'>
					<Link className='botonadm' to='/panelusuarios'>
						<i className='iconavbar bi bi-people-fill'></i>
						Reservar Turnos
					</Link>
					<Link className='botonadm' to='/reservasusuario'>
						<i className='iconavbar bi bi-people-fill'></i>
						Mis Reservas
					</Link>
					<Link className='botonadm' to='/pagosusuarios'>
						<i className='iconavbar bi bi-archive-fill'></i>
						Pagos
					</Link>
					<button
						className='botonadm'
						onClick={() => {
							navigate(`/datosusuario`);
						}}>
						<i className='iconavbar bi bi-calendar-check'></i>
						Actualizar Mis Datos
					</button>
				</div>

				<hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>

				<div className='busqueda'>
					<h2 className='titleagusu'>
						Busca tu clase por fecha y/o actividad
					</h2>
					<Form
						className='Formcarga'
						onSubmit={onSubmit}
						method='post'
						encType='multipart/form-data'>
						<Form.Group id='fecha'>
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

						<Form.Group id='actividad'>
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
								<option value=''>Todas</option>
							</select>
						</Form.Group>

						<Form.Group className='botonescarga' id='inputpassword'>
							<button className='botonbusqueda' type='submit'>
								<i className='iconavbar bi bi-check2-square'></i>
								Buscar
							</button>
						</Form.Group>
					</Form>
				</div>
				<hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>
				<div>
					<ListadoTurnos fechaSeleccionada={turnoData} />
				</div>
			</div>
		</>
	);
};
