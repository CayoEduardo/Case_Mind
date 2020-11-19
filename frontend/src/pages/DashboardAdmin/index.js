import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LoggedIn from '../../components/LoggedIn'
import DashboardAdminUI from './DashboardAdminUI'
import { atualizaUsuario, getUsuarios } from '../../services/api'
import { connect } from 'react-redux'
import { carregaUsuarios } from '../../redux/'

const DashboardAdmin = ({ usuario, usuarios, carregaUsuarios }) => {
  useEffect(() => {
    const getU = async () => {
      const res = await getUsuarios(usuario.acesso)
      console.log(res.data)
      carregaUsuarios(res.data)
    }
    getU()
  }, [])
  console.log(usuarios)
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
