import React from 'react'
import NavBar from '../components/ui/NavBar'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/ui/NotFound'
import TipoEquipos from '../components/TipoEquipos/TipoEquipos'
import Estados from '../components/Estados/Estados'
import Marcas from '../components/Marcas/Marcas'
import Usuarios from '../components/Usuarios/Usuarios'
import Inventario from '../components/Inventarios/Inventario'
import Footer from '../components/ui/Footer'

export default function AppRouter() {
  return (
    <div>
    <NavBar/>
    <div className='container'>
    <Routes>
        <Route path='/'element={<TipoEquipos/>}/>
        <Route path='/estados'element={<Estados/>}/>
        <Route path='/usuarios'element={<Usuarios/>}/>
        <Route path='/marcas'element={<Marcas/>}/>
        <Route path='/inventario'element={<Inventario/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    <Footer/>

    
    </div>
    
  )
}
