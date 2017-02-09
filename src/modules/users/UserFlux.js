import reducer from './UserReducer';
import Actions from './UserActions';
import CONSTANTS from './UserConstants';
import { Map, List, fromJS } from 'immutable';

const INITIAL_STATE = Map({
  loggedUser: Map({
    token: fromJS(''),
    isLogin: fromJS(false)
  })
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
