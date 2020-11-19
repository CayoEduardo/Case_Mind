import React, { useEffect } from 'react'
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
  useEffect(() => {}, [usuarios])

  const classes = useStyles()
  return (
    <Paper className={classes.wrapper}>
      {/* {usuarios.map((user) => (
        <UserCard user={user} />
      ))} */}
      <UserCard />
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
