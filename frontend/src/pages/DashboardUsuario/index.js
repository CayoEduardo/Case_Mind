import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DashboardUsuarioUI from './DashboardUsuarioUI'
import { atualizaUsuario } from '../../services/api'
import { connect } from 'react-redux'

const DashboardUsuario = ({ usuario }) => {
  // useEffect(() => {
  //   console.log(usuario)
  // }, [usuario])
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
  }
  return (
    <>
      <DashboardUsuarioUI
        onChange={onChange}
        onSubmit={onSubmit}
        formData={formData}
      />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    usuario: state.usuario,
  }
}

DashboardUsuario.propTypes = {}

export default connect(mapStateToProps)(DashboardUsuario)
