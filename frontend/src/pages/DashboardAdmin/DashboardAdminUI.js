import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import LoggedIn from '../../components/LoggedIn'
import Navbar from './Navbar'

import {
  Grid,
  makeStyles,
  Paper,
  FormControl,
  TextField,
  Button,
  AppBar,
  Toolbar,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import Board from './Board'
import UserList from './UserList'
const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const reset = () => console.log('oi')

const Bar = () => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <h1 style={{ marginLeft: '50px' }}>Dashboard - Usuário</h1>
        <div style={{ flexGrow: 1 }} />
        <Link to='/' onClick={() => reset()} style={{ margin: '0 30px' }}>
          Sair
        </Link>
        <LoggedIn />
      </Toolbar>
    </AppBar>
  )
}

const DashboardAdminUI = ({ onChange, onSubmit, formData, usuarios }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      {Bar()}
      <Grid item container xs={12}>
        <Grid item xs={3} className={classes.centered}>
          <UserList usuarios={usuarios} />
        </Grid>
        <Grid item xs={8} className={classes.centered}>
          <Board onChange={onChange} onSubmit={onSubmit} formData={formData} />
        </Grid>
      </Grid>
    </Grid>
  )
}

DashboardAdminUI.propTypes = {}

export default DashboardAdminUI
