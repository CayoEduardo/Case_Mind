import React from 'react'
import PropTypes from 'prop-types'

import { Paper, makeStyles } from '@material-ui/core'
import UserCard from './UserCard'

const useStyles = makeStyles({
  wrapper: {
    minHeight: '700px',
    maxHeight: '700px',
    overflow: 'auto',
    backgroundColor: '#022349',
  },
})

const UserList = (props) => {
  const users = [
    {
      Nome: 'Cayo Eduardo',
      Acesso: 1,
      Email: 'silveira.cayo@email.com',
    },
    {
      Nome: 'Natália',
      Acesso: 1,
      Email: 'email@email.com',
    },
    {
      Nome: 'C',
      Acesso: 1,
      Email: 'C@email.com',
    },
  ]
  const classes = useStyles()
  return (
    <Paper className={classes.wrapper}>
      {users.map((user) => (
        <UserCard nome={user.Nome} email={user.Email} acesso={user.Acesso} />
      ))}
    </Paper>
  )
}

UserList.propTypes = {}

export default UserList
