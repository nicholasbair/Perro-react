import {
  FETCH_ACTIVITIES,
  FETCH_DOGS,
  OPEN_ACTIVITY_MODAL,
  CLOSE_ACTIVITY_MODAL } from '../actions/index';

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
    case FETCH_DOGS:
      return { ...state };
      break;
    default:
      return state;
  }
}
