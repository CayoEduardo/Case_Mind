import React from 'react'
import PropTypes from 'prop-types'

//assets
import background from '../../assets/Fundo.png'
import Ilustration from '../../assets/Ilustration.png'

//components
import Form from './Form'

//Material-Ui
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    padding: '90px',
  },
  ilustrationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ilustration: {
    width: '80%',
    height: 'auto',
  },
  loginWrapper: {
    display: 'flex',
  },
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
})

const Login = (props) => {
  const classes = useStyles()
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item container xs={12}>
          <Grid item xs={6} className={classes.ilustrationWrapper}>
            <img
              className={classes.ilustration}
              src={Ilustration}
              alt='Bem vindo!'
            />
          </Grid>
          <Grid item xs={6} className={classes.loginWrapper}>
            <Form />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Login.propTypes = {}

export default Login
