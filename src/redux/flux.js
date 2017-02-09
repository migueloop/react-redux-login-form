import UserFlux from 'modules/users/UserFlux';

import { Map } from 'immutable';

const INITIAL_STATE = Map({
  loggedUser: UserFlux.INITIAL_STATE
});

export class Actions {
  constructor() {
  }
  get Common() {
    return new User.Actions();
  }
}

export function reducer(previousState = INITIAL_STATE, action) {
  return previousState
  .update('user', state => UserFlux.reducers(state, action));
}
