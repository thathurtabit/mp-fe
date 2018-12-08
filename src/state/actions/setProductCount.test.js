import * as actions from './setProductCount';
import { SET_PRODUCT_COUNT } from '../constants/stateConstants';

describe('setProductCount Action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = 200;
    const expectedAction = {
      type: SET_PRODUCT_COUNT,
      payload,
    };
    expect(actions.setProductCount(payload)).toEqual(expectedAction);
  });
});
