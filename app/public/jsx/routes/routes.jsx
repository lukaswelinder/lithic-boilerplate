import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../views/Main.jsx'
import Home from '../views/containers/HomeContainer.jsx'

export default (
<Route path="/" component={ Main }>
  <IndexRoute component={ Home } />
</Route>
)
