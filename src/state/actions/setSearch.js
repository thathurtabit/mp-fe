import { SET_SEARCH } from '../constants/stateConstants';

export const setSearch = string => ({
  type: SET_SEARCH,
  payload: string,
});
