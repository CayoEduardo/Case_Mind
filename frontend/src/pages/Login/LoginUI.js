import React from 'react'
import PropTypes from 'prop-types'

//assets
import background from '../../assets/Fundo.png'

//components
import FormUI from './FormUI'
import Ilustration from './Ilustration'

//Material-Ui
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    padding: '90px',
  },
  ilustrationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '70px',
  },
})

const LoginUI = ({ formData, onChange, onSubmit }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item container xs={12}>
        <Grid item xs={6} className={classes.ilustrationWrapper}>
          <Ilustration />
        </Grid>
        <Grid item xs={6} className={classes.loginWrapper}>
          <FormUI formData={formData} onChange={onChange} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </Grid>
  )
}

LoginUI.propTypes = {}

export default LoginUI
