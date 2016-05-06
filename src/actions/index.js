import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  OPEN_MODAL,
  OPEN_MODAL_HISTORY,
  CLOSE_MODAL,
  POST_ACTIVITY,
  FETCH_HISTORY,
  FETCH_HISTORY_ITEM,
  FETCH_ACTIVITIES,
  FETCH_DOGS,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return dispatch => {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
      // If req is good:
        // update state to indicate auth'ed user
        dispatch({ type: AUTH_USER });
        // Save JWT token
        localStorage.setItem('token', response.data.token);
        // Redirect to app
        browserHistory.push('/dog-app');
      })
      .catch(() => {
        // If req is bad
          // Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signoutUser() {
  // Remove JWT token
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function signupUser({ email, password }) {
  return dispatch => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/dog-app');
      })
      .catch((response) => {
        dispatch(authError(response.data.error));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export function fetchMessage() {
  return dispatch => {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
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
