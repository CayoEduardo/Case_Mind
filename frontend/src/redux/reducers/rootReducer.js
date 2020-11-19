import {
  CARREGA_USUARIO,
  CARREGA_USUARIOS,
  RESET,
  MUDA_USUARIO,
} from '../types/types'

const initialState = {
  token: localStorage.getItem('token'),
  usuario: null,
  usuarios: [],
  cardUsuario: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case CARREGA_USUARIO:
      return {
        ...state,
        usuario: payload,
      }
    case CARREGA_USUARIOS:
      console.log(payload)
      return {
        ...state,
        usuarios: [...payload],
      }
    case RESET:
      localStorage.removeItem('token')
      return initialState

    case MUDA_USUARIO:
      return {
        ...state,
        cardUsuario: payload,
      }
    default:
      return state
  }
}
