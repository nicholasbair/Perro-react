import { FETCH_ACTIVITIES, OPEN_ACTIVITY_MODAL, CLOSE_ACTIVITY_MODAL } from '../actions/index';

const INITIAL_STATE = {
  all: [
    {
      id: 1,
      name: 'walk'
    },
    {
      id: 2,
      name: 'run'
    },
    {
      id: 3,
      name: 'park'
    },
    {
      id: 4,
      name: 'vet'
    }
  ],
  showActivityModal: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_ACTIVITY_MODAL:
      return { ...state, showActivityModal: true };
      break;
    case CLOSE_ACTIVITY_MODAL:
      return { ...state, showActivityModal: false };
      break;
    case FETCH_ACTIVITIES:
      return { ...state };
      break;
    default:
      return state;
  }
}
