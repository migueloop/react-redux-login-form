import axios from 'axios';
import config from 'config';

export default class Restful {

  constructor() {
    this.api = 'localhost:'+config.port;
    console.log("holiiii");
    console.log(config.appEnv);
    if (!this.api) {
      throw new Error('API Endpoint missing. Unable to make API calls.');
    }
    console.log('restful::this.api', this.api);
    this.headers = {
      // 'X-Requested-With': 'XMLHttpRequest',
      // 'Content-Type': 'application/json',
      // 'X-Username': tenant,
      // Authorization: `Bearer ${token}`,
    };
  }

  get(request) {
    const endpoint = this.api;
    return axios.get(`${endpoint}${request.endpoint}`, {
      params: request.params,
      headers: this.headers,
    })
    .then(res => {
      // Logs.logger.access(`${endpoint}${request.endpoint}`, ' Result ==> ' + JSON.stringify(res.data , null, 3))
      return Promise.resolve(res.data);
    })
    .catch(err => {
      console.log('Error in get request' , err);
    });
  }

  post(request) {
    const endpoint = this.api;
    const params = request.params || {};
    const progress = request.options ? request.options.progress : undefined;
    const headers = this.headers;
    return axios.post(`${endpoint}${request.endpoint}`, params, { progress, headers })
    .then(res => {
      return Promise.resolve(res.data);
    });
  }

  delete(request) {
    const endpoint = this.api;
    return new Promise((resolve, reject) => {
      axios.delete(`${endpoint}${request.endpoint}`, {
        progress: request.options ? request.options.progress : undefined,
        headers: this.headers,
      })
      .then(res => resolve(res.data))
      .catch(err => {
          console.log('err in delete', err);
          return reject;
      });
    });
  }

  put(request, xmlhttprequest) {
    const endpoint = this.api;
    let customHeaders = {};
    if (xmlhttprequest) {
      customHeaders = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'X-Tenant': this.headers['X-Tenant'],
        Authorization: this.headers.Authorization,
      };
    } else {
      customHeaders = {
        'Content-Type': 'application/json',
        'X-Tenant': this.headers['X-Tenant'],
        Authorization: this.headers.Authorization,
      };
    }
    return axios.put(`${endpoint}${request.endpoint}`, request.params || {}, {
      progress: request.options ? request.options.progress : undefined,
      headers: customHeaders,
    })
    .then(res => Promise.resolve(res.data));
  }

  patch(request, xmlhttprequest) {
    const endpoint = this.api;
    const customHeaders = {
      'Content-Type': 'application/json',
      'X-Tenant': this.headers['X-Tenant'],
      Authorization: this.headers.Authorization,
    };
    if (xmlhttprequest) {
      customHeaders['X-Requested-With'] = 'XMLHttpRequest';
    }
    return axios.patch(`${endpoint}${request.endpoint}`, request.params || {}, {
      progress: request.options ? request.options.progress : undefined,
      headers: customHeaders,
    })
    .then(res => Promise.resolve(res.data));
  }
}
