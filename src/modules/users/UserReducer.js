import CONSTANTS from './UserConstants';
import { fromJS } from 'immutable';

export default function (state = '', action = {}) {
  switch (action.type) {
    case CONSTANTS.LOGIN:
      return state.set('loggedUser', fromJS(action.payload));
    default:
      return state;
  }
}
