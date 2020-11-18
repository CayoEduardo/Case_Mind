import React from 'react'

import { FormControl, TextField, makeStyles, Button } from '@material-ui/core'
const useStyles = makeStyles({
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: '5px',
    height: '80%',
  },

  formControlMargin: {
    margin: '5px 0',
  },
  inputLabel: {
    marginBottom: '10px',
  },
  button: {
    borderRadius: 0,
    backgroundColor: '#008891',
    width: '300px',
    height: '50px',
    color: '#e7e7e7',
    margin: '30px 0',
  },
})
const FormUI = ({ formData, onChange, onSubmit }) => {
  const classes = useStyles()
  return (
    <>
      <FormControl className={classes.formControlMargin}>
        <p className={classes.inputLabel}>Nome</p>
        <TextField
          onChange={(e) => onChange(e)}
          name='nome'
          value={formData.nome}
          className={classes.input}
          variant='outlined'
        />
      </FormControl>
      <FormControl className={classes.formControlMargin}>
        <p className={classes.inputLabel}>Email</p>
        <TextField
          onChange={(e) => onChange(e)}
          name='email'
          value={formData.email}
          className={classes.input}
          variant='outlined'
        />
      </FormControl>
      <FormControl className={classes.formControlMargin}>
        <p className={classes.inputLabel}>Cpf</p>
        <TextField
          onChange={(e) => onChange(e)}
          name='cpf'
          value={formData.cpf}
          className={classes.input}
          variant='outlined'
        />
      </FormControl>
      <FormControl className={classes.formControlMargin}>
        <p className={classes.inputLabel}>Senha</p>
        <TextField
          onChange={(e) => onChange(e)}
          name='senha'
          value={formData.senha}
          className={classes.input}
          variant='outlined'
        />
      </FormControl>
      <Button
        onClick={() => onSubmit(formData)}
        className={classes.button}
        variant='contained'
      >
        <b>Cadastrar</b>
      </Button>
    </>
  )
}

export default FormUI
