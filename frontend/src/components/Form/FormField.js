import React from 'react'

import { makeStyles, FormControl, TextField } from '@material-ui/core'

const useStyles = makeStyles({
  wrapper: {
    marginBottom: '10px',
  },
  textField: {
    // width: '70%',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  alignLeft: { textAlign: 'left', width: '60%' },
})

const FormField = ({ fieldTitle, fieldName, fieldValue, onChange }) => {
  const classes = useStyles()

  return (
    <FormControl className={classes.wrapper}>
      <p className={`${classes.alignLeft} ${classes.margin}`}>{fieldTitle}</p>
      <TextField
        onChange={(e) => {
          console.log(e)
          onChange(e)
        }}
        value={fieldValue}
        name={fieldName}
        className={classes.textField}
        variant='outlined'
      />
    </FormControl>
  )
}

export default FormField
