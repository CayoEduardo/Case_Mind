import {
  CARREGA_USUARIO,
  CARREGA_USUARIOS,
  RESET,
  MUDA_USUARIO,
} from '../types/types'

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

export const reset = (users) => {
  return {
    type: RESET,
  }
}

export const mudaUsuario = (user) => {
  return {
    type: MUDA_USUARIO,
    payload: user,
  }
}
