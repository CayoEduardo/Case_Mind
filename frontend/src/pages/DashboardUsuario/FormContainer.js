import React from 'react'
import PropTypes from 'prop-types'
import FormField from '../../components/Form/FormField'
import FormUI from './FormUI'

const FormContainer = ({ onChange, onSubmit, formData }) => {
  const showFormFields = (formData) => {
    let campos = Object.getOwnPropertyNames(formData)

    return campos.map((campo) => (
      <FormField
        fieldTitle={campo.charAt(0).toUpperCase() + campo.slice(1)}
        fieldName={campo}
        fieldValue={formData.campo}
        onChange={onChange}
      />
    ))
  }
  return (
    <FormUI
      showFormFields={showFormFields}
      onChange={onChange}
      onSubmit={onSubmit}
      formData={formData}
    />
  )
}

FormContainer.propTypes = {}

export default FormContainer
