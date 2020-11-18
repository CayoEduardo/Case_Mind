import axios from 'axios'
import { Redirect } from 'react-router-dom'

export const login = async (formData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post(
      'http://localhost:5000/api/login',
      formData,
      config
    )
    console.log(res.data.token)

    return <Redirect to='http://localhost:3000/dashboardusuario' />
  } catch (error) {
    return error.response.data.errors[0].msg
  }
}

export const cadastra = async (formData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post(
      'http://localhost:5000/api/usuario',
      formData,
      config
    )
    console.log(res.data)
    console.log(res)
  } catch (error) {
    console.log(error.response)
  }
}
