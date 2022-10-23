import { SET_FILTERS } from './types'

//TODO: type

export const setFilters = (filter: string) => ({
  type: SET_FILTERS,
  filter,
})
