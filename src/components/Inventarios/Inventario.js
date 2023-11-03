import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createInventario, editarInventario, getInventarios } from '../../services/InventarioService'
import {  getUsuarios } from '../../services/UsuarioService'
import { getMarcas } from '../../services/MarcaService'
import { getEstados } from '../../services/EstadoService'
import { getTipoEquipos } from '../../services/TipoEquipoService'
import ModalEdit from './ModalEditInventarios'
import Modal from './ModalInventarios'





export default function Inventario() {
  const title = 'Inventario'
  const [inventarios, setInventarios] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [marcas, setMarcas] = useState([])
  const [estados, setEstados] = useState([])
  const [tipoequipos, setTipoEquipos] = useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [loadingSave, setLoadingSave] = useState(false)
  

  

    
    
    
  const [inventario, setInventario] = useState({
    serial: '',
    modelo: '',
    descripcion: '',
    foto: '',
    color: '',
    fechaCompra: '',
    precio: '',
    usuarioEquipo: '',
    marcaEquipo: '',
    estadoEquipo: '',
    tipoEquipo: ''
  })

  

 

  



  const listUsuarios = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getUsuarios(query)
      
      setUsuarios(data)

      setTimeout(() => {
        setLoading(false)
      }, 500)

    } catch (e) {
      console.log(e)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    listUsuarios()
  }, [query])

  

  const listMarcas = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getMarcas(query)
      
      setMarcas(data)

      setTimeout(() => {
        setLoading(false)
      }, 500)

    } catch (e) {
      console.log(e)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    listMarcas()
  }, [query])

  
  const listEstados = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getEstados(query)
      
      setEstados(data)

      setTimeout(() => {
        setLoading(false)
      }, 500)

    } catch (e) {
      console.log(e)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    listEstados()
  }, [query])

 
  const listTipoEquipos = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getTipoEquipos(query)
      
      setTipoEquipos(data)

      setTimeout(() => {
        setLoading(false)
      }, 500)

    } catch (e) {
      console.log(e)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    listTipoEquipos()
  }, [query])

  
 const listInventarios = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getInventarios(query)
      console.log(data)
      setInventarios(data)

      setTimeout(() => {
        setLoading(false)
      }, 500)

    } catch (e) {
      console.log(e)
      setError(true)
      setLoading(false)
    }
  }



  useEffect(() => {
    listInventarios()
  }, [query])



  const handleChange = (e) => {
    setInventario({
      ...inventario,
      [e.target.name]: e.target.value
    })
  }

  const saveInventario = async () => {
    try {
      setError(false)
      setLoadingSave(true)
      const response = await createInventario(inventario)
      console.log(response)
      setInventario({ 
        serial: '', 
        modelo: '', 
        descripcion: '', 
        foto: '',  
        color: '' ,
        fechaCompra: '' ,
        precio: '' ,
        usuarioEquipo: '' ,
        marcaEquipo: '' ,
        estadoEquipo: '', 
       tipoEquipo: '', 
      })
      
       
      listInventarios()
      setTimeout(() => {
        setLoadingSave(false)
      }, 500)
    } catch (e) {
      console.log(e)
      setError(true)
      setLoadingSave(false)
    }
  }

  const closeModal = () => {
    setInventario({ 
    serial: '' ,
    modelo: '' ,
    descripcion: '' ,
    foto: '' ,
    color: '' ,
    fechaCompra: '' ,
    precio: '' ,
    usuarioEquipo: '' ,
    marcaEquipo: '' ,
    estadoEquipo: '',
    tipoEquipo: ''  })
    
}



  const editInventario = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setError(false)
      const resp = await editarInventario(inventario._id, inventario);
      console.log(resp)
      resetInventario()
      listInventarios()
    } catch (e) {
      setLoading(false)
      console.log(e)
      setError(true)
    }

  }

  const setInventarioID = (e) => {
    console.log(e.target.id)
    const inventariosFilter = inventarios.filter(t => t._id == e.target.id);
    const inventario = inventariosFilter[0];
    console.log(inventario)
    setInventario(inventario)
  }

  const resetInventario = () => {
      setInventario({
    serial: '' ,
    modelo: '' ,
    descripcion: '' ,
    foto: '' ,
    color: '' ,
    fechaCompra: '' ,
    precio: '' ,
    usuarioEquipo: '' ,
    marcaEquipo:  '',
    estadoEquipo: '',
    tipoEquipo:  ''
       
    })
  }



  return (

    <>
      <ModalEdit
        resetInventario={resetInventario}
        editInventario={editInventario}
        handleChange={handleChange}
        inventario={inventario}
        usuarios={usuarios}
        marcas={marcas}
        estados={estados}
        tipoequipos={tipoequipos}
      />
      <Modal
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        inventario={inventario}
        loadingSave={loadingSave}
        saveInventario={saveInventario}
        usuarios={usuarios}
        marcas={marcas}
        estados={estados}
        tipoequipos={tipoequipos}
        


      />

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Agregar
      </button>
      {
        error &&
        (
          <div className="alert alert-danger" role="alert">
            Ha ocurrido un error
          </div>
        )
      }

      <div className='table-responsive'>
        {
          loading
            ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
            :
            (
              <table className="table table-bordered table-success table-striped mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Serial</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Foto URL</th>
                    <th scope="col">Color</th>
                    <th scope="col">FechaCompra</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Tipo</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    inventarios.map((inventario, index) => {
                    


                    
                      return (
                        <tr key={inventario._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{inventario.serial}</td>
                          <td>{inventario.modelo}</td>
                          <td>{inventario.descripcion}</td>
                          <td><img src={inventario.foto} alt="No se pudo cargar la imagen" style={{ width: '100px', height: '100px' }}></img></td>
                          <td>{inventario.color}</td>
                          <td>{dayjs(inventario.fechaCompra).format('YYYY-MM-DD')}</td>
                          <td>{inventario.precio}</td>
                          <td>{inventario.usuarioEquipo.nombre}</td>
                          <td>{inventario.marcaEquipo.nombre}</td>
                          <td>{inventario.estadoEquipo.nombre}</td>
                          <td>{inventario.tipoEquipo.nombre}</td>
                      

                          <td><button
                            id={inventario._id}
                            type="button"
                            className="btn btn-custom"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            data-bs-whatever="@mdo"
                            onClick={setInventarioID}
                          >
                            Editar
                          </button>


                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>

            )
        }
      </div>
    </>
  )
}