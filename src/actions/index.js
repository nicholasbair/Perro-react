export const OPEN_ACTIVITY_MODAL = 'OPEN_ACTIVITY_MODAL';
export const CLOSE_ACTIVITY_MODAL = 'CLOSE_ACTIVITY_MODAL';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const FETCH_HISTORY = 'FETCH_HISTORY';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';

export function openActivityModal(activity) {
  return {
    type: OPEN_ACTIVITY_MODAL,
    payload: activity
  };
}

export function closeActivityModal(activity) {
  return {
    type: CLOSE_ACTIVITY_MODAL,
    payload: activity
  };
}

export function postActivity(props) {
  return {
    // type: POST_ACTIVITY,
    // payload: activity
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
