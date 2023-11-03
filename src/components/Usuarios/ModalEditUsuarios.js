import React from 'react'

export default function ModalEdit({
    resetUsuario,
    editUsuario,
    handleChange,
    usuario

})

{
  return (
    <div>
        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModal2Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModal2Label">Editar Usuario</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
                  onClick={resetUsuario}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={editUsuario}>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="recipient-name"
                      onChange={handleChange}
                      value={usuario.nombre}
                      name="nombre"
                    />
                    <label htmlFor="recipient-name" className="col-form-label">Estado:</label>
                    <select 
                      className="form-select" 
                      aria-label="Default select example"
                      name="estado"
                      value={usuario.estado}
                      onChange={handleChange}
                    >
                      <option value={false}>Inactivo</option>
                      <option value={true}>Activo</option>
                    </select>
                    <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="recipient-name"
                      onChange={handleChange}
                      value={usuario.email}
                      name="email"
                    />
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
                    onClick={resetUsuario}
                  >
                    Cerrar
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    
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
