/* selectors */
export const getAll = ({ promotions }) => promotions;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
