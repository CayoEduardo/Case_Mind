import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  imagem: { width: '300px', height: '300px' },
})

const Avatar = ({ image }) => {
  const classes = useStyles()
  return <img className={classes.imagem} src={image} alt='User image' />
}

Avatar.propTypes = {}

export default Avatar
