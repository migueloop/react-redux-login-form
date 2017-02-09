import CONSTANTS from './UserConstants';
import Repository from './UserRepository';


export default class UserActions {
  login = (id) => {
    return {
      type: CONSTANTS.LOGIN,
      payload: this.repository.login(usermail,password),
    };
  }
}
