import { axiosConfig } from "../configuration/axiosConfig"

const getEstados = (estado) => {
    return axiosConfig.get ('estadoequipos?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createEstado = (data= {}) => {
    return axiosConfig.post ('estadoequipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



 const editarEstado = (id, data) => {
    return axiosConfig.put('/estadoequipos/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
  }
  



export {
    getEstados,
    createEstado,
    editarEstado,
}