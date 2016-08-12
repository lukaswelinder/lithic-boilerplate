import { HOME_CLICK } from '../actions/homeClick.jsx'
import { ABOUT_CLICK } from '../actions/aboutClick.jsx'

const INITIAL_STATE = { home: 0, about: 0 };

const clickReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HOME_CLICK:
      return { ...state, home: ++state.home };
    case ABOUT_CLICK:
      return { ...state, about: ++state.about };
    default:
      return state;
  }
};

export default clickReducer