/* selectors */
export const viewMode = ({ activeViewMode }) => activeViewMode;

/* action name creator */
const reducerName = 'viewMode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_VIEW = createActionName('SET_VIEW');

/* action creators */
export const setViewMode = payload => ({ payload, type: SET_VIEW });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_VIEW:
      return action.payload;
    default:
      return statePart;
  }
}
