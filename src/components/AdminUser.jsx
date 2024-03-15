import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "../css/AdminUser.css"
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BarraNav from './BarraNav';
import { apiURL } from '/api/apiURL.js';



export const AdminUser = () => {

    const [cargarUsuarios, setCargarUsuarios] = useState([]);
    //barra de busqueda
    const [search, setSearch] = useState("");
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [usuarioIdToDelete, setUsuarioIdToDelete] = useState(null);


    const cargarUser = async () => {
		try {
			const res = await apiURL.get('/api/users');

			setCargarUsuarios(res.data);
		} catch (error) {
			console.log(error);
		}
	};

    const eliminarUsuarioClick = async (id) => {
		try {
			const resp = await apiURL.delete(`/api/users/${id}`);
			console.log(resp);
            // Actualizar lista de usuarios despues de eliminar
            cargarUser();
		} catch (error) {
			if (error.response.status === 401) {
				localStorage.removeItem('token');
				navigate('/login');
			}
		}
	};

    useEffect(() => {
		cargarUser();
	}, []);

    const handleDeleteConfirmation = (id) => {
        setUsuarioIdToDelete(id);
        setShowConfirmationModal(true);
    };

    const confirmDelete = () => {
        eliminarUsuarioClick(usuarioIdToDelete);
        setShowConfirmationModal(false);
    };

    const cancelDelete = () => {
        setShowConfirmationModal(false);
    };


  return (
    <div>
        <BarraNav/>
        <div className="d-flex justify-content-around m-5 p-2">
            <h3 className="titulo">Usuarios</h3>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Buscar usuario"
                        className="mr-sm-2 border border-dark"    
                        onChange={(e) => setSearch(e.target.value)}                    
                        />
                    </Col>
                </Row>
            </Form>
        </div>
        <div className="tabla-usuarios">
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Acciones</th>
                            
                        </tr>
                    </thead>

                    {cargarUsuarios.filter((usuario) => {
                        return search.toLowerCase() === "" ? usuario : usuario.apellido.toLowerCase().includes(search)
                    }).map((usuario) => {
                        return (
                            <tbody key={usuario._id}>
                                <tr>
                                    <td>{usuario._id}</td>
                                    <td>{usuario.apellido},{usuario.nombre}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.celular}</td>
                                    <td>
									<Button onClick={() => handleDeleteConfirmation(usuario._id)} variant="danger">
                                        <i class="fa-solid fa-user-xmark"></i>
									</Button>
								    </td>
                                    
                                </tr>
                            </tbody>
                        );
                    })}
                </Table>
        </div>
        <div className="d-flex justify-content-center">
            <Button variant="warning" className="m-2">
                <Link className="texto-boton-back">Volver a Admin</Link>
            </Button>
            <Button variant="warning"className="m-2">
                <Link className="texto-boton-back">Administrar clases</Link>
            </Button>
        </div>
        {/* Modal de confirmación */}
        <Modal show={showConfirmationModal} onHide={cancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que quieres eliminar este usuario?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelDelete}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
            
            
    </div>
  )
}

