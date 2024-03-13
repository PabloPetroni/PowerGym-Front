import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import '../css/Clima.css';

export const Clima = () => {
	const [datosSMT, setDatosSMT] = useState({
		temperature: '',
		description: '',
		humidity: '',
		wind_speed: 0,
		image: '',
	});
	const [datosYB, setDatosYB] = useState({
		temperature: '',
		description: '',
		humidity: '',
		wind_speed: 0,
		image: '',
	});
	const [isOpen, setIsOpen] = useState(false);
	const baseImageUrl = 'https://openweathermap.org/img/wn/';
	const APIkey = '098c4eeddc341912ca217ceaf4df9e28';
	const urlSMT = `https://api.openweathermap.org/data/2.5/weather?q=Tucuman&appid=${APIkey}&units=metric&lang=es`;
	const urlYB = `https://api.openweathermap.org/data/2.5/weather?q=yerbabuena&appid=${APIkey}&units=metric&lang=es`;

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const resSMT = await axios.get(urlSMT);
				if (resSMT.status === 200) {
					const capitalizedDescription =
						resSMT.data.weather[0].description.charAt(0).toUpperCase() +
						resSMT.data.weather[0].description.slice(1);
					setDatosSMT({
						temperature: resSMT.data.main.temp,
						description: capitalizedDescription,
						humidity: resSMT.data.main.humidity,
						wind_speed: resSMT.data.wind.speed,
						image: resSMT.data.weather[0].icon,
					});
				}

				const resYB = await axios.get(urlYB);
				if (resYB.status === 200) {
					const capitalizedDescription =
						resYB.data.weather[0].description.charAt(0).toUpperCase() +
						resYB.data.weather[0].description.slice(1);
					setDatosYB({
						temperature: resYB.data.main.temp,
						description: capitalizedDescription,
						humidity: resYB.data.main.humidity,
						wind_speed: resYB.data.wind.speed,
						image: resYB.data.weather[0].icon,
					});
				}
			} catch (error) {
				console.error('Error al conectar con los datos del clima:', error);
			}
		};

		fetchWeatherData();
	}, []);

	return (
		<div className='container-fluid'>
		<Dropdown show={isOpen} onToggle={toggleMenu}>
			<Dropdown.Toggle
				variant='light'
				id='dropdown-basic'
				className='btnclima'>
				Estado del Tiempo
			</Dropdown.Toggle>

			<Dropdown.Menu className='contclima'>
				<div className='container-fluid contclima'>
					<div className='contSMT d-flex flex-column align-items-center'>
						<h4 className='titleclima'>San Miguel de Tucuman</h4>
						<div className='icoclima'>
							<img
								src={`${baseImageUrl}${datosSMT.image}.png`}
								alt='icono clima'
								width={50}
								className='image-clima'
							/>
						</div>
						<p className='subtitleclima'>{datosSMT.description}</p>
						<p className='subtitleclima'>Temp:{datosSMT.temperature}º</p>
						<p className='subtitleclima'>Humedad:{datosSMT.humidity}%</p>
					</div>

					<div className='contSMT d-flex flex-column align-items-center'>
						<h4 className='titleclima'>Yerba Buena</h4>
						<div className='icoclima'>
							<img
								src={`${baseImageUrl}${datosYB.image}.png`}
								alt='icono clima'
								className='image-clima'
								width={50}
							/>
						</div>
						<p className='subtitleclima'>{datosYB.description}</p>
						<p className='subtitleclima'>Temp:{datosYB.temperature}º</p>
						<p className='subtitleclima'>Humedad:{datosYB.humidity}%</p>
					</div>
					<div className='contSMT d-flex flex-column align-items-center'>
						<h4 className='titleclima'>Tafi Viejo</h4>
						<div className='icoclima'>
							<img
								src={`${baseImageUrl}${datosYB.image}.png`}
								alt='icono clima'
								className='image-clima'
								width={50}
							/>
						</div>
						<p className='subtitleclima'>{datosYB.description}</p>
						<p className='subtitleclima'>Temp:{datosYB.temperature}º</p>
						<p className='subtitleclima'>Humedad:{datosYB.humidity}%</p>
					</div>
				</div>
			</Dropdown.Menu>
		</Dropdown>
		</div>
	);
};
