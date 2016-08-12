import React from 'react'
import { Link, IndexLink } from 'react-router'

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  renderLinks() {
    return this.props.pages.map((page) => (
      <li key={ page.name }>
        <IndexLink to={ page.path } className="blue-grey-text text-lighten-4" activeClassName="active">
          { page.name }
        </IndexLink>
      </li>
    ));
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-wrapper blue-grey darken-1">

          <Link to="/" className="brand-logo right blue-grey-text text-lighten-3">lithic-boilerplate</Link>

          <ul id="nav-mobile" className="left">
            { this.renderLinks() }
          </ul>

        </div>
      </nav>
    );
  }

}

export default NavBar