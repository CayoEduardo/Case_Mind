import React from 'react'

import { makeStyles, FormControl, TextField } from '@material-ui/core'

const useStyles = makeStyles({
  margin: {
    marginBottom: '10px',
  },
  textField: {
    width: '300px',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  alignLeft: { textAlign: 'left' },
})

const FormField = ({ fieldTitle, fieldName, fieldValue, onChange }) => {
  const classes = useStyles()
  console.log(fieldValue)
  return (
    <FormControl className={classes.margin}>
      <p className={`${classes.alignLeft} ${classes.margin}`}>{fieldTitle}</p>
      <TextField
        onChange={(e) => onChange(e)}
        value={fieldValue}
        name={fieldName}
        className={classes.textField}
        variant='outlined'
      />
    </FormControl>
  )
}

export default FormField
