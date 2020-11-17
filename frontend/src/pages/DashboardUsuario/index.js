import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import Board from './Board'
import { Grid, makeStyles } from '@material-ui/core'
import LoggedIn from '../../components/LoggedIn'

const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
  },
})
const DashboardUsuario = (props) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid
        item
        container
        xs={12}
        style={{ padding: '15px', display: 'flex', alignItems: 'center' }}
      >
        <Grid item xs={6}>
          <h1 style={{ marginLeft: '50px' }}>Dashboard - Usuário</h1>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <LoggedIn />
        </Grid>
      </Grid>
      <Grid item xs={8} style={{ padding: '0px 90px 90px 90px' }}>
        <div>
          <Board />
        </div>
      </Grid>
    </Grid>
  )
}

DashboardUsuario.propTypes = {}

export default DashboardUsuario
