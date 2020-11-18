import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DashboardUsuarioUI from './DashboardUsuarioUI'
import { cadastra } from '../../services/api'

const DashboardUsuario = (props) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: '',
  })

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (formData) => {
    console.log(formData)
    const res = await cadastra(formData)
    alert(res)
  }
  return (
    <DashboardUsuarioUI
      onChange={onChange}
      onSubmit={onSubmit}
      formData={formData}
    />
  )
}

DashboardUsuario.propTypes = {}

export default DashboardUsuario
