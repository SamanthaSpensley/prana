import { combineReducers } from 'redux';
import SequenceReducer from './reducer_sequences';

const rootReducer = combineReducers({
  sequences: SequenceReducer
});

export default rootReducer;
