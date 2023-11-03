import { axiosConfig } from "../configuration/axiosConfig"

const getMarcas = (estado) => {
    return axiosConfig.get ('marcaequipos?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createMarca = (data= {}) => {
    return axiosConfig.post ('marcaequipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



 const editarMarca = (id, data) => {
    return axiosConfig.put('/marcaequipos/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
  }
  



export {
    getMarcas,
    createMarca,
    editarMarca,
}