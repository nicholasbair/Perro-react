import {
  FETCH_ACTIVITY_TYPES_SUCCESS,
  FETCH_DOGS_SUCCESS,
  OPEN_MODAL,
  OPEN_MODAL_HISTORY,
  CLOSE_MODAL,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_ITEM,
  POST_ACTIVITY
} from '../actions/types';

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
    case OPEN_MODAL_HISTORY:
      return Object.assign({}, state, {
        modal: {
          show: true
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
    case FETCH_ACTIVITY_TYPES_SUCCESS:
      return Object.assign({}, state, {
        activityTypes: action.payload
      });
      break;
    case FETCH_DOGS_SUCCESS:
      return Object.assign({}, state, {
        dogs: action.payload
      });
      break;
    case FETCH_HISTORY_SUCCESS:
      return Object.assign({}, state, {
        history: action.payload
      });
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
