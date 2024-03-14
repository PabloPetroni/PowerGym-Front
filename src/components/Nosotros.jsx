import React from 'react';
import Card from 'react-bootstrap/Card';

import '../css/Nosotros.css';

export const Nosotros = () => {
	return (
		<>
			<div className='container-lg about'>
				<h1 className='tituloabout'>SOBRE NOSOTROS</h1>

				<hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>

				<h2 className='subtituloabout'>HISTORIA</h2>

				<p className='parrafoabout lh-lg'>
					Inaugurada en 2009, POWER GYM fue creado con el propósito de
					facilitar el acceso a la práctica de actividad física de alta
					calidad, con planes accesibles y una fácil inscripción y reserva
					de turnos.-
				</p>

				<div className='d-flex row row-cols-12 justify-content-center p-3'>
					<Card.Body className='cardabout'>
						<Card.Title className='cardtitleabout'>Mision</Card.Title>
						<Card.Text className='contcard '>
							Nuestra misión es transformar lo complicado en simple, es
							decir, aquí tendrás comodidad y menos burocracia desde los
							servicios en línea hasta el autoservicio en las sedes.
						</Card.Text>
					</Card.Body>

					<Card.Body className='cardabout'>
						<Card.Title className='cardtitleabout'>Vision</Card.Title>
						<Card.Text className='contcard'>
							Para que puedas entrenar cuando y donde quieras, tenemos 3
							sedes! En la actualidad, la red cuenta con más de 600 sedes
							distribuidas en Brasil, Chile, México, Ecuador, Perú,
							Colombia y República Dominicana, sumando más de 2 millones
							de clientes.
						</Card.Text>
					</Card.Body>

					<Card.Body className='cardabout'>
						<Card.Title className='cardtitleabout'>Valores</Card.Title>
						<Card.Text className='contcard'>
							Los valores son esenciales en cualquier organización. Es
							por ello que ratificamos nuestro compromiso con el
							cumplimiento de la legislación vigente.- Nuestra misión es
							facilitar el acceso a la práctica de actividad física de
							alta calidad. Por eso, todas nuestras sedes están diseñadas
							para satisfacer tus necesidades.
						</Card.Text>
					</Card.Body>
				</div>
			</div>

			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>

			<div className='team container-fluid'>
				<h1 className='tituloaboutteam'>NUESTRO EQUIPO</h1>

				<div className='row row-cols-md-2 row-cols-sm-8 cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/Oscar Frias.png' />
							{/* <p className='description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Praesent urna diam, maximus ut ullamcorper quis
							</p> */}
						</div>
						<div className='team-info'>
							<h3 className='titlenosotros'>Oscar Frias Viñals</h3>
							<span className='post'>Developer</span>
						</div>
					</div>
				</div>

				<div className='row row-cols-md-2 row-cols-sm-8 cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/Petroni.png' />
							{/* <p className='description'>
								Lorem ipsum dolor sit amet, 
							</p> */}
						</div>
						<div className='team-info'>
							<h3 className='titlenosotros'>Pablo Petroni</h3>
							<span className='post'>Developer</span>
						</div>
					</div>
				</div>

				<div className='row row-cols-md-2 row-cols-sm-8 cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/MICHEL KIKANO.jpg' />
						</div>

						<div className='team-info'>
							<h3 className='titlenosotros'>Michel Kikano</h3>
							<span className='post'>Developer</span>
						</div>
					</div>
				</div>

				<div className='row row-cols-md-4 row-cols-sm-8 cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/Orlando Navarro.png' />
							{/* <p className='description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Praesent urna diam, maximus ut ull
							</p> */}
						</div>

						<div className='team-info'>
							<h3 className='titlenosotros'>Orlando Navarro</h3>
							<span className='post'>Developer</span>
						</div>
					</div>
				</div>

				<div className='row row-cols-md-2 row-cols-sm-10 cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='' />
							{/* <p className='description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Praesent urna diam, maximus ut ullamcorper quis
							</p> */}
						</div>
						<div className='team-info'>
							<h3 className='titlenosotros'>Federico Roldan</h3>
							<span className='post'>Developer</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
