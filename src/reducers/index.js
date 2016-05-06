import { combineReducers } from 'redux';
import ActivitiesReducer from './ActivitiesReducer';
import AuthReducer from './AuthReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activities: ActivitiesReducer,
  form: formReducer,
  auth: AuthReducer
});

export default rootReducer;
