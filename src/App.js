import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter  } from 'react-router-dom'
import Home from './screens/HomeScreen'
import './css/App.css'

function App() {
  
  
  return (
    <>


    <Router>
        <Switch>

          <Route path="/" component={withRouter(Home)} exact index={true} />
          
        </Switch>
        
    </Router>

    
    </>
  )
}

export default App
