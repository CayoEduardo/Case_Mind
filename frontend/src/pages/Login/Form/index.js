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

const Form = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1 className={classes.alignLeft}>Login</h1>

      <div className={classes.fieldWrapper}>
        <FormControl className={classes.margin}>
          <p className={`${classes.alignLeft} ${classes.margin}`}>
            Email ou CPF
          </p>
          <TextField className={classes.textField} variant='outlined' />
        </FormControl>

        <FormControl className={classes.margin}>
          <p className={`${classes.alignLeft} ${classes.margin}`}>Senha</p>
          <TextField className={classes.textField} variant='outlined' />
        </FormControl>
        <p className={`${classes.cadastroText} ${classes.margin}`}>
          Não tem cadastro?
        </p>
      </div>
      <Button className={classes.button} variant='outlined'>
        <b>Login</b>
      </Button>
    </div>
  )
}

export default Form
