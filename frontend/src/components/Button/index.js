import React from 'react'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    borderRadius: 0,
    backgroundColor: '#008891',
    width: '300px',
    height: '50px',
    color: '#e7e7e7',
    margin: '30px 0',
  },
})

const Button = ({ onClick, data, ButtonText }) => {
  const classes = useStyles()
  return (
    <Button
      onClick={() => onClick(data)}
      className={classes.button}
      variant='outlined'
    >
      <b>{ButtonText}</b>
    </Button>
  )
}

export default Button
