import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  imagem: { borderRadius: '50%', width: '50px', height: '50px' },
})

const Avatar = (props) => {
  const classes = useStyles()
  return (
    <img
      className={classes.imagem}
      src='https://veja.abril.com.br/wp-content/uploads/2019/12/amazonia-floresta-coraccca7ao.jpg.jpg'
      alt=''
    />
  )
}

Avatar.propTypes = {}

export default Avatar
