import axios from 'axios'
import { Redirect } from 'react-router-dom'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

const apiPath = 'http://localhost:5000'

export const login = async (formData) => {
  try {
    const res = await axios.post(`${apiPath}/api/login`, formData, config)

    return res
  } catch (error) {
    console.log(error.response)
    return error
  }
}

export const getUsuarios = async (acesso) => {
  try {
    const res = await axios.get(`${apiPath}/api/usuarios`, { acesso }, config)
    return res
  } catch (error) {
    return error.response
  }
}

export const getUsuario = async (id) => {
  try {
    const res = await axios.get(`${apiPath}/api/usuario`, { id }, config)
    return res
  } catch (error) {
    return error
  }
}

export const atualizaUsuario = async (formData) => {
  try {
    const res = await axios.put(`${apiPath}/api/usuario`, formData, config)
    return res
  } catch (error) {
    console.log(error)
  }
}

export const cadastra = async (formData) => {
  try {
    const res = await axios.post(`${apiPath}/api/usuario`, formData, config)
    return res
  } catch (error) {
    return error.response
  }
}
