import { LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_PRODUCT_QUANTITY } from '../actions/types'

const initialState: CartStateType = {
  items: [],
}

const cartReducer = (
  state = initialState,
  action: CartActionType
): CartStateType => {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
      }
    case ADD_TO_CART:
      const newItem = {
        id: action.product.id,
        title: action.product.title,
        description: action.product.description,
        quantity: action.product.quantity,
        price: action.product.price,
        imgUri: action.product.imgUri,
        nutritionalInfo: action.product.nutritionalInfo,
        suitableForInfo: action.product.suitableForInfo,
        strapiId: action.product.strapiId,
      }
      // TODO: Can this be improved?
      // Creates a copy of item found in Array (In case of duplicates)
      let item = state.items.find((item) => item.id === newItem.id)
      if (item) {
        // Then we update the quantity
        item.quantity += newItem.quantity
        // Then we delete old item
        const newArr = state.items.filter((item) => item.id !== newItem.id)
        // Then update the array
        return {
          items: [...newArr, item],
        }
      } else {
        return {
          ...state,
          items: [...state.items, newItem],
        }
      }
    case REMOVE_FROM_CART:
      const updatedItems: ProductType[] = state.items.filter(
        (item: any) => item.id !== action.id
      )
      return {
        ...state,
        items: updatedItems,
      }
    case CHANGE_PRODUCT_QUANTITY:
      const newItems = state.items.map((item) => {
        if (item.id === action.product.id) {
          return {
            ...item,
            quantity: action.newAmount
          }
        } return item
      })
      return {
        ...state,
        items: newItems,
      }
  }
  return state
}

export default cartReducer
