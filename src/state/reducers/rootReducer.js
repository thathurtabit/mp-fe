import * as types from '../constants/stateConstants';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ON_LOAD:
      return { ...state, loading: action.payload };
    case types.STORE_RESPONSE:
      return { ...state, response: action.payload };
    case types.TOGGLE_MODAL:
      return { ...state, modalOpen: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
