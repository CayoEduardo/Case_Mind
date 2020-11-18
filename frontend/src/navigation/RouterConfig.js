import React from 'react'
import { Switch, Route } from 'react-router-dom'

//paginas
import Cadastro from '../pages/Cadastro'
import DashboardAdmin from '../pages/DashboardAdmin'
import DashboardUsuario from '../pages/DashboardUsuario'
import Login from '../pages/Login'

const RouterConfig = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/cadastro' exact component={Cadastro} />
      <Route path='/dashboardadmin' exact component={DashboardAdmin} />
      <Route path='/dashboardusuario' exact component={DashboardUsuario} />
    </Switch>
  )
}

export default RouterConfig
