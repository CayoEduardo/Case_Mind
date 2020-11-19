import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    height: '80px',
  },
  texto: {
    margin: '0 10px',
  },
  imagem: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  },
})

const LoggedIn = ({ usuario }) => {
  const { nome } = usuario
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <p className={classes.texto}>{`Olá, ${nome}`}</p>
      <img
        className={classes.imagem}
        src='https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image.jpg'
      ></img>
    </div>
  )
}

LoggedIn.propTypes = {}

const mapStateToProps = (state) => {
  return {
    usuario: state.usuario,
  }
}

export default connect(mapStateToProps)(LoggedIn)
