import {
  FETCH_ACTIVITIES,
  FETCH_DOGS,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_HISTORY,
  POST_ACTIVITY
} from '../actions/index';

import INITIAL_STATE from '../mock';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        modal: {
          show: true,
          type: action.payload
        }
      });
      break;
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modal: {
          show: false,
          type: null
        }
      });
      break;
    case FETCH_ACTIVITIES:
      return { ...state };
      break;
    case FETCH_DOGS:
      return { ...state };
      break;
    case FETCH_HISTORY:
      return { ...state };
      break;
    case POST_ACTIVITY:
      return Object.assign({}, state, {
        showModal: false,
        history: [
          action.payload,
          ...state.history
        ]
      });
      break;
    default:
      return state;
  }
}
