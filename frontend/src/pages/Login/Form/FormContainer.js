import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { login } from '../../../services/api'

import FormUI from './FormUI'

const FormContainer = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  })

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (formData) => {
    console.log(formData)
    const isLogged = login(formData)
    console.log(isLogged)
  }
  return <FormUI formData={formData} onChange={onChange} onSubmit={onSubmit} />
}

FormContainer.propTypes = {}

export default FormContainer
