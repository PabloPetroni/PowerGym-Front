import React, { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { apiURL } from '/api/apiURL.js';

// crea contexto
const AuthContext = createContext();

// funcion que retorna el contexto del objeto creado por useContext
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('Error, no se creo el contexto!');
	}
	return context;
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [errors, setErrors] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	// FUNCION REGISTRO DE USUARIOS
	const registro = async (values) => {
		try {
			const res = await apiURL.post('/api/register', values);
			console.log(res)
			if (res.status === 200) {
				document.cookie = `token=${res.data.token}; Path=/; `;
				localStorage.setItem('token', res.data.token);
				setCurrentUser(res.data);
				setIsAuthenticated(true);
				return res.data;
			}
		} catch (error) {
			console.log(error.response.data);
			setErrors(error.response.data);
		}
	};

	// FUNCION LOGIN CON CORREO ELECTRONICO
	const login = async (values) => {
		try {
			const res = await apiURL.post('/api/login', values, {
				credentials: 'include',
			});
			if (res.status === 200) {
				console.log(res);
				document.cookie = `token=${res.data.token}; Path=/; `;
				localStorage.setItem('token', res.data.token);
				setIsAuthenticated(true);
				setCurrentUser(res.data);
				return res.data;
			}
		} catch (error) {
			console.log(error.response.data);
			setErrors(error.response.data);
			throw error; // Re-lanzar el error para manejarlo en onSubmit
		}
	};
	console.log(currentUser);
	// FUNCION LOGOUT
	const logout = async () => {
		Cookies.remove('token');
		localStorage.removeItem('token');
		setCurrentUser(null);
		setIsAuthenticated(false);
	};

	// Función de autenticacion de usuario logueado
	useEffect(() => {
		async function checkLogin() {
			const cookies = Cookies.get();
			console.log(cookies);
			if (!cookies.token) {
				setIsAuthenticated(false);
				setIsLoading(false);
				return setCurrentUser(null);
			}
			try {
				const res = await apiURL.get('/api/verify', {
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${cookies.token}`, // Agrega el token como encabezado de autorización
					},
				});
				console.log(res);
				if (!res.data) {
					setIsAuthenticated(false);
					setIsLoading(false);
					return;
				}
				setIsAuthenticated(true);
				setCurrentUser(res.data);
				setIsLoading(false);
			} catch (error) {
				setIsAuthenticated(false);
				setIsLoading(false);
				setCurrentUser(null);
			}
		}
		checkLogin();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				isAuthenticated,
				registro,
				login,
				logout,
				isLoading,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
