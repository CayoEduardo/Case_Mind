import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LoggedIn from '../../components/LoggedIn'
import DashboardAdminUI from './DashboardAdminUI'
import { atualizaUsuario } from '../../services/api'
import { connect } from 'react-redux'

const DashboardAdmin = ({ usuario }) => {
  const [formData, setFormData] = useState({
    nome: usuario.nome,
    email: usuario.email,
    cpf: usuario.cpf,
    senha: usuario.senha,
  })

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (formData) => {
    console.log(formData)
    const res = await atualizaUsuario(formData)
    alert(res)
  }

  return (
    <DashboardAdminUI
      onChange={onChange}
      onSubmit={onSubmit}
      formData={formData}
    />
  )
}
const mapStateToProps = (state) => {
  return {
    usuario: state.usuario,
  }
}

DashboardAdmin.propTypes = {}

export default connect(mapStateToProps)(DashboardAdmin)
