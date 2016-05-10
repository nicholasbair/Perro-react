import axios from 'axios';
import {
  OPEN_DOG_MODAL,
  CLOSE_DOG_MODAL,
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  POST_DOG_REQUEST,
  POST_DOG_SUCCESS,
  UPDATE_DOG_REQUEST,
  UPDATE_DOG_SUCCESS,
  DELETE_DOG_REQUEST,
  DELETE_DOG_SUCCESS
} from './types';

const ROOT_URL = 'http://localhost:3090';

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
