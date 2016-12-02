import Sequences from './reducer_sequences';
import { FETCH_SEQUENCES, FETCH_SEQUENCE } from '../actions/index';

const INITIAL_STATE = { all: Sequences(), sequence: null }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'FETCH_SEQUENCE':
    return { ...state, sequence: action.payload.data };
  case 'FETCH_SEQUENCES':
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}



// export default function(state = {}, action) {
//   switch(action.type) {
//   case 'FETCH_SEQUENCE':
//     return { ...state, sequence: action.payload };
//   }
//   return state;
// }
