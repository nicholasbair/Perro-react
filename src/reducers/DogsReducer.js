import {
  FETCH_DOGS_SUCCESS,
  OPEN_DOG_MODAL,
  CLOSE_DOG_MODAL
} from '../actions/types';

import INITIAL_STATE from '../INITIAL_STATE';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_DOG_MODAL:
      return Object.assign({}, state, {
        dogModal: {
          show: true,
          formData: action.payload.formData,
          formType: action.payload.formType
        }
      });
    case CLOSE_DOG_MODAL:
      return Object.assign({}, state, {
        dogModal: {
          show: false,
          formData: null,
          formType: null
        }
      });
    // case FETCH_DOGS_SUCCESS:
    //   return Object.assign({}, state, {
    //     dogs: action.payload
    //   });
    default:
      return state;
  }
}
