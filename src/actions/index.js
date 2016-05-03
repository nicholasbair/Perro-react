import {
  OPEN_MODAL,
  OPEN_MODAL_HISTORY,
  CLOSE_MODAL,
  POST_ACTIVITY,
  FETCH_HISTORY,
  FETCH_HISTORY_ITEM,
  FETCH_ACTIVITIES,
  FETCH_DOGS,
  CHANGE_AUTH
} from './types';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export function openModal(activityType) {
  return {
    type: OPEN_MODAL,
    payload: activityType
  };
}

export function openModalHistory(activityId) {
  return {
    type: OPEN_MODAL_HISTORY,
    payload: activityId
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function postActivity(activity) {
  return {
    type: POST_ACTIVITY,
    payload: activity
  };
}

export function fetchHistory(history) {
  return {
    type: FETCH_HISTORY,
    payload: history
  };
}

export function fetchActivities(activities) {
  return {
    type: FETCH_ACTIVITIES,
    payload: activities
  };
}

export function fetchDogs(activities) {
  return {
    type: FETCH_ACTIVITIES,
    payload: activities
  };
}
