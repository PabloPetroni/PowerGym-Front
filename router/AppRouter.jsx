import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../src/context/AuthContext';

// Rutas Publicas
import { Home } from '../src/components/Home.jsx';
import { Clima } from '../src/components/Clima.jsx';
import { Footer } from '../src/components/Footer.jsx';
import { Login } from '../src/components/Login.jsx';
import { Registro } from '../src/components/Registro.jsx';
import { Contacto } from '../src/components/Contacto.jsx';
import { Error404 } from '../src/components/Error404.jsx';
import { Actividades } from '../src/components/Actividades.jsx';
import { Servicios } from '../src/components/Servicios.jsx';
import { Whatsapp } from '../src/components/Whatsapp.jsx';
import { Nosotros } from '../src/components/Nosotros.jsx';
import { Comentarios } from '../src/components/Comentarios.jsx';
import { Productos } from '../src/components/Productos.jsx';
import { ModalProductos } from '../src/components/ModalProductos.jsx';
import { Planes } from '../src/components/Planes.jsx';
import BarraNav from '../src/components/BarraNav.jsx';

// Rutas Privadas
import { PanelUsuarios } from '../src/components/PanelUsuarios.jsx';
import { ListadoTurnos } from '../src/components/ListadoTurnos.jsx';
import { PagosUsuarios } from '../src/components/PagosUsuarios.jsx';
import { ReservasUsuario } from '../src/components/ReservasUsuario.jsx';
import { DatosUsuario } from '../src/components/DatosUsuario.jsx';
import { GenerarPago } from '../src/components/GenerarPago.jsx';
import { AdminUser } from '../src/components/AdminUser.jsx';
import { PanelClases } from '../src/components/PanelClases.jsx';
import { EditarClases } from '../src/components/EditarClases.jsx';
import { CargaClase } from '../src/components/CargaClase.jsx';
import { Tabla } from '../src/components/Tabla.jsx';
import { AdminPrincipal } from '../src/components/AdminPrincipal.jsx';
import { ListadoClaseDia } from '../src/components/ListadoClaseDia.jsx';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<BarraNav />
				<Routes>
					<Route path='*' element={<Error404 />}></Route>
					<Route path='/' element={<Home />}></Route>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/whatsapp' element={<Whatsapp />}></Route>
					<Route path='/actividades' element={<Actividades />}></Route>
					<Route path='/servicios' element={<Servicios />}></Route>
					<Route path='/contacto' element={<Contacto />}></Route>
					<Route path='/clima' element={<Clima />}></Route>
					<Route path='/nosotros' element={<Nosotros />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/registro' element={<Registro />}></Route>
					<Route path='/comentarios' element={<Comentarios />}></Route>
					<Route path='/productos' element={<Productos />}></Route>
					<Route
						path='/modalproductos'
						element={<ModalProductos />}></Route>
					<Route path='/planes' element={<Planes />}></Route>

					<Route element={<PrivateRoute />}>
						
						<Route path='/tabla' element={<Tabla />}></Route>
						<Route
							path='/reservasusuario'
							element={<ReservasUsuario />}></Route>
						<Route
							path='/datosusuario'
							element={<DatosUsuario />}></Route>
						<Route path='/admin-usuarios' element={<AdminUser />}></Route>
						<Route path='/generarpago' element={<GenerarPago />}></Route>
						<Route
							path='/panelusuarios'
							element={<PanelUsuarios />}></Route>
						<Route
							path='/listadoturnos'
							element={<ListadoTurnos />}></Route>
						<Route
							path='/pagosusuarios'
							element={<PagosUsuarios />}></Route>
						<Route path='/panelclases' element={<PanelClases />}></Route>
						<Route
							path='/editarclases/:id'
							element={<EditarClases />}></Route>
						<Route path='/cargaclase' element={<CargaClase />}></Route>
					</Route>
					<Route
						path='/generarpago/:user'
						element={<GenerarPago />}></Route>
					<Route
						path='/administrador'
						element={<AdminPrincipal />}></Route>
											<Route
						path='/listadoclasesdia'
						element={<ListadoClaseDia />}></Route>
				</Routes>
				<Footer />
			</AuthProvider>
		</BrowserRouter>
	);
};
