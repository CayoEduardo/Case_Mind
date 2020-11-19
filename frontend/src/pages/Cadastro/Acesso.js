import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  makeStyles,
  Radio,
} from '@material-ui/core'

const useStyles = makeStyles({ acesso: { color: 'white' } })

const Acesso = ({ onChange, formData }) => {
  const classes = useStyles()
  const [val, setVal] = useState(formData.acesso)
  return (
    <FormControl className={classes.acesso} component='fieldset'>
      <h2 className={classes.acesso}>Acesso</h2>
      <RadioGroup
        className={classes.acesso}
        value={val}
        aria-label='Acesso'
        name='acesso'
      >
        <FormControlLabel
          onChange={(event) => {
            onChange(event)
            setVal(999)
            // console.log(formData)
          }}
          value={999}
          control={<Radio className={classes.acesso} />}
          label='Admin'
        />
        <FormControlLabel
          value={1}
          control={<Radio className={classes.acesso} />}
          label='Usuario'
          onChange={(event) => {
            setVal(1)
            onChange(event)
          }}
        />
        <FormControlLabel
          value={0}
          control={<Radio className={classes.acesso} />}
          label='Sem acesso'
          onChange={(event) => {
            setVal(0)
            onChange(event)
          }}
        />
      </RadioGroup>
    </FormControl>
  )
}

Acesso.propTypes = {}

export default Acesso
