import { TOGGLE_MODAL } from '../constants/stateConstants';

export const toggleModal = bool => ({
  type: TOGGLE_MODAL,
  payload: bool,
});
