import React from 'react'
import PropTypes from 'prop-types'

const FormUI = ({ showFormFields, formData, onSubmit, onChange }) => {
  return <>{showFormFields(formData)}</>
}

FormUI.propTypes = {}

export default FormUI
