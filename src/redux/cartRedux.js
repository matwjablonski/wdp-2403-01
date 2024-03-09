/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const CHANGE_PRODUCT_AMOUNT = createActionName('CHANGE_PRODUCT_AMOUNT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const changeProductAmount = payload => ({
  payload,
  type: CHANGE_PRODUCT_AMOUNT,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case CHANGE_PRODUCT_AMOUNT: {
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    }
    default:
      return statePart;
  }
}
