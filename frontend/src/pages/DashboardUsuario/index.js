import React from 'react'
import PropTypes from 'prop-types'
import background from '../../assets/Fundo.png'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

import {
  Grid,
  makeStyles,
  Paper,
  FormControl,
  TextField,
  Button,
} from '@material-ui/core'
const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#022349',
  },
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
})
const DashboardUsuario = (props) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} style={{ padding: '90px 0' }}>
        <Paper className={classes.card} elevation={3}>
          <form>
            <Grid container>
              <Grid
                item
                style={{
                  padding: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                xs={6}
                container
              >
                <Grid item xs={10} container style={{ width: '100%' }}>
                  <Grid item xs={12}>
                    <div
                      style={{
                        marginTop: '5px',
                        width: '100%',
                        height: 'auto',
                        backgroundColor: 'yellow',
                      }}
                    >
                      <img
                        style={{ width: '100%', height: 'auto' }}
                        src='https://s2.glbimg.com/WpmBvZZRHmk1Y3hPwq4KHVNuXbA=/e.glbimg.com/og/ed/f/original/2018/12/18/winner_nian-wang.jpg'
                        alt=''
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      className={classes.imagemButton}
                      variant='contained'
                    >
                      <b>
                        <p>Imagem</p>
                      </b>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      style={{ color: '#e7e7e7' }}
                      component='fieldset'
                    >
                      <h2 style={{ fontSize: '25px', margin: '0px' }}>
                        Acesso
                      </h2>
                      <RadioGroup
                        style={{ color: '#e7e7e7' }}
                        aria-label='gender'
                        name='gender1'
                      >
                        <FormControlLabel
                          style={{ color: '#e7e7e7' }}
                          value='Admin'
                          control={<Radio style={{ color: '#e7e7e7' }} />}
                          label='Admin'
                        />
                        <FormControlLabel
                          value='Usuario'
                          control={<Radio style={{ color: '#e7e7e7' }} />}
                          label='Usuario'
                        />
                        <FormControlLabel
                          value='Sem acesso'
                          control={<Radio style={{ color: '#e7e7e7' }} />}
                          label='Sem acesso'
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '70px',
                }}
              >
                <FormControl style={{ margin: '5px 0' }}>
                  <p style={{ marginBottom: '10px' }}>Nome</p>
                  <TextField className={classes.input} variant='outlined' />
                </FormControl>
                <FormControl style={{ margin: '5px 0' }}>
                  <p style={{ marginBottom: '10px' }}>Email</p>
                  <TextField className={classes.input} variant='outlined' />
                </FormControl>
                <FormControl style={{ margin: '5px 0' }}>
                  <p style={{ marginBottom: '10px' }}>Cpf</p>
                  <TextField className={classes.input} variant='outlined' />
                </FormControl>
                <FormControl style={{ margin: '5px 0' }}>
                  <p style={{ marginBottom: '10px' }}>Senha</p>
                  <TextField className={classes.input} variant='outlined' />
                </FormControl>
                <p>Já possui cadastro?</p>
                <Button className={classes.button} variant='contained'>
                  <b>Cadastrar</b>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

DashboardUsuario.propTypes = {}

export default DashboardUsuario
