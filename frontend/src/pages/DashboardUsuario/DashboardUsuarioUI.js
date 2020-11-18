import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import Board from './Board'
import { Grid, makeStyles } from '@material-ui/core'

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
const DashboardUsuarioUI = ({ onChange, onSubmit, formData }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} style={{ padding: '5px' }}>
        <h1 className={classes.tittle}>Dashboard - Usuário</h1>
      </Grid>
      <Grid item xs={8}>
        <Board onChange={onChange} onSubmit={onSubmit} formData={formData} />
      </Grid>
    </Grid>
  )
}

DashboardUsuarioUI.propTypes = {}

export default DashboardUsuarioUI
