import React from 'react'

import { Paper, Grid, makeStyles } from '@material-ui/core'
import Avatar from './Avatar'

const useStyles = makeStyles({
  wrapper: {
    minWidth: '300px',
    height: '80px',
    backgroundColor: '#e7e7e7',
    margin: '10px 0',
    padding: '5px',
    borderRadius: 0,
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infos: { padding: '0 5px' },
  text: { color: 'rgba(0,0,0,0.7)', fontSize: '16px' },
})

const UserCard = ({ nome, email, acesso }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.wrapper} elevation={1}>
      <Grid container>
        <Grid item xs={3} className={classes.avatar}>
          <Avatar />
        </Grid>
        <Grid item xs={9} className={classes.infos}>
          <p className={classes.text}>{nome}</p>
          <p className={classes.text}>{email}</p>
          <p className={classes.text}>Acesso:{acesso}</p>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default UserCard
