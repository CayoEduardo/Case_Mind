import React from 'react'
import PropTypes from 'prop-types'

//assets
import background from '../../assets/Fundo.png'

//components
import FormUI from './FormUI'
import Ilustration from './Ilustration'

//Material-Ui
import {
  Grid,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core'

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

const LoginUI = ({ formData, onChange, onSubmit, open, setOpen }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item container xs={12}>
          <Grid item xs={6} className={classes.ilustrationWrapper}>
            <Ilustration />
          </Grid>
          <Grid item xs={6} className={classes.loginWrapper}>
            <FormUI
              formData={formData}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        maxWidth='xs'
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <DialogTitle id='alert-dialog-title'>{'Acesso negado!'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Você teve o acesso bloqueado por um administrador. Por favor, envie
            um email para <a href='#'>suport@email.com</a>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

LoginUI.propTypes = {}

export default LoginUI
