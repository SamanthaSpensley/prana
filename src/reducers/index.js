import { combineReducers } from 'redux';
import SequencesReducer from './reducer_active_sequence';

const rootReducer = combineReducers({
  sequences: SequencesReducer,
});

export default rootReducer;
