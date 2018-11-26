import { STORE_RESPONSE } from '../constants/stateConstants';

export const storeResponse = obj => ({
  type: STORE_RESPONSE,
  payload: obj,
});
