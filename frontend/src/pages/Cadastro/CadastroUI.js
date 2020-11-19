import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import Board from './Board'
import { Grid, makeStyles } from '@material-ui/core'
import Navbar from '../../components/Navbar'

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
    // alignItems: 'center',
    maxHeight: '700px',
  },
})
const CadastroUI = ({ onChange, onSubmit, formData, setFormData }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Navbar titulo='Cadastro' logged={false} />
      </Grid>

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
