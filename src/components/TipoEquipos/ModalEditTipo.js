import React from 'react'

export default function ModalEdit({
    resetTipoEquipo,
    editTipoEquipo,
    handleChange,
    tipoEquipo

})

{
  return (
    <div>
        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModal2Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModal2Label">Editar TipoEquipo</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
                  onClick={resetTipoEquipo}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={editTipoEquipo}>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="recipient-name"
                      onChange={handleChange}
                      value={tipoEquipo.nombre}
                      name="nombre"
                    />
                    <label htmlFor="recipient-name" className="col-form-label">Estado:</label>
                    <select 
                      className="form-select" 
                      aria-label="Default select example"
                      name="estado"
                      value={tipoEquipo.estado}
                      onChange={handleChange}
                    >
                      <option value={false}>Inactivo</option>
                      <option value={true}>Activo</option>
                    </select>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
                    onClick={resetTipoEquipo}
                  >
                    Cerrar
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={tipoEquipo.nombre.length <= 0}
                    data-bs-dismiss="modal"
                  >
                    Enviar
                  </button>
                </form>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}
