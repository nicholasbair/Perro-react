export const OPEN_ACTIVITY = 'OPEN_ACTIVITY';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const FETCH_HISTORY = 'FETCH_HISTORY';

export function openActivity(activity) {
  return {
    type: OPEN_ACTIVITY,
    payload: activity
  };
}

export function postActivity(props) {
  return {
    type: POST_ACTIVITY,
    payload: activity
  };
}

export function fetchHistory(activities) {
  return {
    type: FETCH_HISTORY,
    payload: activities
  };
}
