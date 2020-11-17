import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import Board from './Board'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
  },
})
const Cadastro = (props) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} style={{ padding: '15px' }}>
        <h1 style={{ marginLeft: '50px' }}>Cadastro</h1>
      </Grid>
      <Grid item xs={8} style={{ padding: '0px 90px 90px 90px' }}>
        <div>
          <Board />
        </div>
      </Grid>
    </Grid>
  )
}

Cadastro.propTypes = {}

export default Cadastro
