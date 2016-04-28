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
