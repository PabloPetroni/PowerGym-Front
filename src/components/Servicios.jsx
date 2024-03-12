import React from 'react';
import '../css/Servicios.css';
import Card from 'react-bootstrap/Card';
import { Whatsapp } from './Whatsapp';

export const Servicios = () => {
	return (
		<div>
			<Whatsapp />
			<h2 className='title-serv'>SERVICIOS FITNESS</h2>
			<div className='d-flex row row-cols-sm-3  row-cols-lg-4 justify-content-center p-3'>
				<Card.Body className='cardabout'>
					<Card.Img
						className='imgcard'
						variant='top'
						src='/FISIOTERAPIA.jpg'
					/>
					<Card.Title className='cardtitleabout'>FISIOTERAPIA</Card.Title>
					<Card.Text className='contcard '>
						Una fisioterapeuta es una profesional de la salud que ayuda a
						las personas a mantener, restaurar o mejorar el movimiento y
						las funciones corporales para prevenir o reducir el dolor y la
						discapacidad. Esta especialidad se basa en el uso del
						ejercicio terapéutico, el masaje, la manipulación física, el
						calor, la crioterapia, la estimulación eléctrica y otros
						métodos para tratar diversas afecciones, como las lesiones
						músculo-esqueléticas, las enfermedades neurológicas, las
						enfermedades cardiorrespiratorias, entre otros.
					</Card.Text>
				</Card.Body>

				<Card.Body className='cardabout'>
					<Card.Img className='imgcard' variant='top' src='/DIETA.jpg' />
					<Card.Title className='cardtitleabout'>
						DIETETICA Y NUTRICION
					</Card.Title>
					<Card.Text className='contcard'>
						Consulta nuestro servicio de dietética para que te asesore en
						alimentación y hábitos saludables. Déjate supervisar para
						ayudarnos a comprometerte con los objetivos marcados y
						realizar así los cambios oportunos cuando sean necesarios.
					</Card.Text>
				</Card.Body>

				<Card.Body className='cardabout'>
					<Card.Img
						className='imgcard'
						variant='top'
						src='/ESTUDIO-ANTROPOMETRICO.jpg'
					/>
					<Card.Title className='cardtitleabout'>
						ESTUDIO ANTROPOMÉTRICO
					</Card.Title>
					<Card.Text className='contcard'>
						Determina la composición de tu peso corporal fraccionándolo en
						masa muscular y grasosa. Su objetivo es conocer y valorar en
						profuncidad el estado nutricional.
					</Card.Text>
				</Card.Body>

				<Card.Body className='cardabout'>
					<Card.Img
						className='imgcard'
						variant='top'
						src='/ENTRENADOR-PERSONAL.jpg'
					/>
					<Card.Title className='cardtitleabout'>
						ENTRENAMIENTOS PERSONALES
					</Card.Title>
					<Card.Text className='contcard'>
						Los entrenamientos personales son sesiones de entrenamiento
						individualizadas, personalizadas y adaptadas a las
						necesidades, objetivos y limitaciones de cada persona. Estos
						entrenamientos son diseñados por un entrenador personal que
						trabaja con el cliente para ayudarle a alcanzar sus objetivos
						de fitness y salud, ya sea perder peso, ganar demasiado
						muscular, mejorar la resistencia cardiovascular, ganar
						flexibilidad, mejorar la postura o recuperarlo de una lesión.
					</Card.Text>
				</Card.Body>
			</div>
			<div className='divbtnserv'>
				<button className='btnturnoserv'>
					<i className='iconavbar fa-solid fa-id-card'></i>Reserva Turno
					Ahora!
				</button>
			</div>
		</div>
	);
};
