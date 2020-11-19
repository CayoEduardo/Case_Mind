import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  makeStyles,
  Radio,
} from '@material-ui/core'

import { connect } from 'react-redux'

const useStyles = makeStyles({ acesso: { color: 'white' } })

const Acesso = ({ cardUsuario, onChange, formData }) => {
  const classes = useStyles()
  return (
    <FormControl className={classes.acesso} component='fieldset'>
      <h2 className={classes.acesso}>Acesso</h2>
      <RadioGroup
        value={formData.acesso}
        className={classes.acesso}
        aria-label='Acesso'
        name='Acesso'
      >
        <FormControlLabel
          value={999}
          control={<Radio className={classes.acesso} />}
          label='Admin'
        />
        <FormControlLabel
          value={1}
          control={<Radio className={classes.acesso} />}
          label='Usuario'
        />
        <FormControlLabel
          value={0}
          control={<Radio className={classes.acesso} />}
          label='Sem acesso'
        />
      </RadioGroup>
    </FormControl>
  )
}

const mapStateToProps = (state) => {
  return {
    cardUsuario: state.cardUsuario,
  }
}

export default connect(mapStateToProps)(Acesso)
