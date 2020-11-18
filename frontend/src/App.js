import Login from './pages/Login/'
import { CssBaseline } from '@material-ui/core'

//Router
import { BrowserRouter } from 'react-router-dom'
import RouterConfig from './navigation/RouterConfig'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  )
}

export default App
