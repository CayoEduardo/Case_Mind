import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormContainer from './FormContainer'
import {
  Paper,
  Grid,
  makeStyles,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    backgroundColor: '#022349',
  },
  imagem: { width: '100%', height: '100%' },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: '5px',
    height: '80%',
  },
  imagemButton: {
    borderRadius: 0,
    backgroundColor: '#008891',
    color: '#e7e7e7',
    width: '100%',
    marginTop: '20px',
    height: '40px',
  },
  button: {
    borderRadius: 0,
    backgroundColor: '#008891',
    color: '#e7e7e7',
    marginTop: '100px',
    width: '100%',
    padding: '10px',
  },
  leftSideWrapper: {
    padding: '70px',
    display: 'flex',
    justifyContent: 'center',
  },
  RightSideWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '70px',
  },
  formControlMargin: {
    margin: '5px 0',
  },
  inputLabel: {
    marginBottom: '10px',
  },
  acesso: { color: 'white' },
})

const Board = ({ onChange, onSubmit, formData }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.card} elevation={3}>
      <form>
        <Grid container>
          <Grid
            item
            className={classes.leftSideWrapper}
            xs={6}
            style={{ marginTop: '42px' }}
            container
          >
            <Grid item xs={10} container>
              <Grid item xs={12}>
                <img
                  className={classes.imagem}
                  src='https://s2.glbimg.com/WpmBvZZRHmk1Y3hPwq4KHVNuXbA=/e.glbimg.com/og/ed/f/original/2018/12/18/winner_nian-wang.jpg'
                  alt=''
                />
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.imagemButton} variant='contained'>
                  <b>
                    <p>Imagem</p>
                  </b>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.acesso} component='fieldset'>
                  <h2 className={classes.acesso}>Acesso</h2>
                  <RadioGroup
                    className={classes.acesso}
                    aria-label='Acesso'
                    name='Acesso'
                  >
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
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} className={classes.RightSideWrapper}>
            <FormContainer
              onChange={onChange}
              onSubmit={onSubmit}
              formData={formData}
            />
            <Button
              onClick={() => onSubmit(formData)}
              variant='contained'
              className={classes.button}
            >
              <b>Atualizar</b>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

Board.propTypes = {}

export default Board
