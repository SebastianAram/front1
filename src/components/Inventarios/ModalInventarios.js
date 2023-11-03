




export default function Modal({
  title,
  closeModal,
  handleChange,
  loadingSave,
  saveInventario,
  inventario,
  usuarios,
  marcas,
  estados,
  tipoequipos

}) {


  

  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo {title}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            >
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="serial"
                  className="col-form-label">
                  Serial:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="serial"
                  name="serial"
                  onChange={handleChange}
                  value={inventario.serial}
                />
                <label htmlFor="modelo"
                  className="col-form-label">
                  Modelo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="modelo"
                  name="modelo"
                  onChange={handleChange}
                  value={inventario.modelo}
                />
                <label htmlFor="descripcion"
                  className="col-form-label">
                  Descripcion:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  onChange={handleChange}
                  value={inventario.descripcion}
                />
                <label htmlFor="foto"
                  className="col-form-label">
                  Foto:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="foto"
                  name="foto"
                  onChange={handleChange}
                  value={inventario.foto}
                />
                <label htmlFor="color"
                  className="col-form-label">
                  Color:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  name="color"
                  onChange={handleChange}
                  value={inventario.color}
                />
                <label htmlFor="fechaCompra"
                  className="col-form-label">
                  Fecha de Compra:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaCompra"
                  name="fechaCompra"
                  onChange={handleChange}
                  value={inventario.fechaCompra}
                />
                <label htmlFor="precio"
                  className="col-form-label">
                  Precio:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="precio"
                  name="precio"
                  onChange={handleChange}
                  value={inventario.precio}
                />
                <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <select className="form-select"
                                required
                                name = 'usuarioEquipo'
                                value= {inventario.usuarioEquipo.nombre}
                                onChange={(e)=> handleChange(e)}>
                            <option > -- seleccionar usuario --</option>
                            {  usuarios.map((usuario)=>{
                                    return <option key={usuario._id} value={usuario._id} >{usuario.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Marca</label>
                        <select className="form-select"
                                required
                                name = 'marcaEquipo'
                                value= {inventario.marcaEquipo.nombre}
                                onChange={(e)=> handleChange(e)}>
                            <option > -- seleccionar marca --</option>
                            {  marcas.map((marca)=>{
                                    return <option key={marca._id} value={marca._id} >{marca.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Estado</label>
                        <select className="form-select"
                                required
                                name = 'estadoEquipo'
                                value= {inventario.estadoEquipo.nombre}
                                onChange={(e)=> handleChange(e)}>
                            <option > -- seleccionar estado --</option>
                            {  estados.map((estado)=>{
                                    return <option key={estado._id} value={estado._id} >{estado.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">TipoEquipo</label>
                        <select className="form-select"
                                required
                                name = 'tipoEquipo'
                                value= {inventario.tipoEquipo.nombre}
                                onChange={(e)=> handleChange(e)}>
                            <option > -- seleccionar tipo --</option>
                            {  tipoequipos.map((tipo)=>{
                                    return <option key={tipo._id} value={tipo._id} >{tipo.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal}
              
            >
              Cerrar
            </button>
            {
              loadingSave
                ?
                (
                  <button
                    className="btn btn-primary"
                    type="button" disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    >
                    </span>
                    Guardando...
                  </button>
                ) :
                (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={saveInventario}

                  >
                    Enviar
                  </button>
                )
            }
          </div>
        </div>
      </div>
    </div>
  )

}