import reducer from './rootReducer';
import * as types from '../constants/stateConstants';
import initState from '../store/initState';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initState, {})).toEqual(initState);
  });

  it('should handle ON_LOAD', () => {
    expect(
      reducer(initState, {
        type: types.ON_LOAD,
        payload: false,
      })
    ).toEqual({
      ...initState,
      loading: false,
    });
  });

  it('should handle STORE_RESPONSE', () => {
    expect(
      reducer(initState, {
        type: types.STORE_RESPONSE,
        payload: {},
      })
    ).toEqual({
      ...initState,
      response: {},
    });
  });

  it('should handle TOGGLE_MODAL', () => {
    expect(
      reducer(initState, {
        type: types.TOGGLE_MODAL,
        payload: true,
      })
    ).toEqual({
      ...initState,
      modalOpen: true,
    });
  });
});
