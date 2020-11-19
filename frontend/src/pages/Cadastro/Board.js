import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import FormContainer from './FormContainer'
import Acesso from './Acesso'
import Avatar from './Avatar'
import { Paper, Grid, makeStyles, Button } from '@material-ui/core'

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
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
  leftSideWrapper: {
    padding: '50px',
    display: 'flex',
    justifyContent: 'center',
  },
  RightSideWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '50px',
  },
  formControlMargin: {
    margin: '5px 0',
  },
  inputLabel: {
    marginBottom: '10px',
  },
  cadastroText: {
    textAlign: 'left',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#e7e7e7',
  },
})

const Board = ({ onChange, onSubmit, formData, setFormData }) => {
  const classes = useStyles()
  const [image, setImage] = useState(
    'https://www.svgrepo.com/show/122119/user-image-with-black-background.svg'
  )

  const imageHandler = (event) => {
    let file = event.target.files[0]
    URL.createObjectURL(file)
    setImage(URL.createObjectURL(file))
  }

  useEffect(() => {
    console.log(image)
  }, [image])

  return (
    <Paper className={classes.card} elevation={3}>
      <form>
        <Grid container>
          <Grid item container className={classes.leftSideWrapper} xs={6}>
            <Grid item xs={10} container>
              <Grid item xs={12}>
                <Avatar image={image} />
              </Grid>
              <Grid item xs={12}>
                {/* <Button className={classes.imagemButton} variant='contained'>
                  <b>
                    <p>Selecionar avatar</p>
                  </b>
                </Button> */}
                <input
                  type='file'
                  accept='image/*'
                  onChange={(e) => {
                    imageHandler(e)
                    setFormData({ ...formData, imgPath: image })
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Acesso onChange={onChange} formData={formData} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} className={classes.RightSideWrapper}>
            <FormContainer
              formData={formData}
              onChange={onChange}
              onSubmit={onSubmit}
            />
            <Link className={classes.cadastroText} to='/'>
              Já possui cadastro?
            </Link>
            <Button
              onClick={() => onSubmit(formData)}
              variant='contained'
              className={classes.button}
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

Board.propTypes = {}

export default Board
