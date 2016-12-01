export const SEQUENCE_SELECTED = 'SEQUENCE_SELECTED';

export function selectSequence(sequence) {
  return {
    type: SEQUENCE_SELECTED,
    payload: sequence
  };
}
