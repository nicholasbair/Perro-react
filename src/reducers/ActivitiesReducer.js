import { OPEN_ACTIVITY } from '../actions/index';

const INITIAL_STATE = {
  activity: 0,
  showModal: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_ACTIVITY:
      return { ...state, showModal: true };
      break;
    default:
      return state;
  }
}
