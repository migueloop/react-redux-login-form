import Restful from '../../lib/restful-driver';

export default class Users {
  constructor() {
    this.API = new Restful();
  }
  login() {
    return this.API.get({
      endpoint: 'login',
    });
  }
}
