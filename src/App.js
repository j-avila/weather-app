import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { WelcomePage } from "./pages/WelcomePage"
import { MainPage } from "./pages/MainPage"
import { CityPage } from "./pages/CityPage"
import { Grid } from "@material-ui/core"
import NotFound from "./pages/notFound"

const baseurl = process.env.REACT_APP_BASEURL

function App() {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Router>
          <Switch>
            <Route path={baseurl} component={WelcomePage} exact />
            <Route path={`${baseurl}/main`} component={MainPage} />
            <Route path={`${baseurl}/city`} component={CityPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Grid>
    </Grid>
  )
}

export default App
