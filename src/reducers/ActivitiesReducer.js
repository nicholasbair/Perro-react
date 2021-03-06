import {
  FETCH_ACTIVITY_TYPES_SUCCESS,
  FETCH_DOGS_SUCCESS,
  OPEN_ACTIVITY_MODAL,
  CLOSE_ACTIVITY_MODAL,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_ITEM_SUCCESS,
} from '../actions/types';

import INITIAL_STATE from '../INITIAL_STATE';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_ACTIVITY_MODAL:
      return Object.assign({}, state, {
        activityModal: {
          show: true,
          activityType: action.payload.activityType,
          formData: action.payload.formData,
          formType: action.payload.formType
        }
      });
    case CLOSE_ACTIVITY_MODAL:
      return Object.assign({}, state, {
        activityModal: {
          show: false,
          activityType: null,
          formData: null,
          formType: null
        }
      });
    case FETCH_ACTIVITY_TYPES_SUCCESS:
      return Object.assign({}, state, {
        activityTypes: action.payload
      });
    case FETCH_DOGS_SUCCESS:
      return Object.assign({}, state, {
        dogs: action.payload
      });
    case FETCH_HISTORY_SUCCESS:
      return Object.assign({}, state, {
        history: action.payload
      });
    default:
      return state;
  }
}
