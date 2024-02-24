const viewModes = [
  {
    type: 'mobile',
    max: 400,
  },
  {
    type: 'tablet',
    max: 750,
  },
  {
    type: 'desktop',
    max: 2400,
  },
];

/* selectors */
export const getViewMode = ({ activeViewMode }) => activeViewMode;

/* action name creator */
const reducerName = 'viewMode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_VIEW = createActionName('SET_VIEW');

/* action creators */
export const setViewMode = payload => ({ payload, type: SET_VIEW });

/* action creator effects */
export const updateViewMode = width => {
  return dispatch => {
    const view = viewModes.find(view => width < view.max);
    console.log('ufsowa view: ', width, view);
    dispatch(setViewMode(view ? view.type : 'desktop'));
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_VIEW:
      return action.payload;
    default:
      return statePart;
  }
}
