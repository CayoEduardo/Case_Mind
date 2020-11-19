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
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { reset } from '../../redux'

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

const Bar = (reset) => {
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

const DashboardUsuarioUI = ({ onChange, onSubmit, formData, reset }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        {Bar(reset)}
      </Grid>
      <Grid item xs={8}>
        <Board onChange={onChange} onSubmit={onSubmit} formData={formData} />
      </Grid>
    </Grid>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
  }
}

DashboardUsuarioUI.propTypes = {}

export default connect(null, mapDispatchToProps)(DashboardUsuarioUI)
