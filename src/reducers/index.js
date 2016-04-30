import { combineReducers } from 'redux';
import ActivitiesReducer from './ActivitiesReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activities: ActivitiesReducer,
  form: formReducer
});

export default rootReducer;
