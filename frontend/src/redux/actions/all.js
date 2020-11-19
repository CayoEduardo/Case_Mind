import { CARREGA_USUARIO } from '../types/types'

export const carregaUsuario = (user) => {
  return {
    type: CARREGA_USUARIO,
    payload: user,
  }
}
