


export default function ModalEdit({
  resetInventario,
  editInventario,
  handleChange,
  inventario,
  usuarios,
  marcas,
  estados,
  tipoequipos


}) {
 







  return (
    <div>
      <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModal2Label">Editar Inventario</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetInventario}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={editInventario}>
                <div className="mb-3">
                  <label htmlFor="serial" className="col-form-label">Serial:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="serial"
                    onChange={handleChange}
                    value={inventario.serial}
                    name="serial"
                  />
                  <label htmlFor="modelo" className="col-form-label">Modelo:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="modelo"
                    onChange={handleChange}
                    value={inventario.modelo}
                    name="modelo"
                  />
                  <label htmlFor="descripcion" className="col-form-label">Descripcion:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="descripcion"
                    onChange={handleChange}
                    value={inventario.descripcion}
                    name="descripcion"
                  />
                  <label htmlFor="foto" className="col-form-label">Foto:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="foto"
                    onChange={handleChange}
                    value={inventario.foto}
                    name="foto"
                  />
                  <label htmlFor="color" className="col-form-label">Color:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    onChange={handleChange}
                    value={inventario.color}
                    name="color"
                  />
                  <label htmlFor="fechaCompra" className="col-form-label">Fecha Compra:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fechaCompra"
                    onChange={handleChange}
                    value={inventario.fechaCompra}
                    name="fechaCompra"
                  />
                  <label htmlFor="precio" className="col-form-label">Precio:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="precio"
                    onChange={handleChange}
                    value={inventario.precio}
                    name="precio"
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
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={resetInventario}
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