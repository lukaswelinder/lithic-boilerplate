import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../views/Main.jsx'
import HomeContainer from '../views/containers/HomeContainer.jsx'
import AboutContainer from '../views/containers/AboutContainer.jsx'

export default (
<Route path="/" component={ Main }>
  <IndexRoute component={ HomeContainer } />
  <Route path="about" component={ AboutContainer } />
</Route>
)
