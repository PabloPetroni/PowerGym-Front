import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PanelUsuarios } from '../src/components/PanelUsuarios.jsx';
import { ListadoTurnos } from '../src/components/ListadoTurnos.jsx';
import { PagosUsuarios } from '../src/components/PagosUsuarios.jsx';
import { ReservasUsuario } from '../src/components/ReservasUsuario.jsx';
import { DatosUsuario } from '../src/components/DatosUsuario.jsx';
import { GenerarPago } from '../src/components/GenerarPago.jsx';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PanelUsuarios />}></Route>
				<Route path='/generarpago' element={<GenerarPago />}></Route>
				<Route path='/panelusuarios' element={<PanelUsuarios />}></Route>
				<Route path='/listadoturnos' element={<ListadoTurnos />}></Route>
				<Route path='/pagosusuarios' element={<PagosUsuarios />}></Route>
				<Route path='/reservasusuario' element={<ReservasUsuario />}></Route>
				<Route path='/datosusuario' element={<DatosUsuario />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
