import {
  FETCH_ACTIVITIES,
  FETCH_DOGS,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_HISTORY,
  POST_ACTIVITY
} from '../actions/index';

const INITIAL_STATE = {
  activityTypes: [
    {
      id: 1,
      type: 'walk'
    },
    {
      id: 2,
      type: 'run'
    },
    {
      id: 3,
      type: 'park'
    },
    {
      id: 4,
      type: 'vet'
    }
  ],
  dogs: [
    {
      id: 1,
      name: 'Rocko',
      tagline: 'Badass Rescue',
      img:  'rocko.jpeg'
    },
    {
      id: 2,
      name: 'Sasha',
      tagline: 'Very Viszla',
      img: 'sasha.png'
    }
  ],
  history: [
    {
      id: 1,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 20,
      notes: ''
    },
    {
      id: 2,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 15,
      notes: ''
    },
    {
      id: 3,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 10,
      notes: ''
    },
    {
      id: 4,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 30,
      notes: ''
    },
    {
      id: 5,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 25,
      notes: ''
    },
    {
      id: 6,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 60,
      notes: ''
    },
    {
      id: 7,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 45,
      notes: ''
    },
    {
      id: 8,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 20,
      notes: ''
    },
    {
      id: 9,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 25,
      notes: ''
    },
    {
      id: 10,
      type: 'walk',
      participants: ['Nick', 'Rocko'],
      assessment: 'good',
      duration: 30,
      notes: ''
    }
  ],
  showModal: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, showModal: true };
      break;
    case CLOSE_MODAL:
      return { ...state, showModal: false };
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
      return { ...state };
      break;
    default:
      return state;
  }
}
