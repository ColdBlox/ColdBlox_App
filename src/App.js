import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './containers/HomePage'
import RecordsPage from './containers/RecordsPage'

import BottomNavigationBar from './components/BottomNavigationBar'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>

      <Route exact path="/" component={HomePage}/>
      <Route path="/records" component={RecordsPage}/>
      <BottomNavigationBar />
    </div>

  </Router>
)
export default BasicExample