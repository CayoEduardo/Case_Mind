import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import Board from './Board'
import {
  Grid,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import LoggedIn from '../../components/LoggedIn'

const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
  },
  tittle: { marginLeft: '50px' },
})

const Bar = () => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense' style={{ margin: '0', padding: '0' }}>
        <h1 style={{ marginLeft: '50px' }}>Dashboard - Usuário</h1>
        <LoggedIn />
      </Toolbar>
    </AppBar>
  )
}

const DashboardUsuarioUI = ({ onChange, onSubmit, formData }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} style={{ display: 'flex' }}>
        {Bar()}
      </Grid>
      <Grid item xs={8}>
        <Board onChange={onChange} onSubmit={onSubmit} formData={formData} />
      </Grid>
    </Grid>
  )
}

DashboardUsuarioUI.propTypes = {}

export default DashboardUsuarioUI
