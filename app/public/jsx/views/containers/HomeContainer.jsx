import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { dragNode } from '../../actions/dragNode.jsx';

import Draggable from '../components/DraggableComponent.jsx'


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.node);
    return (
      <div className="home-view">
        <Draggable x={ 50 } y={ 50 } content="Hello :D"
               dragEvent={ () => this.props.dragNode() } />
      </div>
    );
  }
  
}


const mapDispatchToProps = (dispatch) => bindActionCreators({ dragNode }, dispatch);
const mapStateToProps = (state,props) => ({ node: state.tree.node });


export default connect(mapStateToProps, mapDispatchToProps)(Home)