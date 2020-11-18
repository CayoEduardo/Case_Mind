import React from 'react'

import { FormControl, TextField, makeStyles, Button } from '@material-ui/core'
import FormField from './FormField'

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  fieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },

  cadastroText: {
    textAlign: 'left',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#e7e7e7',
  },
  button: {
    borderRadius: 0,
    backgroundColor: '#008891',
    width: '300px',
    height: '50px',
    color: '#e7e7e7',
    margin: '30px 0',
    opacity: '0.7',
    '&:hover': {
      backgroundColor: '#008891',
      opacity: '1',
    },
  },
})

const FormUI = ({ formData, onChange, onSubmit }) => {
  const classes = useStyles()

  const showFormFields = (formData) => {
    let campos = Object.getOwnPropertyNames(formData)

    return campos.map((campo) => (
      <FormField
        required
        fieldTitle={campo.charAt(0).toUpperCase() + campo.slice(1)}
        fieldName={campo}
        fieldValue={formData.campo}
        onChange={onChange}
      />
    ))
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.alignLeft}>Login</h1>
      <div className={classes.fieldWrapper}>
        {showFormFields(formData)}
        <Link to='/cadastro' className={classes.cadastroText}>
          Não tem cadastro?
        </Link>
      </div>
      <Button
        onClick={() => onSubmit(formData)}
        className={classes.button}
        variant='outlined'
      >
        <b>Login</b>
      </Button>
    </div>
  )
}

export default FormUI
