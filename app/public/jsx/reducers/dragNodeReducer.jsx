import { DRAG_NODE } from '../actions/dragNode.jsx'

const INITIAL_STATE = { node: null };

const dragNodeReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case DRAG_NODE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default dragNodeReducer