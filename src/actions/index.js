export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const FETCH_HISTORY = 'FETCH_HISTORY';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_DOGS = 'FETCH_DOGS';

export function openModal(activityType) {
  return {
    type: OPEN_MODAL,
    payload: activityType
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
