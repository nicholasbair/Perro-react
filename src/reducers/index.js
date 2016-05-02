import { combineReducers } from 'redux';
import ActivitiesReducer from './ActivitiesReducer';
import AuthenticationReducer from './AuthenticationReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activities: ActivitiesReducer,
  form: formReducer,
  authenticated: AuthenticationReducer
});

export default rootReducer;
