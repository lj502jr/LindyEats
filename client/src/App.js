import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import Recipes from "./recipes/pages/Recipes"
import Blogs from "./blogs/pages/Blogs"
import Users from "./users/pages/Users"
import MainNavigation from './shared/components/navigation/MainNavigation'
import UserComments from './users/pages/UserComments'
import './App.css'

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
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

          <Route path='/:userId/comments' exact>
            <UserComments />
          </Route>

          <Route path="/auth" exact>
            <h2>Auth Works</h2>
          </Route>

          <Redirect to="/" />

        </Switch>
      </main>

    </Router>
  )
}

export default App
