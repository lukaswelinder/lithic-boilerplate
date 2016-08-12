import React from 'react'

class PageHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row page-header">
        <div className="col s12 m10 offset-m1 home-view-header-content">
          { this.props.children ? this.props.children : '' }
          { this.props.title ? (<h3>{ this.props.title }</h3>) : '' }
          { this.props.subtitle ? (<h5>{ this.props.subtitle }</h5>) : '' }
        </div>
      </div>
    );
  }

}

export default PageHeader