import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LoggedIn from '../../components/LoggedIn'
import DashboardAdminUI from './DashboardAdminUI'
import { atualizaUsuario, getUsuarios } from '../../services/api'
import { connect } from 'react-redux'
import { carregaUsuarios } from '../../redux/'

const DashboardAdmin = ({ usuario, carregaUsuarios }) => {
  useEffect(async () => {
    const getU = async () => {
      const res = await getUsuarios(usuario.acesso)
      carregaUsuarios(res.data)
    }
    await getU()
  })
  const [formData, setFormData] = useState({
    nome: usuario.nome,
    email: usuario.email,
    cpf: usuario.cpf,
    senha: usuario.senha,
    imgPath:
      'https://www.svgrepo.com/show/122119/user-image-with-black-background.svg',
    acesso: 999,
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
      setFormData={setFormData}
      formData={formData}
    />
  )
}
const mapStateToProps = (state) => {
  return {
    usuario: state.usuario,
    usuarios: state.usuarios,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    carregaUsuarios: (usuarios) => dispatch(carregaUsuarios(usuarios)),
  }
}

DashboardAdmin.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAdmin)
