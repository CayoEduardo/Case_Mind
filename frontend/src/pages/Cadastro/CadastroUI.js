import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import Board from './Board'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
  },
  tittle: { marginLeft: '50px' },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const CadastroUI = ({ onChange, onSubmit, formData, setFormData }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      {/* <Grid item xs={12} style={{ padding: '5px' }}>
        <h1 className={classes.tittle}>Cadastro</h1>
      </Grid> */}
      <Grid item xs={8} className={classes.centered}>
        <Board
          setFormData={setFormData}
          onChange={onChange}
          onSubmit={onSubmit}
          formData={formData}
        />
      </Grid>
    </Grid>
  )
}

CadastroUI.propTypes = {}

export default CadastroUI
