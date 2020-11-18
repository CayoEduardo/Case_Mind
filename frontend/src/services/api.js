import axios from 'axios'
import { Redirect } from 'react-router-dom'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const login = async (formData) => {
  try {
    const res = await axios.post(
      'http://localhost:5000/api/login',
      formData,
      config
    )
    console.log(res.data.token)

    return res.data.token
  } catch (error) {
    console.log(error.response)
    return error.response.data.errors[0].msg
  }
}

export const cadastra = async (formData) => {
  formData.acesso = 1
  try {
    const res = await axios.post(
      'http://localhost:5000/api/usuario',
      formData,
      config
    )
    console.log(res.data)
    console.log(res.data.token)
    return res.data.token
  } catch (error) {
    console.log(error)
    console.log(error.response)
    return error.response
  }
}
