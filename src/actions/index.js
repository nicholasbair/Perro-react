export const LOG_ACTIVITY = 'LOG_ACTIVITY';
export const POST_ACTIVITY = 'POST_ACTIVITY';

export function logActivity(activity) {
  return {
    type: LOG_ACTIVITY,
    payload: activity
  };
}

export function postActivity(activity) {
  return {
    type: POST_ACTIVITY,
    payload: activity
  };
}
