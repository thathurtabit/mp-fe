import * as actions from './storeResponse';
import { STORE_RESPONSE } from '../constants/stateConstants';

describe('storeResponse Action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = {};
    const expectedAction = {
      type: STORE_RESPONSE,
      payload,
    };
    expect(actions.storeResponse(payload)).toEqual(expectedAction);
  });
});
