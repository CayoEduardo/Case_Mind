import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LoggedIn from '../../components/LoggedIn'
import DashboardAdminUI from './DashboardAdminUI'

const DashboardAdmin = (props) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: '',
  })
  return <DashboardAdminUI />
}

DashboardAdmin.propTypes = {}

export default DashboardAdmin
