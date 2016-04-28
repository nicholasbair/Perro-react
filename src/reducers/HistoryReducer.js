import {
  FETCH_HISTORY,
  OPEN_HISTORY_MODAL,
  CLOSE_HISTORY_MODAL } from '../actions/index';

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
  showHistoryModal: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HISTORY:
      return { ...state };
      break;
    case OPEN_HISTORY_MODAL:
      return { ...state, showHistoryModal: true };
      break;
    case CLOSE_HISTORY_MODAL:
      return { ...state, showHistoryModal: false };
      break;
    default:
      return state;
  }
}
