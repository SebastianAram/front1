
import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary mb-3 navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav nav-pills">
        <NavLink 
            tabIndex={1}
            className='nav-item nav-link'
            to='/'
        >
            TIPO DE EQUIPOS
        </NavLink>
        <NavLink 
            tabIndex={2}
            className='nav-item nav-link'
            to='/estados'
        >
            ESTADOS
        </NavLink>
        <NavLink 
            tabIndex={3}
            className='nav-item nav-link'
            to='/usuarios'
        >
            USUARIOS
        </NavLink>
        <NavLink 
            tabIndex={4}
            className='nav-item nav-link'
            to='/marcas'
        >
            MARCAS
        </NavLink>
        <NavLink 
            tabIndex={5}
            className='nav-item nav-link'
            to='/inventario'
        >
            INVENTARIO
        </NavLink>
      </ul>
      </div>
      </div>
    </header>
  )
}