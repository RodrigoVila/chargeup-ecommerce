import { SET_FILTERS } from '../actions/types'

const initialState: FiltersStateType = { filters: [] }

const filtersReducer = (state = initialState, action: FiltersActionType): FiltersStateType => {
  switch (action.type) {
    case SET_FILTERS:
      const newFilter = action.filter
      const item = state.filters.find((filter) => filter === newFilter)
      if (item) {
        return {
          filters: state.filters.filter((filter) => filter !== newFilter),
        }
      } else {
        return {
          ...state,
          filters: [...state.filters, newFilter],
        }
      }
  }
  return state
}

export default filtersReducer
