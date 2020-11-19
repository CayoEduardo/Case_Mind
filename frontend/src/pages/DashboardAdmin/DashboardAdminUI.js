import React from 'react'
import background from '../../assets/Fundo.png'
import Navbar from './Navbar'

import { Grid, makeStyles } from '@material-ui/core'

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

const DashboardAdminUI = ({ onChange, onSubmit, formData }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Navbar titulo='Dashboard - Admin' />
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={3} className={classes.centered}>
          <UserList />
        </Grid>
        <Grid item xs={8} className={classes.centered}>
          <Board onChange={onChange} onSubmit={onSubmit} formData={formData} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashboardAdminUI
