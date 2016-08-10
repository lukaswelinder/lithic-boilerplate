import React from 'react'


class Draggable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      position: 'absolute',
      top: `${ 100 - this.props.y }%`,
      left: `${ this.props.x }%`
    };
    return (
      <div className="hello-component" 
           onDrag={ () => this.props.dragEvent() }
           style={ style }>
        { this.props.content }
      </div> 
    );
  }

}

export default Draggable