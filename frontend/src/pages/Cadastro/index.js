import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CadastroUI from './CadastroUI'
import { cadastra } from '../../services/api'
import { getUsuario } from '../../services/api'
import axios from 'axios'
import { connect } from 'react-redux'
import { carregaUsuario } from '../../redux/'
const Cadastro = ({ history, carregaUsuario }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    acesso: 999,
  })

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (formData) => {
    console.log(formData)
    try {
      const res = await cadastra(formData)
      if (res.status === 200) {
        const token = res.data.token
        const id = res.data.id
        const acesso = res.data.acesso
        localStorage.setItem('token', token)
        axios.defaults.headers.common['x-auth-token'] = token
        try {
          const resUser = await getUsuario(id)
          console.log(resUser)
          carregaUsuario(resUser.data)
          if (acesso === 1) history.push('/dashboardusuario')
          else if (acesso === 999) history.push('/dashboardadmin')
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
      alert('Deu erro')
    }
  }
  return (
    <CadastroUI onChange={onChange} onSubmit={onSubmit} formData={formData} />
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    carregaUsuario: (usuario) => dispatch(carregaUsuario(usuario)),
  }
}

Cadastro.propTypes = {}

export default connect(null, mapDispatchToProps)(Cadastro)
