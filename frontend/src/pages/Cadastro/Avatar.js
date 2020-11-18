import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  imagem: { width: '100%', height: '100%' },
})

const Avatar = (props) => {
  const classes = useStyles()
  return (
    <img
      className={classes.imagem}
      src='https://s2.glbimg.com/WpmBvZZRHmk1Y3hPwq4KHVNuXbA=/e.glbimg.com/og/ed/f/original/2018/12/18/winner_nian-wang.jpg'
      alt=''
    />
  )
}

Avatar.propTypes = {}

export default Avatar
