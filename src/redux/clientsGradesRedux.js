import shortid from 'shortid';

/* selectors */

/* action name creator */
const reducerName = 'clientsGrades';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_GRADE = createActionName('ADD_GRADE');

/* action creators */
export const addGrade = payload => ({ payload, type: ADD_GRADE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_GRADE: {
      return [...statePart, { ...action.payload, id: shortid(), clientID: '1' }];
    }
    default:
      return statePart;
  }
}
