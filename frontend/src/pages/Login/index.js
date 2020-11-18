import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LoginUI from './LoginUI'
import { login } from '../../services/api'

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  })

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (formData) => {
    const isLogged = await login(formData)
    alert(isLogged)
  }

  return <LoginUI formData={formData} onChange={onChange} onSubmit={onSubmit} />
}

Login.propTypes = {}

export default Login
