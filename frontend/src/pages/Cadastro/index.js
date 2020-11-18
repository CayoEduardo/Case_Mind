import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CadastroUI from './CadastroUI'
import { cadastra } from '../../services/api'

const Cadastro = (props) => {
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
    <CadastroUI onChange={onChange} onSubmit={onSubmit} formData={formData} />
  )
}

Cadastro.propTypes = {}

export default Cadastro
