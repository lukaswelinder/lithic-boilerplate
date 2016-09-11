import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { aboutClick } from '../../actions/aboutClick.jsx';

import PageHeader from '../components/PageHeader.jsx'
import PageBody from '../components/PageBody.jsx'


class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-view container">

          <PageHeader className="about" title="About" subtitle="click the button" />

          <PageBody className="about">

            <div className="btn btn-large blue-grey darken-1 blue-grey-text text-lighten-4"
                    onClick={ (e) => this.props.aboutClick() }>
              Pressed { this.props.clicks } times!
            </div>

          </PageBody>

      </div>
    );
  }

}


const mapDispatchToProps = (dispatch) => bindActionCreators({ aboutClick }, dispatch);
const mapStateToProps = (state,props) => ({ clicks: state.clicks.about });


export default connect(mapStateToProps, mapDispatchToProps)(About)