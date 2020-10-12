import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePage'
import { MainPage } from './pages/MainPage'
import { CityPage } from './pages/CityPage'
import { Grid } from '@material-ui/core'
import NotFound from './pages/notFound'

function App() {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Router>
          <Switch>
            <Route path='/' component={WelcomePage} exact />
            <Route path='/main' component={MainPage} />
            <Route path='/city' component={CityPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Grid>
    </Grid>
  )
}

export default App
