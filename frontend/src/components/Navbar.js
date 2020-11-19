import React from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { reset } from '../redux'
import { Link } from 'react-router-dom'
import LoggedIn from './LoggedIn'

const useStyles = makeStyles({
  appbar: {
    backgroundColor: '#008891',
  },
  title: {
    marginLeft: '50px',
  },
  logout: {
    color: '#e7e7e7',
    textDecoration: 'none',
    cursor: 'pointer',
    margin: '0 30px',
  },
})
const Navbar = ({ titulo, reset, logged }) => {
  const classes = useStyles()
  return (
    <AppBar position='static' className={classes.appbar}>
      <Toolbar variant='dense'>
        <h1 className={classes.title}>{titulo}</h1>
        <div style={{ flexGrow: 1 }} />
        {logged ? (
          <>
            <Link className={classes.logout} to='/' onClick={() => reset()}>
              Sair
            </Link>
            <LoggedIn />
          </>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
