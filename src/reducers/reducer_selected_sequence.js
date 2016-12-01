export default function(state=null, action) {
  switch(action.type) {
  case 'SEQUENCE_SELECTED':
    return action.payload
  }
  return state;
}
