import Sequences from '../reducers/reducer_sequences';

export const FETCH_SEQUENCES = 'FETCH_SEQUENCES';
export const FETCH_SEQUENCE = 'FETCH_SEQUENCE';

// get all sequences
export function fetchSequences() {
  const request = Sequences();
  return {
    type: FETCH_SEQUENCES,
    payload: request
  }
}

// get sequence by id
export function fetchSequence(id) {
  function findById(sequence) {
    return sequence.id == id;
  }

  const request = Sequences().find(findById)

  return {
    type: FETCH_SEQUENCE,
    payload: request
  };
}
