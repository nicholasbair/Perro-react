import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

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
