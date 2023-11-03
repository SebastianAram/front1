import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createUsuario, getUsuarios, editarUsuario } from '../../services/UsuarioService'
import Modal from './ModalUsuarios'
import ModalEdit from './ModalEditUsuarios'



export default function Usuarios() {
  const title = 'Usuario'
  const [usuarios, setUsuarios] = useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: ''
  })
  const [loadingSave, setLoadingSave] = useState(false)


  const listUsuarios = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getUsuarios(query)
      console.log(data)
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

  const changeSwitch = () => {
    setQuery(!query)
  }

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const saveUsuario = async () => {
    try {
      setError(false)
      setLoadingSave(true)
      const response = await createUsuario(usuario)
      console.log(response)
      setUsuario({ nombre: '' , email: ''})
      
      listUsuarios()
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
    setUsuario({ 
      nombre: '',
      email: ''
    })
    
  }




  const editUsuario = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setError(false)
      const resp = await editarUsuario(usuario._id, usuario);
      console.log(resp)
      resetUsuario()
      listUsuarios()
    } catch (e) {
      setLoading(false)
      console.log(e)
      setError(true)
    }

  }

  const setUsuarioID = (e) => {
    console.log(e.target.id)
    const usuariosFilter = usuarios.filter(m => m._id == e.target.id);
    const usuario = usuariosFilter[0];
    console.log(usuario)
    setUsuario(usuario)
  }

  const resetUsuario = () => {
    setUsuario({
      nombre: '',
      email: '',
      estado: true
    })
  }



  return (

    <>
      <ModalEdit
        resetUsuario={resetUsuario}
        editUsuario={editUsuario}
        handleChange={handleChange}
        usuario={usuario}
      />
      <Modal
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        usuario={usuario}
        loadingSave={loadingSave}
        saveUsuario={saveUsuario}


      />
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={query}
          onChange={changeSwitch}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckChecked"
        >
          Mostrar Activos/Inactivos
        </label>
      </div>
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
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Fecha creac.</th>
                    <th scope="col">Fecha act.</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    usuarios.map((usuario, index) => {
                      return (
                        <tr key={usuario._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{usuario.nombre}</td>
                          <td>{usuario.email}</td>
                          <td>{usuario.estado ? 'Activo' : 'Inactivo'}</td>
                          <td>{dayjs(usuario.fechacreacion).format('YYYY-MM-DD')}</td>
                          <td>{dayjs(usuario.fechaactualizacion).format('YYYY-MM-DD')}</td>

                          <td><button
                            id={usuario._id}
                            type="button"
                            className="btn btn-custom"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            data-bs-whatever="@mdo"
                            onClick={setUsuarioID}
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