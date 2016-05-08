import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  POST_ACTIVITY_REQUEST,
  POST_ACTIVITY_SUCCESS,
  FETCH_HISTORY_ITEM_REQUEST,
  FETCH_HISTORY_ITEM_SUCCESS,
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_SUCCESS,
  FETCH_ACTIVITY_TYPES_REQUEST,
  FETCH_ACTIVITY_TYPES_SUCCESS,
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

function fetchHistoryItemRequest() {
  return {
    type: FETCH_HISTORY_ITEM_REQUEST
  };
}

function fetchHistoryItemSuccess(item) {
  return {
    type: FETCH_HISTORY_ITEM_SUCCESS,
    payload: item
  };
}

export function fetchHistoryItem(itemId) {
  return dispatch => {
    dispatch(fetchHistoryItemRequest());
    return axios.get(`${ROOT_URL}/api/activity/findById/${itemId}`).then(res => {
      dispatch(fetchHistoryItemSuccess(res.data));
      dispatch(openModal({ activityType: res.data[0].type, formData: res.data }));
    });
  };
}

function postActivityRequest() {
  return {
    type: POST_ACTIVITY_REQUEST
  };
}

function postActivitySuccess() {
  return {
    type: POST_ACTIVITY_SUCCESS
  };
}

export function postActivity(formData) {
  return dispatch => {
    dispatch(postActivityRequest());
    return axios.post(`${ROOT_URL}/api/activity/add`, formData).then(res => {
      dispatch(postActivitySuccess());
      dispatch(fetchHistory());
    });
  }
}

function fetchHistoryRequest() {
  return {
    type: FETCH_HISTORY_REQUEST
  };
}

function fetchHistorySuccess(history) {
  return {
    type: FETCH_HISTORY_SUCCESS,
    payload: history
  };
}

export function fetchHistory() {
  return dispatch => {
    dispatch(fetchHistoryRequest());
    return axios.get(`${ROOT_URL}/api/activity/findAll`).then(res => {
      dispatch(fetchHistorySuccess(res.data));
    });
  };
}

function fetchDogsRequest() {
  return {
    type: FETCH_DOGS_REQUEST
  };
}

function fetchDogsSuccess(dogs) {
  return {
    type: FETCH_DOGS_SUCCESS,
    payload: dogs
  };
}

export function fetchDogs() {
  return dispatch => {
    dispatch(fetchDogsRequest());
    return axios.get(`${ROOT_URL}/api/dog/findAll`).then(res => {
      dispatch(fetchDogsSuccess(res.data));
    });
  };
}

function fetchActivityTypesRequest() {
  return {
    type: FETCH_ACTIVITY_TYPES_REQUEST
  };
}

function fetchActivityTypesSuccess(activityTypes) {
  return {
    type: FETCH_ACTIVITY_TYPES_SUCCESS,
    payload: activityTypes
  };
}

export function fetchActivityTypes() {
  return dispatch => {
    dispatch(fetchActivityTypesRequest());
    return axios.get(`${ROOT_URL}/api/activityType/findAll`).then(res => {
      dispatch(fetchActivityTypesSuccess(res.data));
    });
  };
}

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

export function openModal({ activityType, formData = null }) {
  return {
    type: OPEN_MODAL,
    payload: { activityType, formData }
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
