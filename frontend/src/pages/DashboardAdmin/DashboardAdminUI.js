import React from 'react'
import background from '../../assets/Fundo.png'
import Navbar from '../../components/Navbar'

import {
  Grid,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core'

import Board from './Board'
import UserList from './UserList'
const useStyles = makeStyles({
  container: {
    background: `url(${background})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '700px',
  },
})

const DashboardAdminUI = ({
  onChange,
  onSubmit,
  formData,
  setFormData,
  open,
  setOpen,
}) => {
  const classes = useStyles()
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle id='alert-dialog-title'>
          {'Atualização realizada com sucesso!'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Os dados foram atualizados!
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Navbar titulo='Dashboard - Admin' logged={true} />
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={3} className={classes.centered}>
            <UserList setFormData={setFormData} />
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
      </Grid>
    </>
  )
}

export default DashboardAdminUI
