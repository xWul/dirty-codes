import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
// PAGES
const App = lazy(() => import('./App'))
const Movies = lazy(() => import('./pages/Movies'))

export default function RouterApp() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/movies" component={Movies} />
        </Switch>
      </Suspense>
    </Router>
  )
}
