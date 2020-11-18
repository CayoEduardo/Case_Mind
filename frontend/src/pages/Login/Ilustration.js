import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../assets/Ilustration.png'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  ilustration: {
    maxWidth: '100%',
  },
})

const Ilustration = (props) => {
  const classes = useStyles()
  return <img className={classes.ilustration} src={Image} alt='Bem vindo!' />
}

Ilustration.propTypes = {}

export default Ilustration
