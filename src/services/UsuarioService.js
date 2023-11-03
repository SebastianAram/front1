import { axiosConfig } from "../configuration/axiosConfig"

const getUsuarios = (estado) => {
    return axiosConfig.get ('usuarioequipos?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
const getUsuarios1 = () => {
    return axiosConfig.get ('usuarioequipos', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
const createUsuario = (data= {}) => {
    return axiosConfig.post ('usuarioequipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



 const editarUsuario = (id, data) => {
    return axiosConfig.put('/usuarioequipos/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
  }
  



export {
    getUsuarios,
    createUsuario,
    editarUsuario,
    getUsuarios1
}