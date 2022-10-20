import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import './App.css'

import Recipes from "./recipes/pages/Recipes"
import Blogs from "./blogs/pages/Blogs"
import Users from "./users/pages/Users"

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <h1>Home Page</h1>
        </Route>

        <Route path="/recipes" exact>
          <Recipes />
        </Route>

        <Route path="/blog" exact>
          <Blogs />
        </Route>

        <Route path="/users" exact>
          <Users />
        </Route>

        <Redirect to="/" />

      </Switch>
    </Router>
  )
}

export default App
