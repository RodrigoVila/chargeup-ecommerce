import { SET_FILTERS } from '~constants/ActionTypes'
import { FiltersActionType, FiltersStateType } from '~types'

const initialState: FiltersStateType = { filters: [] }

const filtersReducer = (state = initialState, action: FiltersActionType): FiltersStateType => {
  const { type, filter: newFilter } = action
  switch (type) {
    case SET_FILTERS:
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
