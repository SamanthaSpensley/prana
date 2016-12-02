import { combineReducers } from 'redux';
import SequencesReducer from './reducer_sequences';
import ActiveSequence from './reducer_active_sequence';

const rootReducer = combineReducers({
  sequences: SequencesReducer,
  activeSequence: ActiveSequence
});

export default rootReducer;
