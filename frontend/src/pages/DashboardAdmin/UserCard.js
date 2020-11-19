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
    cursor: 'pointer',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infos: { padding: '0 5px' },
  text: { color: 'rgba(0,0,0,0.7)', fontSize: '16px' },
})

const UserCard = ({ user, mudaUsuario, cardUsuario }) => {
  const classes = useStyles()
  const { nome, email, acesso } = user
  return (
    <>
      <Paper
        onClick={() => {
          mudaUsuario(user)
          console.log(cardUsuario)
          console.log('oi')
        }}
        className={classes.wrapper}
        elevation={1}
      >
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
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cardUsuario: state.cardUsuario,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mudaUsuario: (usuario) => dispatch(mudaUsuario(usuario)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
