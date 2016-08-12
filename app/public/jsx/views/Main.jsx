import React from 'react'

import NavBar from './components/NavBar.jsx'
import pages from '../routes/pages.jsx'

const Main = (props) => (
  <div className="main-body">
    <NavBar pages={ pages } />
    {props.children}
  </div>
);

export default Main