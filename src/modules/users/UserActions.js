import CONSTANTS from './UserConstants';
import Repository from './UserRepository';


export default class UserActions {
  constructor() {
  }

  login = (id) => {
    return {
      type: CONSTANTS.LOGIN,
      payload: this.repository.login(usermail,password),
    };
  }
}
