import { axiosConfig } from "../configuration/axiosConfig"

const getTipoEquipos = (estado) => {
    return axiosConfig.get ('tipoequipos?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}




const createTipoEquipo = (data= {}) => {
    return axiosConfig.post ('tipoequipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



 const editarTipoEquipo = (id, data) => {
    return axiosConfig.put('/tipoequipos/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
  }
  



export {
    getTipoEquipos,
    createTipoEquipo,
    editarTipoEquipo,
    
    
}