import { FETCH_ACTIVITIES, OPEN_ACTIVITY } from '../actions/index';

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
    case OPEN_ACTIVITY:
      return { ...state, showActivityModal: true };
      break;
    case FETCH_ACTIVITIES:
      return { ...state };
      break;
    default:
      return state;
  }
}
