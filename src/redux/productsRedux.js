/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getProductById = (state, id) =>
  state.products.find(product => product.id === id);
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getByTrend = ({ products }, trend) =>
  products.filter(item => item.trends === trend);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
