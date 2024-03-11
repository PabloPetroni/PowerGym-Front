import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../src/components/Home.jsx';
import { Clima } from '../src/components/Clima.jsx';
import { Footer } from '../src/components/Footer.jsx';

import { PanelUsuarios } from '../src/components/PanelUsuarios.jsx';
import { ListadoTurnos } from '../src/components/ListadoTurnos.jsx';
import { PagosUsuarios } from '../src/components/PagosUsuarios.jsx';
import { ReservasUsuario } from '../src/components/ReservasUsuario.jsx';
import { DatosUsuario } from '../src/components/DatosUsuario.jsx';
import { GenerarPago } from '../src/components/GenerarPago.jsx';
import { Contacto } from '../src/components/Contacto.jsx';
import { Error404 } from '../src/components/Error404.jsx'; // Importa tu componente de manejo de error 404

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/error404' element={<Error404 />}></Route>
				<Route path='/' element={<Home />}></Route>
				<Route path='/home' element={<Home />}></Route>
				<Route path='/contacto' element={<Contacto />}></Route>
				<Route path='/clima' element={<Clima />}></Route>
				<Route path='/generarpago' element={<GenerarPago />}></Route>
				<Route path='/panelusuarios' element={<PanelUsuarios />}></Route>
				<Route path='/listadoturnos' element={<ListadoTurnos />}></Route>
				<Route path='/pagosusuarios' element={<PagosUsuarios />}></Route>
				<Route
					path='/reservasusuario'
					element={<ReservasUsuario />}></Route>
				<Route path='/datosusuario' element={<DatosUsuario />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
