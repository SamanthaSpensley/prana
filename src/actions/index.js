import Sequences from '../reducers/reducer_sequences';

export const SEQUENCE_SELECTED = 'SEQUENCE_SELECTED';

export function selectSequence(id) {
  function findById(sequence) {
    return sequence.id === id;
  }

  const request = Sequences().find(findById)

  return {
    type: SEQUENCE_SELECTED,
    payload: request
  };
}
