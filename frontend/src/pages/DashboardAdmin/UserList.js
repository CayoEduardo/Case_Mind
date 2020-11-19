import React from 'react'
import PropTypes from 'prop-types'

import { Paper, makeStyles } from '@material-ui/core'
import UserCard from './UserCard'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  wrapper: {
    minHeight: '700px',
    maxHeight: '700px',
    overflow: 'auto',
    backgroundColor: '#022349',
  },
})

const UserList = ({ usuarios }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.wrapper}>
      {usuarios.map((user) => (
        <UserCard nome={user.nome} email={user.email} acesso={user.acesso} />
      ))}
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return {
    usuarios: state.usuarios,
  }
}

UserList.propTypes = {}

export default connect(mapStateToProps)(UserList)
