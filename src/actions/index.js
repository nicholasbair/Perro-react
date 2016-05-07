import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  OPEN_MODAL,
  OPEN_MODAL_HISTORY,
  CLOSE_MODAL,
  POST_ACTIVITY,
  FETCH_HISTORY,
  FETCH_HISTORY_ITEM,
  FETCH_ACTIVITY_TYPES_REQUEST,
  FETCH_ACTIVITY_TYPES_SUCCESS,
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

function fetchDogsRequest() {
  return {
    type: FETCH_DOGS_REQUEST
  };
}

export function fetchDogs() {
  return dispatch => {
    dispatch(fetchDogsRequest())
    return axios.get(`${ROOT_URL}/api/dog/findAll`).then(res => {
      dispatch(fetchDogsSuccess(res.data))
    });
  }
}

function fetchDogsSuccess(dogs) {
  return {
    type: FETCH_DOGS_SUCCESS,
    payload: dogs
  };
}

function fetchActivityTypesRequest() {
  return {
    type: FETCH_ACTIVITY_TYPES_REQUEST
  };
}

export function fetchActivityTypes() {
  return dispatch => {
    dispatch(fetchActivityTypesRequest())
    return axios.get(`${ROOT_URL}/api/activityType/findAll`).then(res => {
      dispatch(fetchActivityTypesSuccess(res.data))
    });
  };
}

function fetchActivityTypesSuccess(activityTypes) {
  return {
    type: FETCH_ACTIVITY_TYPES_SUCCESS,
    payload: activityTypes
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

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
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
