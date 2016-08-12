import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { homeClick } from '../../actions/homeClick.jsx';

import PageHeader from '../components/PageHeader.jsx'
import PageBody from '../components/PageBody.jsx'


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-view container">
        
        <PageHeader className="home" title="Home" subtitle="click the button" />
    
        <PageBody className="home">
          
          <button className="btn btn-large blue-grey darken-1 blue-grey-text text-lighten-4" 
                  onClick={ (e) => this.props.homeClick() }>
            Pressed { this.props.clicks } times!
          </button>
          
        </PageBody>
        
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ homeClick }, dispatch);
const mapStateToProps = (state,props) => ({ clicks: state.clicks.home });


export default connect(mapStateToProps, mapDispatchToProps)(Home)