import { SET_PRODUCT_COUNT } from '../constants/stateConstants';

export const setProductCount = int => ({
  type: SET_PRODUCT_COUNT,
  payload: int,
});
