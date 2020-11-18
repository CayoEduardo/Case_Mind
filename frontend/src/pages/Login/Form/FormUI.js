import React from 'react'

import { FormControl, TextField, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  alignLeft: { textAlign: 'left' },
  fieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },
  margin: {
    marginTop: '10px',
  },
  textField: {
    width: '300px',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  cadastroText: {
    textAlign: 'left',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '16px',
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
    <div className={classes.container}>
      <h1 className={classes.alignLeft}>Login</h1>

      <div className={classes.fieldWrapper}>
        <FormControl className={classes.margin}>
          <p className={`${classes.alignLeft} ${classes.margin}`}>
            Email ou CPF
          </p>
          <TextField
            onChange={(e) => onChange(e)}
            value={formData.email}
            name='email'
            className={classes.textField}
            variant='outlined'
          />
        </FormControl>

        <FormControl className={classes.margin}>
          <p className={`${classes.alignLeft} ${classes.margin}`}>Senha</p>
          <TextField
            name='senha'
            value={formData.senha}
            onChange={(e) => onChange(e)}
            className={classes.textField}
            variant='outlined'
          />
        </FormControl>
        <p className={`${classes.cadastroText} ${classes.margin}`}>
          Não tem cadastro?
        </p>
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
