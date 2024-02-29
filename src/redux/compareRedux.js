/* selectors */
export const getAllCompare = state => state.productsCompare;
/* ACTION NAME CREATOR */
const reducerName = 'productsCompare';
const createActionName = name => `app/${reducerName}/${name}`;

/* actions */
const ADD_PRODUCT_TO_COMPARE = createActionName('ADD_PRODUCT_TO_COMPARE');
const REMOVE_PRODUCT_FROM_COMPARE = createActionName('REMOVE_PRODUCT_FROM_COMPARE');

/* ACTION CREATORS */
export const addProductToCompare = payload => ({
  payload,
  type: ADD_PRODUCT_TO_COMPARE,
});
export const removeProductFromCompare = productName => ({
  payload: productName,
  type: REMOVE_PRODUCT_FROM_COMPARE,
});

/* reducer */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPARE: {
      const productAlreadyAdded = statePart.some(
        product => product.name === action.payload.name
      );

      if (statePart.length < 4 && !productAlreadyAdded) {
        const newProducts = [...statePart, action.payload].slice(0, 4);
        return newProducts;
      }
      return statePart;
    }
    case REMOVE_PRODUCT_FROM_COMPARE:
      return statePart.filter(product => product.name !== action.payload);
    default:
      return statePart;
  }
}
