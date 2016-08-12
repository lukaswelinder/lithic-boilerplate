import React from 'react'

class PageBody extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row page-body">
        <div className="col s10 offset-s1 m8 offset-m2 home-view-body-content">
          { this.props.children }
        </div>
      </div>
    );
  }

}

export default PageBody