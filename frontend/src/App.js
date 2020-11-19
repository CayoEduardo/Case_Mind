import Login from './pages/Login/'
import { CssBaseline } from '@material-ui/core'

//Router
import { BrowserRouter } from 'react-router-dom'
import RouterConfig from './navigation/RouterConfig'

import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
