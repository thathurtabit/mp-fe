import * as actions from './setSearch';
import { SET_SEARCH } from '../constants/stateConstants';

describe('setSearch Action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = 'search text';
    const expectedAction = {
      type: SET_SEARCH,
      payload,
    };
    expect(actions.setSearch(payload)).toEqual(expectedAction);
  });
});
