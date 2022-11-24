import { apiRequest } from '../commons/apiRequest';

const login = (form: any) => {
  return apiRequest('/api/login', 'POST', form);
};

const register = (form: any) => {
  return apiRequest('/api/register', 'POST', form);
};

export { login, register };
