import { CARREGA_USUARIO, CARREGA_USUARIOS } from '../types/types'

export const carregaUsuario = (user) => {
  return {
    type: CARREGA_USUARIO,
    payload: user,
  }
}

export const carregaUsuarios = (users) => {
  return {
    type: CARREGA_USUARIOS,
    payload: users,
  }
}
