import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "../css/BarraNav.css"

function BarraNav() {

    
    
    return (
      <>
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src='https://i.postimg.cc/XY51w3dy/Logo-fondo-transparente-Photoroom-png-Photoroom.png' alt='Logo2' className="rounded-4 logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: "#bac7d6ff", border: "white"}} />
        <Navbar.Collapse id="responsive-navbar-nav" className="menu">
          <Nav className="ms-auto d-flex align-items-center">            
            <NavLink className="nav-link link m-3" to="/servicios">Servicios</NavLink>
            <NavLink className="nav-link link m-3" to="/actividades">Actividades</NavLink>
            <NavLink className="nav-link link m-3" to="/about">Nosotros</NavLink>
            <NavLink className="nav-link link m-3" to="/contacto">Contacto</NavLink>
            <NavLink className="nav-link link m-3" to="/administrador">Administrador</NavLink>
            
            <button className="btn logout m-3">
                <NavLink to="/login" className="linkIngresar">
                  Cerrar sesión
                </NavLink>
            </button>
            
            <button className="btn ingresar m-3">
                <NavLink to="/login" className="linkIngresar">
                  Ingresar
                </NavLink>
            </button>
            
            <button className="btn registro m-3">
                <NavLink to="/register" className="linkRegistro">
                  Registrarse
                </NavLink>
            </button>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
  }
  
  export default BarraNav;