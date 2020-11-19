import React, { useState } from 'react'
import LoginUI from './LoginUI'
import { login, getUsuario } from '../../services/api'
import axios from 'axios'
import { carregaUsuario } from '../../redux/'
import { connect } from 'react-redux'

const Login = ({ history, carregaUsuario }) => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  })

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (formData) => {
    try {
      const isLogged = await login(formData)
      if (isLogged.status === 200) {
        const token = isLogged.data.token
        const id = isLogged.data.id
        const acesso = isLogged.data.acesso
        localStorage.setItem('token', token)
        axios.defaults.headers.common['x-auth-token'] = token
        try {
          const res = await getUsuario(id)
          console.log(res)
          carregaUsuario(res.data)
          if (acesso === 1) history.push('/dashboardusuario')
          else if (acesso === 0) alert('Você não está autorizado a entrar!')
          else if (acesso === 999) history.push('/dashboardadmin')
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return <LoginUI formData={formData} onChange={onChange} onSubmit={onSubmit} />
}

const mapDispatchToProps = (dispatch) => {
  return {
    carregaUsuario: (usuario) => dispatch(carregaUsuario(usuario)),
  }
}

Login.propTypes = {}

export default connect(null, mapDispatchToProps)(Login)
