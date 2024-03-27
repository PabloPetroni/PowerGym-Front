import React from 'react';

export const Profesores = () => {
	return (
		<div>
			<hr
				className='mx-5 bg-warning'
				style={{ border: '2px solid #ffcc00' }}
			/>
			<h1 className='title-act'>NUESTRO STAFF</h1>

			<div className='team container-fluid'>
				<div className=' cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/teachercrossfit.jpeg' />
						</div>
						<div className='team-info'>
							<h3 className='titlenosotros'>Melisa Sanchez</h3>
							<span className='post'>Crossfit - Funcional</span>
							<div className='d-flex flex-row justify-content-around pt-2'>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-facebook'></i>
								</a>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-square-instagram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className='cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/teacherbox.jpeg' />
						</div>
						<div className='team-info'>
							<h3 className='titlenosotros'>Axel Gines</h3>
							<span className='post'>Boxeo</span>
							<div className='d-flex flex-row justify-content-around pt-2'>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-facebook'></i>
								</a>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-square-instagram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className='cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/teacheryoga.jpeg' />
						</div>

						<div className='team-info'>
							<h3 className='titlenosotros'>Alejandra Morel</h3>
							<span className='post'>Yoga - Pilates</span>
							<div className='d-flex flex-row justify-content-around pt-2'>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-facebook'></i>
								</a>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-square-instagram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className=' cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/teacherzumba.jpeg' />
						</div>

						<div className='team-info'>
							<h3 className='titlenosotros'>Karina Navarro</h3>
							<span className='post'>Zumba</span>
							<div className='d-flex flex-row justify-content-around pt-2'>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-facebook'></i>
								</a>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-square-instagram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className='cardnosotros'>
					<div className='our-team'>
						<div className='team-image'>
							<img className='imgteam' src='/teacherspinning.jpeg' />
						</div>
						<div className='team-info'>
							<h3 className='titlenosotros'>Julieta Roldan</h3>
							<span className='post'>Spinning</span>
							<div className='d-flex flex-row justify-content-around pt-2'>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-facebook'></i>
								</a>
								<a href='/error404' target='_blank'>
									<i className='iconavbarteam fa-brands fa-square-instagram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
