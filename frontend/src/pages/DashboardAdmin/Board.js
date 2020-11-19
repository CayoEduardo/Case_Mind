import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormContainer from './FormContainer'
import { Paper, Grid, makeStyles, Button } from '@material-ui/core'
import UserImg from './UserImg'
import Acesso from './Acesso'

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
    margin: '0 10px',
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

const Board = ({ onChange, onSubmit, formData, setFormData }) => {
  const classes = useStyles()
  const [image, setImage] = useState(formData.imgPath)

  const imageHandler = (event) => {
    let file = event.target.files[0]
    URL.createObjectURL(file)
    setImage(URL.createObjectURL(file))
  }

  return (
    <Paper className={classes.card} elevation={3}>
      <form>
        <Grid container>
          <Grid item className={classes.leftSideWrapper} xs={6} container>
            <Grid item xs={10} container>
              <Grid item xs={12}>
                <UserImg image={image} />
              </Grid>
              <Grid item xs={12}>
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
              onChange={onChange}
              onSubmit={onSubmit}
              formData={formData}
            />
            <div style={{ display: 'flex' }}>
              <Button variant='contained' className={classes.button}>
                <b>Editar</b>
              </Button>
              <Button
                onClick={() => onSubmit(formData)}
                variant='contained'
                className={classes.button}
              >
                <b>Atualizar</b>
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

Board.propTypes = {}

export default Board
