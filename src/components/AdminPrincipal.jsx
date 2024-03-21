import React from 'react'
import BarraNav from './BarraNav'
import { ListadoTurnos } from './ListadoTurnos'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import "../css/ListadoTurnos.css"


export const AdminPrincipal = () => {
  return (
    <div>
        <h2 className="m-4 mb-5 titleagusu">Bienvenido, administrador</h2>
        
        <div className="d-flex justify-content-around m-4 mb-5">
            <Button variant="warning" className="m-2">
                <Link className="texto-boton-back" to="/admin-usuarios">Administrar usuarios</Link>
            </Button>
            <Button variant="warning"className="m-2">
                <Link className="texto-boton-back">Administrar clases</Link>
            </Button>
        </div>

        <ListadoTurnos/>
    </div>
  )
}
