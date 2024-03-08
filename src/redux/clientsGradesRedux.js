import shortid from 'shortid';

/* selectors */

/* action name creator */
const reducerName = 'clientsGrades';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_GRADE = createActionName('ADD_GRADE');
const CHANGE_GRADE = createActionName('CHANGE_GRADE');

/* action creators */
export const addGrade = payload => ({ payload, type: ADD_GRADE });
export const changeGrade = payload => ({ payload, type: CHANGE_GRADE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_GRADE:
      return [...statePart, { ...action.payload, id: shortid(), clientID: '1' }];
    case CHANGE_GRADE:
      return statePart.map(clientGrade =>
        clientGrade.clientID === action.payload.clientID &&
        clientGrade.gradedProductName === action.payload.productName
          ? { ...clientGrade, grade: action.payload.grade }
          : clientGrade
      );
    default:
      return statePart;
  }
}
