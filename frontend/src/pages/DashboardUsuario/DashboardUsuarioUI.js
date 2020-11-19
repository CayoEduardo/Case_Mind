import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import Board from './Board'
import Navbar from '../../components/Navbar'
import { Grid, makeStyles } from '@material-ui/core'
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

const DashboardUsuarioUI = ({ onChange, onSubmit, formData, reset }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Navbar titulo='Dashboard - Usuário' logged={true} />
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
