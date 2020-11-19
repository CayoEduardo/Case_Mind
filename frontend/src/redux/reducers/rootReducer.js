import { CARREGA_USUARIO } from '../types/types'

const initialState = {
  token: localStorage.getItem('token'),
  usuario: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case CARREGA_USUARIO:
      return {
        ...state,
        usuario: payload,
      }
    default:
      return state
  }
}
