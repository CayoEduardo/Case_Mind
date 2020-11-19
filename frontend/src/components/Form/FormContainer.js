import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { cadastra } from '../../services/api'

import FormUI from './FormUI'

const FormContainer = (props) => {
  return <FormUI formData={formData} onChange={onChange} onSubmit={onSubmit} />
}

FormContainer.propTypes = {}

export default FormContainer
