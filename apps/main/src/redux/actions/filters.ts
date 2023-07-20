import { SET_FILTERS } from '~constants/ActionTypes';

//TODO: type

export const setFilters = (filter: string) => ({
  type: SET_FILTERS,
  filter,
});
