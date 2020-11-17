import Login from './pages/Login/'
import { CssBaseline } from '@material-ui/core'
import DashboardUsuario from './pages/DashboardUsuario'
import DashboardAdmin from './pages/DashboardAdmin'
import Cadastro from './pages/Cadastro'

const App = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <Cadastro />
      <DashboardUsuario />
      <DashboardAdmin />
      <Login />
    </div>
  )
}

export default App
