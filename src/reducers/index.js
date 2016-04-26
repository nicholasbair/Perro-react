import { combineReducers } from 'redux';
import ActivitiesReducer from './ActivitiesReducer';
import HistoryReducer from './HistoryReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activities: ActivitiesReducer,
  history: HistoryReducer,
  form: formReducer
});

export default rootReducer;
