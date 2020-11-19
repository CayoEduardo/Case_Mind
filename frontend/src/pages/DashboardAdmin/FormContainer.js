import React from 'react'
import PropTypes from 'prop-types'
import FormField from '../../components/Form/FormField'
import FormUI from './FormUI'
import { connect } from 'react-redux'

const FormContainer = ({ onChange, onSubmit, formData, cardUsuario }) => {
  const showFormFields = (formData) => {
    // let campos = Object.getOwnPropertyNames(formData)
    // campos.splice(campos.indexOf('acesso'), 1)
    // campos.splice(campos.indexOf('imgPath'), 1)

    let campos = Object.getOwnPropertyNames(cardUsuario)
    campos.splice(campos.indexOf('acesso'), 1)
    campos.splice(campos.indexOf('imgPath'), 1)
    campos.splice(campos.indexOf('_id'), 1)

    return campos.map((campo) => (
      <>
        <FormField
          fieldTitle={campo.charAt(0).toUpperCase() + campo.slice(1)}
          fieldName={campo}
          fieldValue={cardUsuario[campo]}
          onChange={onChange}
        />
      </>
    ))
  }
  return (
    <FormUI
      showFormFields={showFormFields}
      onChange={onChange}
      onSubmit={onSubmit}
      formData={cardUsuario}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    cardUsuario: state.cardUsuario,
  }
}

export default connect(mapStateToProps)(FormContainer)
