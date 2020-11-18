import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { cadastra } from '../../services/api'

import FormUI from './FormUI'

const FormContainer = (props) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    imgPath: '',
    acesso: 1,
  })

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (formData) => {
    console.log(formData)
    const res = cadastra(formData)
  }
  return <FormUI formData={formData} onChange={onChange} onSubmit={onSubmit} />
}

FormContainer.propTypes = {}

export default FormContainer
