import * as actions from './toggleModal';
import { TOGGLE_MODAL } from '../constants/stateConstants';

describe('toggleModal Action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = true;
    const expectedAction = {
      type: TOGGLE_MODAL,
      payload,
    };
    expect(actions.toggleModal(payload)).toEqual(expectedAction);
  });
});
