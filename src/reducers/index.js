import { combineReducers } from 'redux';
import ActivitiesReducer from './ActivitiesReducer';
import DogsReducer from './DogsReducer';
import AuthReducer from './AuthReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activities: ActivitiesReducer,
  dogs: DogsReducer,
  form: formReducer,
  auth: AuthReducer
});

export default rootReducer;
