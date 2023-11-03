import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createTipoEquipo, getTipoEquipos, editarTipoEquipo } from '../../services/TipoEquipoService'
import Modal from './ModalTipoEquipo'
import ModalEdit from './ModalEditTipo'



export default function TipoEquipos() {
  const title = 'Tipo de Equipo'
  const [tipoEquipos, setTipoEquipos] = useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tipoEquipo, setTipoEquipo] = useState({
    nombre: ''
  })
  const [loadingSave, setLoadingSave] = useState(false)







  const listTipoEquipos = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getTipoEquipos(query)
      console.log(data)
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

  const changeSwitch = () => {
    setQuery(!query)
  }

  const handleChange = (e) => {
    setTipoEquipo({
      ...tipoEquipo,
      [e.target.name]: e.target.value
    })
  }

  const saveTipoEquipo = async () => {
    try {
      setError(false)
      setLoadingSave(true)
      const response = await createTipoEquipo(tipoEquipo)
      console.log(response)
      setTipoEquipo({ nombre: '' })
      listTipoEquipos()
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
    setTipoEquipo({ nombre: '' })
  }




  const editTipoEquipo = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setError(false)
      const resp = await editarTipoEquipo(tipoEquipo._id, tipoEquipo);
      console.log(resp)
      resetTipoEquipo()
      listTipoEquipos()
    } catch (e) {
      setLoading(false)
      console.log(e)
      setError(true)
    }

  }

  const setTipoEquipoID = (e) => {
    console.log(e.target.id)
    const tiposFilter = tipoEquipos.filter(t => t._id == e.target.id);
    const tipo = tiposFilter[0];
    console.log(tipo)
    setTipoEquipo(tipo)
  }

  const resetTipoEquipo = () => {
    setTipoEquipo({
      nombre: '',
      estado: true
    })
  }



  return (

    <>
      <ModalEdit
        resetTipoEquipo={resetTipoEquipo}
        editTipoEquipo={editTipoEquipo}
        handleChange={handleChange}
        tipoEquipo={tipoEquipo}
      />
      <Modal
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        tipoEquipo={tipoEquipo}
        loadingSave={loadingSave}
        saveTipoEquipo={saveTipoEquipo}


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
                    tipoEquipos.map((tipoEquipo, index) => {
                      return (
                        <tr key={tipoEquipo._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{tipoEquipo.nombre}</td>
                          <td>{tipoEquipo.estado ? 'Activo' : 'Inactivo'}</td>
                          <td>{dayjs(tipoEquipo.fechacreacion).format('YYYY-MM-DD')}</td>
                          <td>{dayjs(tipoEquipo.fechaactualizacion).format('YYYY-MM-DD')}</td>

                          <td><button
                            id={tipoEquipo._id}
                            type="button"
                            className="btn btn-custom"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            data-bs-whatever="@mdo"
                            onClick={setTipoEquipoID}
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