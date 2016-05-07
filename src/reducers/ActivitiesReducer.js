import {
  FETCH_ACTIVITY_TYPES_SUCCESS,
  FETCH_DOGS_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_ITEM_SUCCESS,
} from '../actions/types';

import INITIAL_STATE from '../mock';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_MODAL:
      console.log(action.payload);
      return Object.assign({}, state, {
        modal: {
          show: true,
          activityType: action.payload.activityType,
          formData: action.payload.formData
        }
      });
      break;
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modal: {
          show: false,
          activityType: null,
          formData: null
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
    default:
      return state;
  }
}
