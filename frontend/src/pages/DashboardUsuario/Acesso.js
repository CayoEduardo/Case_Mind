import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  makeStyles,
  Radio,
} from '@material-ui/core'

const useStyles = makeStyles({ acesso: { color: 'white' } })

const Acesso = (props) => {
  const classes = useStyles()
  return (
    <FormControl className={classes.acesso} component='fieldset'>
      <h2 className={classes.acesso}>Acesso</h2>
      <RadioGroup className={classes.acesso} aria-label='Acesso' name='Acesso'>
        <FormControlLabel
          value='Admin'
          control={<Radio className={classes.acesso} />}
          label='Admin'
        />
        <FormControlLabel
          value='Usuario'
          control={<Radio className={classes.acesso} />}
          label='Usuario'
        />
        <FormControlLabel
          value='Sem acesso'
          control={<Radio className={classes.acesso} />}
          label='Sem acesso'
        />
      </RadioGroup>
    </FormControl>
  )
}

Acesso.propTypes = {}

export default Acesso
