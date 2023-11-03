import { axiosConfig } from "../configuration/axiosConfig"

const getInventarios = (estado) => {
    return axiosConfig.get ('inventarioequipos?estado='+estado,  {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createInventario = (data= {}) => {
    return axiosConfig.post ('inventarioequipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


 const editarInventario= (id, data) => {
    return axiosConfig.put('/inventarioequipos/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
  }
  



export {
    getInventarios,
    createInventario,
    editarInventario,
    
}