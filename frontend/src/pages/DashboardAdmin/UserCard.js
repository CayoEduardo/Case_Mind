import React, { useEffect, useState } from 'react'

import { Paper, Grid, makeStyles } from '@material-ui/core'
import Avatar from './Avatar'
import { connect } from 'react-redux'
import { mudaUsuario } from '../../redux'

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

const UserCard = ({ user, mudaUsuario }) => {
  const classes = useStyles()

  return (
    <>
      <Paper
        onClick={() => {
          mudaUsuario(user)
        }}
        className={classes.wrapper}
        elevation={1}
      >
        <Grid container>
          <Grid item xs={3} className={classes.avatar}>
            <Avatar />
          </Grid>
          <Grid item xs={9} className={classes.infos}>
            {/* <p className={classes.text}>{user.nome}</p>
            <p className={classes.text}>{user.email}</p>
            <p className={classes.text}>Acesso:{user.acesso}</p> */}
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    mudaUsuario: (usuario) => dispatch(mudaUsuario(usuario)),
  }
}

export default connect(null, mapDispatchToProps)(UserCard)
