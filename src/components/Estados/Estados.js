import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createEstado, editarEstado, getEstados } from '../../services/EstadoService'
import Modal from './ModalEstados'
import ModalEdit from './ModalEditEstados'



export default function Estados() {
  const title = 'Estado'
  const [estados, setEstados] = useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [estado, setEstado] = useState({
    nombre: ''
  })
  const [loadingSave, setLoadingSave] = useState(false)







  const listEstados = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getEstados(query)
      console.log(data)
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

  const changeSwitch = () => {
    setQuery(!query)
  }

  const handleChange = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value
    })
  }

  const saveEstado = async () => {
    try {
      setError(false)
      setLoadingSave(true)
      const response = await createEstado(estado)
      console.log(response)
      setEstado({ nombre: '' })
      listEstados()
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
    setEstado({ nombre: '' })
  }




  const editEstado = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setError(false)
      const resp = await editarEstado(estado._id, estado);
      console.log(resp)
      resetEstado()
      listEstados()
    } catch (e) {
      setLoading(false)
      console.log(e)
      setError(true)
    }

  }

  const setEstadoID = (e) => {
    console.log(e.target.id)
    const estadosFilter = estados.filter(t => t._id == e.target.id);
    const estado = estadosFilter[0];
    console.log(estado)
    setEstado(estado)
  }

  const resetEstado = () => {
    setEstado({
      nombre: '',
      estado: true
    })
  }



  return (

    <>
      <ModalEdit
        resetEstado={resetEstado}
        editEstado={editEstado}
        handleChange={handleChange}
        estado={estado}
      />
      <Modal
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        estado={estado}
        loadingSave={loadingSave}
        saveEstado={saveEstado}


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
                    <th scope="col">Estado</th>
                    <th scope="col">Fecha creac.</th>
                    <th scope="col">Fecha act.</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    estados.map((estado, index) => {
                      return (
                        <tr key={estado._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{estado.nombre}</td>
                          <td>{estado.estado ? 'Activo' : 'Inactivo'}</td>
                          <td>{dayjs(estado.fechacreacion).format('YYYY-MM-DD')}</td>
                          <td>{dayjs(estado.fechaactualizacion).format('YYYY-MM-DD')}</td>

                          <td><button
                            id={estado._id}
                            type="button"
                            className="btn btn-custom"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            data-bs-whatever="@mdo"
                            onClick={setEstadoID}
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