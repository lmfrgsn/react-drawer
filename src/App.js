import Dashboard from './pages/Dashboard'
import Drawer from './components/Drawer'
import { Switch, Route, useLocation } from 'react-router-dom'

import './scss/App.scss'

function App() {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
    <div className="App">
      <Switch location={background || location}>
        <Route path="/" exact>
          <Dashboard />
        </Route>
      </Switch>
      
      <Route path="/new-membership" children={<Drawer />} />
    </div>
  )
}

export default App
