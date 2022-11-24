import axios from 'axios';

const appUrl = process.env.DEV ? 'http://127.0.0.1:8000' : '';

const apiRequest = (
  endpoint: any,
  methodType: any,
  data = {},
  multipart = false,
  isGetAllResponse = false
) => {
  let headers = {} as any;

  if (localStorage.getItem('access_token') !== null) {
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    headers['Accept'] = 'application/json';
  }

  if (multipart) {
    var boundary = 'xxxxxxxxxx';
    headers['content-type'] = 'multipart/form-data; boundary=' + boundary;
  }

  return new Promise((resolve, reject) => {
    axios({
      method: methodType,
      url: appUrl + endpoint,
      data: data,
      headers: headers,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch(function (error) {
        // if (
        //   error.response.status === 401 &&
        //   window.location.pathname !== '/login'
        // ) {
        //   window.localStorage.removeItem('access_token');
        //   window.location.replace('/login');
        // }
        reject(error.response);
      });
  });
};

export { apiRequest };
