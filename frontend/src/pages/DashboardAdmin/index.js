import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LoggedIn from '../../components/LoggedIn'
import DashboardAdminUI from './DashboardAdminUI'
import { atualizaUsuario, getUsuarios } from '../../services/api'
import { connect } from 'react-redux'
import { carregaUsuarios, mudaUsuario } from '../../redux/'
import Spinner from '../../components/Spinner'

const DashboardAdmin = ({
  usuario,
  carregaUsuarios,
  mudaUsuario,
  cardUsuario,
}) => {
  const [loading, setloading] = useState(true)
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState(null)
  useEffect(() => {
    const getU = async () => {
      try {
        const res = await getUsuarios(usuario.acesso)
        carregaUsuarios(res.data)
        mudaUsuario(usuario)
        setFormData(usuario)
        setloading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getU()
  }, [mudaUsuario])

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (formData) => {
    try {
      const res = await atualizaUsuario(formData)
      setOpen(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {loading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner />
        </div>
      ) : (
        <DashboardAdminUI
          open={open}
          setOpen={setOpen}
          onChange={onChange}
          onSubmit={onSubmit}
          setFormData={setFormData}
          formData={formData}
        />
      )}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    usuario: state.usuario,
    usuarios: state.usuarios,
    cardUsuario: state.cardUsuario,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    carregaUsuarios: (usuarios) => dispatch(carregaUsuarios(usuarios)),
    mudaUsuario: (usuario) => dispatch(mudaUsuario(usuario)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAdmin)
