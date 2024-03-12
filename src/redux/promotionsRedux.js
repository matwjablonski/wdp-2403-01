/* selectors */
export const getAll = ({ promotions }) => promotions;
export const getPromByType = ({ promotions }, type) =>
  promotions.filter(item => item.type === type);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
