import { FETCH_HISTORY } from '../actions/index';

const INITIAL_STATE = {
  all: [
    {
      id: 1,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 20,
      notes: ''
    },
    {
      id: 2,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 20,
      notes: ''
    },
    {
      id: 3,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 20,
      notes: ''
    }
  ]
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HISTORY:
      return { ...state};
      break;
    default:
      return state;
  }
}
