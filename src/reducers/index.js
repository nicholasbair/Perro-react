import { combineReducers } from 'redux';
import ActivitiesReducer from './ActivitiesReducer';

const rootReducer = combineReducers({
  activities: ActivitiesReducer
});

export default rootReducer;
