import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createMarca, editarMarca, getMarcas  } from '../../services/MarcaService'
import Modal from './ModalMarcas'
import ModalEdit from './ModalEditMarcas'



export default function Marcas() {
  const title = 'Marca'
  const [marcas, setMarcas] = useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [marca, setMarca] = useState({
    nombre: ''
  })
  const [loadingSave, setLoadingSave] = useState(false)


  const listMarcas = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await getMarcas(query)
      console.log(data)
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

  const changeSwitch = () => {
    setQuery(!query)
  }

  const handleChange = (e) => {
    setMarca({
      ...marca,
      [e.target.name]: e.target.value
    })
  }

  const saveMarca = async () => {
    try {
      setError(false)
      setLoadingSave(true)
      const response = await createMarca(marca)
      console.log(response)
      setMarca({ nombre: '' })
      listMarcas()
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
    setMarca({ nombre: '' })
  }




  const editMarca = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setError(false)
      const resp = await editarMarca(marca._id, marca);
      console.log(resp)
      resetMarca()
      listMarcas()
    } catch (e) {
      setLoading(false)
      console.log(e)
      setError(true)
    }

  }

  const setMarcaID = (e) => {
    console.log(e.target.id)
    const marcasFilter = marcas.filter(m => m._id == e.target.id);
    const marca = marcasFilter[0];
    console.log(marca)
    setMarca(marca)
  }

  const resetMarca = () => {
    setMarca({
      nombre: '',
      estado: true
    })
  }



  return (

    <>
      <ModalEdit
        resetMarca={resetMarca}
        editMarca={editMarca}
        handleChange={handleChange}
        marca={marca}
      />
      <Modal
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        marca={marca}
        loadingSave={loadingSave}
        saveMarca={saveMarca}


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
                    marcas.map((marca, index) => {
                      return (
                        <tr key={marca._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{marca.nombre}</td>
                          <td>{marca.estado ? 'Activo' : 'Inactivo'}</td>
                          <td>{dayjs(marca.fechacreacion).format('YYYY-MM-DD')}</td>
                          <td>{dayjs(marca.fechaactualizacion).format('YYYY-MM-DD')}</td>

                          <td><button
                            id={marca._id}
                            type="button"
                            className="btn btn-custom"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            data-bs-whatever="@mdo"
                            onClick={setMarcaID}
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