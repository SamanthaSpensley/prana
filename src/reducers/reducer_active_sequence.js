import { FETCH_SEQUENCES, FETCH_SEQUENCE } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
  case 'FETCH_SEQUENCE':
    return { ...state, sequence: action.payload };
  }
  return state;
}


// const INITIAL_STATE = { all: [], sequence: null }
//
// export default function(state = INITIAL_STATE, action) {
//   switch(action.type) {
//   case 'FETCH_SEQUENCE':
//     return { ...state, sequence: action.payload };
//   case 'FETCH_SEQUENCES':
//     return { ...state, all: action.payload };
//   default:
//     return state;
//   }
// }
