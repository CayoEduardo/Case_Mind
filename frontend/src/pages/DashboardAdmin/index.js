import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import LoggedIn from '../../components/LoggedIn'

import {
  Grid,
  makeStyles,
  Paper,
  FormControl,
  TextField,
  Button,
} from '@material-ui/core'

import Board from './Board'
import UserList from './UserList'
const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
  },
})

const DashboardAdmin = (props) => {
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
      <Grid
        item
        container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        xs={12}
      >
        <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <UserList />
        </Grid>
        <Grid item xs={7}>
          <Board />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Grid>
  )
}

DashboardAdmin.propTypes = {}

export default DashboardAdmin
