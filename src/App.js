import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from 'pages/home/home'
// import NotFound from 'pages/notFound/notFound'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={ Home }/>
    </div>
  </Router>
)

export default App
